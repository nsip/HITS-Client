/*
NAME
	TODO

COPYRIGHT
	National Schools Interoperability Programme
	Scott Penrose <scottp@dd.com.au>
	Ben Carter <Ben Carter <ben@systemic.com.au>

INSTALLATION / CONFIGURATION
	TODO

BUGS / TASKS
	* Add UUID Generate for manual XML Creation
	* Consider adding records, which School is it added to for security on SIF side?

*/
var hitsclient = (function(_app) {
	// var providerServer = "http://hits.dev.nsip.edu.au:8080/SIF3InfraREST/hits/";
	// XXX Make this configurable like the others.
	var providerServer = "http://hits.nsip.edu.au/SIF3InfraREST/hits/";
	// var providerServer = "http://localhost:8080/SIF3InfraREST/hits/";

	var methods = [];
	var loadMethodValues = function() {
		methods.push({
			name: "Get One",
			executeMethod: executeGetOne,
			parameterBody: "getOne"
		});
		methods.push({
			name: "Get Many",
			executeMethod: executeGetMany,
			parameterBody: "getMany"
		});
		methods.push({
			name: "Post One",
			executeMethod: executePostOne,
			parameterBody: "postOne"
		});
		methods.push({
			name: "Put One",
			executeMethod: executePutOne,
			parameterBody: "putOne"
		});
	};

	/* TODO Consider using timestamp (although, is uuid needed?)
		function generateUUID(){
		    var d = new Date().getTime();
		    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random()*16)%16 | 0;
			d = Math.floor(d/16);
			return (c=='x' ? r : (r&0x7|0x8)).toString(16);
		    });
		    return uuid;
		};	
	*/
	var uuid = function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	};

	// TODO Consider using done instead of success
	var ajax = function(args) {
		args.success = function(result, status, xhr) {
			ajaxSuccess.call(this, result, status, xhr, args, args.callback);
			return true;
		};
		args.error = function(xhr, status, reason) {
			ajaxFailure.call(this, xhr, status, reason, args, args.callback);
			return true;
		};
		$.ajax(args);
	};

	var ajaxSuccess = function(result, status, xhr, args, callback) {
		if (callback) {
			callback.call(this, xhr, status, result, undefined, args);
		} else {
			console.log(result);
			console.log(status);
			console.log(xhr);
		}
	};

	var ajaxFailure = function(xhr, status, reason, args, callback) {
		if (callback) {
			callback.call(this, xhr, status, undefined, reason, args);
		} else {
			console.log(reason);
			console.log(status);
			console.log(xhr);
		}
	};

	var panelError = function(message) {
		var div = document.createElement("div");
		$(div).addClass("alert");
		$(div).addClass("alert-danger");
		$(div).addClass("alert-dismissable");
		$(div).html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + message);
		$(".container .row:first").html(div);
	};

	var getSessionToken = function(solutionId, applicationKey, userToken, password) {
		var body = hitsclient.environment.getDetailed(solutionId, applicationKey, userToken);
		console.log(body);
		var args = {};
		args.callback = getSessionTokenCallback;
		args.url = providerServer + "environments/environment";
		args.data = body;
		args.dataType = "XML";
		//	args.contentType = "application/xml";
		args.type = "POST";
		var token = getTokenForAuth(applicationKey, password);
		args.headers = {};
		args.headers["Content-Type"] = "application/xml";
		args.headers["Authorization"] = token.method + " " + token.value;
		if (token.timestamp) {
			args.headers["timestamp"] = token.timestamp;
		}
		args.notifier = executeCall;
		ajax(args);
	};

	var getTokenForAuth = function(userPart, passPart) {
		var method = $("#authentication-method").val();
		var token = {
			method: "",
			value: ""
		};
		if (method === "SIF_HMACSHA256") {
			token.timestamp = new moment().toISOString();
			token.method = method;
			var value = userPart + ":" + CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(userPart + ":" + token.timestamp, passPart));
			value = Base64.encode(value);
			token.value = value;
		} else {
			var value = userPart + ":" + passPart;
			value = Base64.encode(value);
			token.value = value;
			token.method = "Basic";
		}
		return token;
	}

	var getSessionTokenCallback = function(xhr, status, result, reason, args) {
		if (xhr.status == 409 || xhr.status == 201) {
			var sessionToken = getFirstXmlTagContents(xhr.responseText, "sessionToken");
			$("#sessionToken").val(sessionToken);
			args.notifier.call(this);
		} else {
			var message = getFirstXmlTagContents(xhr.responseText, "message");
			if (message == null) {
				message = "Status " + xhr.status + " (" + reason + ")";
			}
			panelError(message);
		}
	};

	var validateEnvironment = function() {
		// Need either Session Token or Full Details
		var sessionValid = false;
		var sessionToken = $("#sessionToken").val();
		if (sessionToken.length > 0) {
			sessionValid = true;
		}
		var solutionId = $("#solutionId").val();
		if (!sessionValid && solutionId.length == 0) {
			panelError("Please enter a Solution Id");
			$("#solutionId").parent("div").addClass("has-error");
			return false;
		} else {
			$("#solutionId").parent("div").removeClass("has-error");
		}
		var applicationKey = $("#applicationKey").val();
		if (!sessionValid && applicationKey.length == 0) {
			panelError("Please enter an Application Key");
			$("#applicationKey").parent("div").addClass("has-error");
			return false;
		} else {
			$("#applicationKey").parent("div").removeClass("has-error");
		}
		var userToken = $("#userToken").val();
		if (!sessionValid && userToken.length == 0) {
			panelError("Please enter a User Token");
			$("#userToken").parent("div").addClass("has-error");
			return false;
		} else {
			$("#userToken").parent("div").removeClass("has-error");
		}
		var password = $("#password").val();
		if (password.length == 0) {
			panelError("Please enter a Password");
			$("#password").parent("div").addClass("has-error");
			return false;
		} else {
			$("#password").parent("div").removeClass("has-error");
		}
		var sessionToken = $("#sessionToken").val();
		if (sessionToken.length == 0) {
			getSessionToken(solutionId, applicationKey, userToken, password);
			return false;
		}
		return true;
	}

	var validateProvider = function() {
		var providerOption = $("#provider option:selected");
		var provider = providerOption.data("provider");
		if (provider && provider != null) {
			$("#provider").parent("div").removeClass("has-error");
		} else {
			panelError("Please select a Provider");
			$("#provider").parent("div").addClass("has-error");
			return false;
		}
		return true;
	}

	var validateMethod = function() {
		var methodOption = $("#method option:selected");
		var method = methodOption.data("method");
		if (method && method != null) {
			$("#method").parent("div").removeClass("has-error");
		} else {
			panelError("Please select a Method");
			$("#method").parent("div").addClass("has-error");
			return false;
		}
		return true;
	}

	var executeCall = function() {
		if (validateEnvironment() && validateProvider() && validateMethod()) {
			var zoneId = $("#userToken").val();
			var password = $("#password").val();
			var sessionToken = $("#sessionToken").val();
			var provider = $("#provider option:selected").data("provider");
			var method = $("#method option:selected").data("method");
			method.executeMethod.call(this, zoneId, password, sessionToken, provider, method);
		}
	};

	var executePutOne = function(zoneId, password, sessionToken, provider, method) {
		var body = $("#putOneBody").val();
		if (body.length == 0) {
			panelError("Please enter a XML Body");
			$("#putOneBody").parent("div").addClass("has-error");
			return;
		} else {
			$("#putOneBody").parent("div").removeClass("has-error");
		}

		var refid = $("#putOneReferenceId").val();
		if (refId.length == 0) {
			panelError("Please enter a Reference Id");
			$("#putOneReferenceId").parent("div").addClass("has-error");
			return;
		} else {
			$("#putOneReferenceId").parent("div").removeClass("has-error");
		}

		var args = {};

		var single = provider.value.slice(0, -1);
		var namespace = 'xmlns="http://www.sifassociation.org/au/datamodel/3.4"';
		var headerRegExp = new RegExp("(\<" + single + "[^\>]*)\>");
		if (body.indexOf("xmlns") < 0) {
			body = body.replace(headerRegExp, "$1 " + namespace + "\>");
		}


		args.callback = executeCallback;
		args.url = providerServer + "requests/" + provider.value + "/" + provider.value + "/" + refid;
		args.url = args.url.slice(0, -1); // Strip plural provider name
		//	args.contentType = "application/xml";
		args.dataType = "XML";
		args.type = "PUT";
		var token = getTokenForAuth(sessionToken, password);
		args.token = token;
		args.headers = {};
		args.headers["Content-Type"] = "application/xml";
		args.headers["Authorization"] = token.method + " " + token.value;
		if (token.timestamp) {
			args.headers["timestamp"] = token.timestamp;
		}
		args.data = body;
		ajax(args);
	}


	var executePostOne = function(zoneId, password, sessionToken, provider, method) {
		var body = $("#postOneBody").val();
		if (body.length == 0) {
			panelError("Please enter a XML Body");
			$("#postOneBody").parent("div").addClass("has-error");
			return;
		} else {
			$("#postOneBody").parent("div").removeClass("has-error");
		}

		var args = {};

		var single = provider.value.slice(0, -1);
		var namespace = 'xmlns="http://www.sifassociation.org/au/datamodel/3.4"';
		var headerRegExp = new RegExp("(\<" + single + "[^\>]*)\>");
		if (body.indexOf("xmlns") < 0) {
			body = body.replace(headerRegExp, "$1 " + namespace + "\>");
		}

		args.callback = executeCallback;
		args.url = providerServer + "requests/" + provider.value + "/" + provider.value;
		args.url = args.url.slice(0, -1); // Strip plural provider name
		//	args.contentType = "application/xml";
		args.dataType = "XML";
		args.type = "POST";
		var token = getTokenForAuth(sessionToken, password);
		args.token = token;
		args.headers = {};
		args.headers["Content-Type"] = "application/xml";
		args.headers["Authorization"] = token.method + " " + token.value;
		if (token.timestamp) {
			args.headers["timestamp"] = token.timestamp;
		}
		args.data = body;
		ajax(args);
	};

	var executeGetOne = function(zoneId, password, sessionToken, provider, method) {
		var referenceId = $("#getOneReferenceId").val();
		if (referenceId.length == 0) {
			panelError("Please enter a Reference Id");
			$("#getOneReferenceId").parent("div").addClass("has-error");
			return;
		} else {
			$("#getOneReferenceId").parent("div").removeClass("has-error");
		}

		var args = {};
		args.callback = executeCallback;
		args.url = providerServer + "requests/" + provider.value + "/" + referenceId;
		//	args.contentType = "application/xml";
		args.dataType = "XML";
		args.type = "GET";
		var token = getTokenForAuth(sessionToken, password);
		args.token = token;
		args.headers = {};
		args.headers["Content-Type"] = "application/xml";
		args.headers["Authorization"] = token.method + " " + token.value;
		if (token.timestamp) {
			args.headers["timestamp"] = token.timestamp;
		}
		ajax(args);
	};

	var executeGetMany = function(zoneId, password, sessionToken, provider, method) {
		var recordsPerPage = $("#getManyRecordsPerPage").val();
		if (recordsPerPage.length == 0) {
			panelError("Please enter a value for Records per Page");
			$("#getManyRecordsPerPage").parent("div").addClass("has-error");
			return;
		} else {
			$("#getManyRecordsPerPage").parent("div").removeClass("has-error");
		}
		var page = $("#getManyPage").val();
		if (recordsPerPage.length == 0) {
			panelError("Please enter a value for Page Number");
			$("#getManyPage").parent("div").addClass("has-error");
			return;
		} else {
			$("#getManyPage").parent("div").removeClass("has-error");
		}
		page = new Number(page);
		if (page < 1) page = 1;


		var args = {};
		args.callback = executeCallback;
		args.url = providerServer + "requests/" + provider.value + "?navigationPage=" + page + "&navigationPageSize=" + recordsPerPage;
		//	args.contentType = "application/xml";
		args.dataType = "XML";
		args.type = "GET";
		var token = getTokenForAuth(sessionToken, password);
		args.token = token;
		args.headers = {};
		args.headers["Content-Type"] = "application/xml";
		args.headers["Authorization"] = token.method + " " + token.value;
		if (token.timestamp) {
			args.headers["timestamp"] = token.timestamp;
		}
		ajax(args);
	};

	var executeCallback = function(xhr, status, result, reason, args) {
		console.log(xhr);
		console.log(status);
		console.log(result);
		console.log(reason);
		$(".container .row:first").html("");
		$("#responseStatus").text(xhr.status);
		$("#responseStatusText").text(xhr.statusText);
		$("#response").text(xhr.responseText);
		var newUrl = args.url;
		if (args.url.indexOf("\?") > 0) {
			newUrl = newUrl + '&access_token=' + args.token.value;
		} else {
			newUrl = newUrl + '?access_token=' + args.token.value;
		}
		newUrl += '&authenticationMethod=' + args.token.method;
		if (args.token.timestamp) {
			newUrl += '&timestamp=' + args.token.timestamp;
		}
		$('#responseURL').text(newUrl);
		$('#responseURL').attr('href', newUrl);
	};

	var getFirstXmlTagContents = function(xmlDocument, xmlTag) {
		var result = null;
		var regularExpression = new RegExp("<" + xmlTag + ">([^<]*)<", "g");
		var matches = regularExpression.exec(xmlDocument);
		if (matches && matches != null && matches.length > 1) {
			result = matches[1];
		}
		return result;
	};

	var showParameters = function() {
		var methodOption = $("#method option:selected");
		var providerOption = $("#provider option:selected");
		var method = methodOption.data("method");
		var provider = providerOption.data("provider");
		$(".parameter-header").css("display", "none");
		$(".parameter-block").css("display", "none");
		if (method && method.parameterBody) {
			$(".parameter-header").css("display", "");
			$("#" + method.parameterBody).css("display", "");
		}
		// Optional parameter values from Provider / Method combination
		if (method && method.parameterBody == 'postOne') {
			$("#postOneBody").val(provider.template ? provider.template : '');
		}
		if (method && method.parameterBody == 'putOne') {
			$("#putOneBody").val(provider.template ? provider.template : '');
		}

	};

	var populateProviders = function() {
		$("#provider").html("<option></option>");
		for (var i = 0; i < _app.providers.length; i++) {
			var provider = _app.providers[i];
			var option = new Option(provider.name, provider.value);
			$(option).data("provider", provider);
			$("#provider").append(option);
		}
		$("#provider").on("change", showParameters);
	};

	var populateMethods = function() {
		$("#method").html("<option></option>");
		for (var i = 0; i < methods.length; i++) {
			var method = methods[i];
			var option = new Option(method.name, method.value);
			$(option).data("method", method);
			$("#method").append(option);
		}
		$("#method").on("change", showParameters);
	};

	_app.ready = function() {
		populateProviders();
		loadMethodValues();
		populateMethods();
		$("#execute").on("click", executeCall);

		var providerServer = $.url().param('providerServer');
		if (providerServer) {
			$('#providerServer').val(providerServer);
		}

		// Load School REF ID - Backwards compatibile
		var school_id = $.url().param('school_id');
		if (school_id) {
			$('#userToken').val(school_id);
		}
		var solutionId = $.url().param('solution_id');
		if (solutionId) {
			$('#solutionId').val(solutionId);
		}
		var applicationKey = $.url().param('application_key');
		if (applicationKey) {
			$('#applicationKey').val(applicationKey);
		}
		var userToken = $.url().param('user_token');
		if (userToken) {
			$('#userToken').val(userToken);
		}
		var password = $.url().param('password');
		if (password) {
			$('#password').val(password);
		}
		var hmac = $.url().param('auth_method');
		if (hmac) {
			$('#authentication-method').val(hmac);
		}
		if ($("#authentication-method").val() !== "Basic" && $("#authentication-method").val() !== "SIF_HMACSHA256") {
		    $('#authentication-method').val("Basic");
		}
	};

	return _app;
}(hitsclient || {}));
