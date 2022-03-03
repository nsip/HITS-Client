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

	// XXX Make this configurable like the others.
	var namespace = "http://www.sifassociation.org/datamodel/au/3.4";
	var infraNamespace = "http://www.sifassociation.org/infrastructure/3.2.1";

	var methods = [];

	var loadMethodValues = function() {
	    methods = [{
			name: "Get One",
			executeMethod: _app.sif.getOne,
			parameterBody: prepareGetOne
		},
		{
			name: "Get Many",
			executeMethod: _app.sif.getMany,
			parameterBody: prepareGetMany
		},
		{
			name: "Query by Service Path",
			executeMethod: _app.sif.getByServicePath,
			parameterBody: prepareGetByServicePath,
			requiredProperties : ["servicePaths"]
		},
		{
			name: "Query by Example",
			executeMethod: _app.sif.getByQBE,
			parameterBody: prepareGetByQBE
		},
		{
			name: "Create One",
			executeMethod: _app.sif.createOne,
			parameterBody: prepareCreateOne
		},
		{
			name: "Create Many",
			executeMethod: _app.sif.createMany,
			parameterBody: prepareCreateMany
		},
		{
			name: "Update One",
			executeMethod: _app.sif.updateOne,
			parameterBody: prepareUpdateOne
		},
		{
			name: "Update Many",
			executeMethod: _app.sif.updateMany,
			parameterBody: prepareUpdateMany
		},
		{
			name: "Delete One",
			executeMethod: _app.sif.deleteOne,
			parameterBody: prepareDeleteOne
		},
		{
			name: "Delete Many",
			executeMethod: _app.sif.deleteMany,
			parameterBody: prepareDeleteMany
		}];
	};
	
	var uuid = function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	};
	_app.uuid = uuid;

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
	_app.ajax = ajax;

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

	var validateEnvironment = function() {
		// Need either Session Token or Full Details
		var inputFields = $("input[data-required=true]");
		var result = true;
		var error = "";
		for (var i = 0; i < inputFields.length; i++) {
			var $field = $(inputFields[i]);
			if ($field.val().length === 0) {
				$field.parent("div").addClass("has-error");
				if (error === "") {
					error = "Please enter a " + $field.data("name");
					panelError(error);
				}
				result = false;
			} else {
				$field.parent("div").removeClass("has-error");
			}
		}
		return result;
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
		if (!validateEnvironment()) {
			createEnvironment();
		} else if (validateEnvironment() && validateProvider() && validateMethod()) {
			var provider = $("#provider option:selected").data("provider");
			var servicePath = $("#servicePath option:selected").data("service-path");
			var method = $("#method option:selected").data("method");
			var args = getParameters(provider);
			args.provider = provider;
			args.servicePath = servicePath;
			method.executeMethod.call(this, args, executeCallback);
		}
	};

	var executeCallback = function(xhr, status, result, reason, args) {
		console.log(xhr);
		console.log(status);
		console.log(result);
		console.log(reason);
		$("#responseStatus").text(xhr.status);
		$("#responseStatusText").text(xhr.statusText);
		$("#response").text(xhr.responseText);
		$("#requestType").text(args.type);
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
		if (args.headers.navigationpage && args.headers.navigationpagesize) {
			newUrl += "&navigationPage=" + args.headers.navigationpage + "&navigationPageSize=" + args.headers.navigationpagesize;
		}
		if (args.type == _app.sif.methods.GET) {
			$a = $("<a></a>");
			$a.attr("href", newUrl);
			$a.text(newUrl);
			$("#responseURL").html("");
			$("#responseURL").append($a);
		} else {
			$("#responseURL").text(args.url);
		}
	};

	var populateProviders = function() {
		$("#provider").html("<option></option>");
		for (var i = 0; i < _app.providers.length; i++) {
			var provider = _app.providers[i];
			provider.single = provider.value.substr(0, provider.value.length - 1);
			_app.providers[i] = provider;
			var option = new Option(provider.name, provider.value);
			$(option).data("provider", provider);
			$("#provider").append(option);
		}
	};

	var populateMethods = function() {
		$(".service-path-item").hide();
		$("#method").html("<option></option>");
		var provider = $("#provider option:selected").data("provider");
		if (provider) {
			for (var i = 0; i < methods.length; i++) {
				var method = methods[i];
				if (validMethod(method, provider)) {
					var option = new Option(method.name, method.value);
					$(option).data("method", method);
					$("#method").append(option);
				}
			}
		}
	};

	var validMethod = function(method, provider) {
		var result = true;
		if (method.requiredProperties) {
			for (var i = 0; result && i < method.requiredProperties.length; i++) {
				result = result && provider.hasOwnProperty(method.requiredProperties[i]);
			}
		}
		return result;
	};

	var determineServerUrl = function(servers) {
		var protocol = window.location.protocol;
		if (protocol === "file:") {
			return "http://" + servers[servers.length -1];
		} 
		var server = false;
		for (var i = 0; !server && i < servers.length; i++) {
			if (window.location.href.indexOf(servers[i]) > -1) {
				server = servers[i];
			}
		}
		if (!server) server = servers[0];
		return protocol + "//" + server;
	};

	_app.ready = function() {
		populateProviders();
		loadMethodValues();
		setup();
		$("#execute").on("click", executeCall);
		$("#provider").on("change", populateMethods);
		$("#method").on("change", populateParameters);
		$("#servicePath").on("change", populateServicePath);
		$("#collapseServerHeading").on("click", function() {
			if ($("#collapseServerGroup:visible").length == 0) {
				$("#collapseServerGroup").addClass("in");
			} else {
				$("#collapseServerGroup").removeClass("in");
			}
		});
		$(".service-path-item").hide();
	};

	var finishSetup = function(complete) {
		if (!complete) {
			compatibileSetup();
		}
		createEnvironment();
	}

	var setup = function() {
		var productionServer = "hits.nsip.edu.au";
		var preProdServer = "hits.test.nsip.edu.au";
		var devServer = "localhost:8181";
		var currentServer = determineServerUrl([ productionServer, preProdServer, devServer ]);
		$("#server").val(currentServer + "/SIF3InfraREST/hits/");
		$("#solutionid").val("HITS");
		var id = getId();
		var dbid = getDbId();
		if (id && dbid) {
			$.get(currentServer + "/api/account/" + id + "/database/" + dbid).success(function(data) {
				     $("#applicationkey").val(dbid);
				     $("#usertoken").val(dbid);
				     $("#password").val(dbid);
				     $("#authmethod").val(data.data.auth_method == "hmac" ? "SIF_HMACSHA256" : "Basic");
				     $("#sessiontoken").val(data.data.session);
				     $("#environment").val(data.data.environment);
				     finishSetup(true);
			    }).error(function() { finishSetup(false); });
		} else {
			finishSetup(false);
		}
	};

	var getId = function() {
		var id = $.url().param('id');
		if (!id && $.cookie) {
			id = $.cookie("hits2.id");
		}
		return id;
	}

	var getDbId = function() {
		var dbid = $.url().param('dbid');
		if (!dbid && $.cookie) {
			dbid = $.cookie("hits2.dbid");
		}
		return dbid;
	}

	var compatibileSetup = function() {
		// TODO : Remove, No Need for this anymore?
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

	var createEnvironment = function() {
		var sessionToken = $("#sessiontoken").val();
		var environment = $("#environment").val();
		if (!environment || !sessionToken) {
			_app.sif.createEnvironment(getParameters(), processEnvironment);
		} else {
			_app.sif.getEnvironment(getParameters(), processEnvironment);
		}
	};

	var processEnvironment = function(environmentDetails) {
		if (environmentDetails.sessionToken) {
			$("#sessiontoken").val(environmentDetails.sessionToken);
		}
		if (environmentDetails.environment) {
			$("#environment").val(environmentDetails.environment);
		}
		if (environmentDetails.fingerprint) {
			$("#fingerprint").val(environmentDetails.fingerprint);	
		}
	}

	var populateParameters = function() {
		$(".service-path-item").hide();
		$(".parameter-body").html("");
		var method = $("#method option:selected").data("method");
		var provider = $("#provider option:selected").data("provider");
		$("#collapseParameterGroup").removeClass("in");
		if (method && provider) {
			$(".parameter-body").html("<ul class='list-group'></ul>");
			method.parameterBody.call(this, provider);
			$("#collapseParameterGroup").addClass("in");
		} 
	}

	var populateServicePath = function() {
		$(".parameter-body").html("");
		var method = $("#method option:selected").data("method");
		var provider = $("#provider option:selected").data("provider");
		var servicePath = $("#servicePath option:selected").data("service-path");
		$("#collapseParameterGroup").removeClass("in");
		if (method && provider && servicePath) {
			$(".parameter-body").html("<ul class='list-group'></ul>");
			var objects = servicePath.split("/{}/");
			for (var i = 0; i < objects.length - 1; i++) {
				addParameter(objects[i].substr(0, objects[i].length - 1) + " Reference Id", objects[i] + "RefId", i == 0, "");
			}
			addParameter("Page", "navigationPage", false, "1");	
			addParameter("Page Size", "navigationPageSize", false, "10");	
			$("#collapseParameterGroup").addClass("in");
		}
	}

	var getParameters = function(provider) {
		var result = {};
		$("form input").each(function(i, f) { result[$(f).attr("name")] = $(f).val(); });
		$("form #authmethod").each(function(i, f) { result["authMethod"] = $(f).val(); });
		var payload = $("form textarea[name=payload]").val();
		if (payload) {
			result.payload = payload;
			if (provider && provider.single) {
				var headerRegExp = new RegExp("(\<" + provider.single + "[^\>]*)\>");
				if (payload.indexOf("xmlns") < 0) {
					payload = payload.replace(headerRegExp, "$1 xmlns=\"" + namespace + "\"\>");
				}
				var deleteRegExp = new RegExp("(\<deleteRequest[^\>]*)\>");
				if (payload.indexOf("xmlns") < 0) {
					payload = payload.replace(deleteRegExp, "$1 xmlns=\"" + infraNamespace + "\"\>");
				}
				result.payload = payload;
			}
		}
		return result;
	};

	var prepareGetOne = function() {
		addParameter("Reference Id", "refId", true, "");
	};

	var prepareGetMany = function() {
		addParameter("Page", "navigationPage", true, "1");	
		addParameter("Page Size", "navigationPageSize", false, "10");	
	};

	var prepareGetByServicePath = function(provider) {
		$("#servicePath").html("<option></option>");
		for (var i = 0; i < provider.servicePaths.length; i++) {
			var $option = $("<option>" + provider.servicePaths[i] + "</option>");
			$option.data("service-path", provider.servicePaths[i]);
			$("#servicePath").append($option);
		}
		$(".service-path-item").show();
	};

	var prepareGetByQBE = function(provider) {
		addPayload("Body", "payload", true, 5, provider.templateQBE || "<" + provider.single + "></" + provider.single + ">");
		addParameter("Page", "navigationPage", false, "1");	
		addParameter("Page Size", "navigationPageSize", false, "10");	
	};

	var prepareCreateOne = function(provider) {
		addPayload("Body", "payload", true, 10, provider.template || "<" + provider.single + "></" + provider.single + ">", true);
	};

	var prepareCreateMany = function(provider) {
		var template = provider.template || "";
		template = "<" + provider.value + ">\n" + template + "\n</" + provider.value + ">";
		addPayload("Body", "payload", true, 10, template, true);
	};

	var prepareUpdateOne = function(provider) {
		addParameter("Reference Id", "refId", true, "");
		addPayload("Body", "payload", false, 10, provider.template || "<" + provider.single + "></" + provider.single + ">", true);
	};

	var prepareUpdateMany = function(provider) {
		var template = provider.template || "";
		template = "<" + provider.value + ">\n" + template + "\n</" + provider.value + ">";
		addPayload("Body", "payload", true, 10, template, true);
	};

	var prepareDeleteOne = function() {
		addParameter("Reference Id", "refId", true, "");
	};

	var prepareDeleteMany = function() {
		addPayload("Body", "payload", false, 5,
'<deleteRequest>\n' +
'    <deletes>\n' +
'        <delete id="{RefId}" />\n' +
'    </deletes>\n' +
'</deleteRequest>');			
	};

	var addParameter = function(label, name, first, defaultValue) {
		var style = first ? 'border-left: none; border-right: none; border-bottom: none;' : 'border: none;';
		var $container = $(".parameter-body ul");
		var $item = $("<li class='list-group-item' style='" + style + "'></li>");
		var $group = $("<div class='form-group'></div>");
		$group.append("<label for='" + name + "'>" + label + "</label>");
		$group.append("<input type='text' class='form-control' id='" + name + "' name='" + name + "' data-required='true' data-name='" + label + "' placeholder='" + label + "' value='" + defaultValue + "'>");
		$item.append($group);
		$container.append($item);
	}

	var addPayload = function(label, name, first, rows, defaultValue, warning) {
		var style = first ? 'border-left: none; border-right: none; border-bottom: none;' : 'border: none;';
		var $container = $(".parameter-body ul");
		var $item = $("<li class='list-group-item' style='" + style + "'></li>");
		var $group = $("<div class='form-group'></div>");
		$group.append("<label for='" + name + "'>" + label + "</label>");
		if (warning) {
			$group.append("<p>Note: RefID attributes for SIF objects are mandatory when posting multiple records to an endpoint inside a single payload, and they are strongly recommended when posting a single record to an endpoint.</p>");
		}
		var $input = $("<textarea rows='" + rows + "' class='form-control' id='" + name + "' name='" + name + "' data-required='true' data-name='" + label + "' placeholder='" + label + "'></textarea>");
		$input.val(defaultValue);
		$group.append($input);
		$item.append($group);
		$container.append($item);
	}

	return _app;
}(hitsclient || {}));
