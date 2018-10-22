var hitsclient = (function(_app) {
	var sif = _app.sif || {};

	var serviceType = {
		OBJECT : "OBJECT",
		SERVICEPATH : "SERVICEPATH"
	}

	var methods = {
		GET : "GET",
		POST : "POST",
		PUT : "PUT",
		DELETE : "DELETE"
	}
	sif.methods = methods;

	sif.createEnvironment = function(parameters, callback) {
		var args = {
			url : parameters.server + "environments/environment",
			headers : getEnvironmentSIFHeaders(parameters),
			type : methods.POST,
			datatype : "XML",
		}
		args.data = _app.environment.getDetailed(parameters.solutionId, parameters.applicationKey, parameters.userToken, parameters.authMethod);
		var data = {};
		args.statusCode = {
			409 : function(xhr, status, error) {
				processEnvironment(xhr.responseText, data);
				callback.call(this, data);
			}
		};
		if (args.headers) {
			$.ajax(args).success(function(result, status, xhr) { 
				processEnvironment(xhr.responseText, data);
				callback.call(this, data);
			});
		}	
		return data;
	};

	sif.getEnvironment = function(parameters, callback) {
		var args = {
			url : parameters.server + "environments/" + parameters.environment,
			headers : getStandardSIFHeaders(parameters),
			type : methods.GET,
			datatype : "XML",
		}
		args.token = parameters.token;
		var data = {};
		if (args.headers) {
			$.ajax(args).success(function(result, status, xhr) { 
				processEnvironment(xhr.responseText, data);
				callback.call(this, data);
			});
		}
		return data;
	};

	var processEnvironment = function (payload, data) {
			data.sessionToken = getFirstXmlTagContents(payload, "sessionToken");
			data.fingerprint = getFirstXmlTagContents(payload, "fingerprint");
			data.environment = getFirstXmlAttributeContents(payload, "id");
	}

	sif.getOne = function(parameters, callback) {
		var args = { 
			url : getBaseURL(parameters) + "/" + parameters.refId,
			headers : getStandardSIFHeaders(parameters, serviceType.OBJECT),
			type : methods.GET,
			datatype : "XML",
			callback : callback
		};
		args.token = parameters.token;
		_app.ajax(args);
	};

	sif.getMany = function(parameters, callback) {
		var args = { 
			url : getBaseURL(parameters),
			headers : getStandardSIFHeaders(parameters, serviceType.OBJECT),
			type : methods.GET,
			datatype : "XML",
			callback : callback
		};
		args.token = parameters.token;
		_app.ajax(args);
	};

	sif.getByServicePath = function(parameters, callback) {
		var args = { 
			url : getServicePathURL(parameters),
			headers : getStandardSIFHeaders(parameters, serviceType.SERVICEPATH),
			type : methods.GET,
			datatype : "XML",
			callback : callback
		}
		args.token = parameters.token;
		_app.ajax(args);
	};

	sif.getByQBE = function(parameters, callback) {
		var args = { 
			url : getBaseURL(parameters),
			headers : getStandardSIFHeaders(parameters, serviceType.OBJECT),
			type : methods.POST,
			datatype : "XML",
			callback : callback
		};
		args.headers.methodoverride = "GET";
		args.token = parameters.token;
		args.data = parameters.payload;
		_app.ajax(args);
	};

	sif.createOne = function(parameters, callback) {
		var args = { 
			url : getBaseURL(parameters) + "/" + parameters.provider.single,
			headers : getStandardSIFHeaders(parameters, serviceType.OBJECT),
			type : methods.POST,
			datatype : "XML",
			callback : callback
		};
		args.token = parameters.token;
		args.data = parameters.payload;
		_app.ajax(args);
	};

	sif.createMany = function(parameters, callback) {
		var args = { 
			url : getBaseURL(parameters),
			headers : getStandardSIFHeaders(parameters, serviceType.OBJECT),
			type : methods.POST,
			datatype : "XML",
			callback : callback
		};
		args.token = parameters.token;
		args.data = parameters.payload;
		_app.ajax(args);
	};

	sif.updateOne = function(parameters, callback) {
		var args = { 
			url : getBaseURL(parameters) + "/" + parameters.refId,
			headers : getStandardSIFHeaders(parameters, serviceType.OBJECT),
			type : methods.PUT,
			datatype : "XML",
			callback : callback
		};
		args.token = parameters.token;
		args.data = parameters.payload;
		_app.ajax(args);
	};

	sif.updateMany = function(parameters, callback) {
		var args = { 
			url : getBaseURL(parameters),
			headers : getStandardSIFHeaders(parameters, serviceType.OBJECT),
			type : methods.PUT,
			datatype : "XML",
			callback : callback
		};
		args.token = parameters.token;
		args.headers.methodoverride = "UPDATE";
		args.data = parameters.payload;
		_app.ajax(args);
	};

	sif.deleteOne = function(parameters, callback) {
		var args = { 
			url : getBaseURL(parameters) + "/" + parameters.refId,
			headers : getStandardSIFHeaders(parameters, serviceType.OBJECT),
			type : methods.DELETE,
			datatype : "XML",
			callback : callback
		};
		args.token = parameters.token;
		_app.ajax(args);
	};

	sif.deleteMany = function(parameters, callback) {
		var args = { 
			url : getBaseURL(parameters),
			headers : getStandardSIFHeaders(parameters, serviceType.OBJECT),
			type : methods.PUT,
			datatype : "XML",
			callback : callback
		};
		args.token = parameters.token;
		args.headers.methodoverride = "DELETE";
		args.data = parameters.payload;
		_app.ajax(args);
	};

	var getBaseURL = function(parameters) {
		return parameters.server + "requests/" + parameters.provider.value;
	};

	var getServicePathURL = function(parameters) {
		var url = parameters.server + "requests/";
		if (parameters.servicePath) {
			var objects = parameters.servicePath.split("/{}/");
			for (var i = 0; i < objects.length - 1; i++) {
				url += objects[i] + "/" + parameters[objects[i] + "RefId"] + "/";
			}
			url += objects[objects.length - 1];
		}
		return url;
	};

	var getEnvironmentSIFHeaders = function(parameters) {
		var headers = {};
		if (!parameters.userToken || !parameters.applicationKey || !parameters.password) {
			return false;
		}
		if (_app.uuid) {
			headers.messageid = _app.uuid();
			headers.requestid = _app.uuid();
		}
		var token = getTokenForAuth(parameters.applicationKey, parameters.password, parameters.authMethod);
		headers.timestamp = token.timestamp;
		headers.authorization = token.method + " " + token.value;
		headers.fingerprint = parameters.fingerprint;
		headers.applicationkey = parameters.applicationKey;
		headers.authenticateduser = parameters.userToken;
		headers.requestType = "IMMEDIATE";
		headers.navigationpage = parameters.navigationPage;
		headers.navigationpagesize = parameters.navigationPageSize;
		headers["Content-Type"] = "application/xml; charset=UTF-8";
		return sanitiseHeaders(headers);
	};

	var getStandardSIFHeaders = function(parameters, serviceType) {
		var headers = {};
		if (!parameters.sessionToken) {
			return false;
		}
		if (_app.uuid) {
			headers.messageid = _app.uuid();
			headers.requestid = _app.uuid();
		}
		var token = getTokenForAuth(parameters.sessionToken, parameters.password, parameters.authMethod);
		parameters.token = token;
		headers.timestamp = token.timestamp;
		headers.authorization = token.method + " " + token.value;
		headers.fingerprint = parameters.fingerprint;
		headers.applicationkey = parameters.applicationKey;
		headers.authenticateduser = parameters.userToken;
		headers.requestType = "IMMEDIATE";
		headers.serviceType = serviceType;
		headers.navigationpage = parameters.navigationPage;
		headers.navigationpagesize = parameters.navigationPageSize;
		headers["Content-Type"] = "application/xml; charset=UTF-8";
		return sanitiseHeaders(headers);
	};

	var sanitiseHeaders = function(headers) {
		var result = {};
		for (key in headers) {
			if (headers.hasOwnProperty(key) && headers[key]) {
				result[key] = headers[key];
			}
		}
		if (result.navigationpagesize) {
			result.queryintention = "ONE-OFF";
		}
		return result;
	};

	var getTokenForAuth = function(userPart, passPart, method) {
		var token = {
			method: "",
			value: "",
			timestamp: new moment().toISOString()
		};
		if (method === "SIF_HMACSHA256") {
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

	var getFirstXmlAttributeContents = function(xmlDocument, attribute) {
		var result = null;
		var regularExpression = new RegExp(attribute + "=\"([^\"]*)\"", "g");
		var matches = regularExpression.exec(xmlDocument);
		if (matches && matches != null && matches.length > 1) {
			result = matches[1];
		}
		return result;
	};

	_app.sif = sif;
	return _app;
}(hitsclient || {}));
