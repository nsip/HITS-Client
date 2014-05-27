var hitsclient = (function(_app) {
  var providerServer = "http://hits.dev.nsip.edu.au:8080/SIF3InfraREST/hits/";
  // var providerServer = "http://localhost:8080/SIF3InfraREST/hits/";

  var providers = [
    { name : "School Info",
      value : "SchoolInfos" },
    { name : "Student Personal",
      value : "StudentPersonals" },
    { name : "Staff Personal",
      value : "StaffPersonals" },
    { name : "Staff Assignment",
      value : "StaffAssignments" },
    { name : "Teaching Group",
      value : "TeachingGroups" }];

  var methods = [];
  var loadMethodValues = function() {
    methods.push({ name : "Get One",
      executeMethod : executeGetOne,
      parameterBody : "getOne"
    });
    methods.push({ name : "Get Many",
      executeMethod : executeGetMany,
      parameterBody : "getMany"
    });    
  };

  var uuid = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  };

  var ajax = function (args) {
    args.success = function(result, status, xhr) { ajaxSuccess.call(this, result, status, xhr, args, args.callback); return true;};
    args.error = function(xhr, status, reason) { ajaxFailure.call(this, xhr, status, reason, args, args.callback); return true;};
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

  var getSessionToken = function(zoneId, password) {
    var body = siftemplate.environment.create;

    var args = {};
    args.callback = getSessionTokenCallback;
    args.url = providerServer + "environments/environment";
    args.data = body.replace("${USER_TOKEN}",zoneId);
    args.dataType = "XML";
    args.contentType = "text/xml";
    args.type = "POST";
    var token = "HITS:" + password;
    token = Base64.encode(token);
    args.headers = {};
    args.headers["Content-Type"] = "application/xml";
    args.headers["Authorization"] = "Basic " + token;
    args.notifier = executeCall;
    ajax(args);
  };

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
    var zoneId = $("#zoneId").val();
    if (zoneId.length == 0) {
      panelError("Please enter a School Reference Id");
      $("#zoneId").parent("div").addClass("has-error");
      return false;
    } else {
      $("#zoneId").parent("div").removeClass("has-error");
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
      getSessionToken(zoneId, password);
      return false;
    } else {
      $("#password").parent("div").removeClass("has-error");
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
      var zoneId = $("#zoneId").val();
      var password = $("#password").val();
      var sessionToken = $("#sessionToken").val();
      var provider = $("#provider option:selected").data("provider");
      var method = $("#method option:selected").data("method");
      method.executeMethod.call(this, zoneId, password, sessionToken, provider, method);
    }
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
    args.contentType = "text/xml";
    args.dataType = "XML";
    args.type = "GET";
    var token = sessionToken + ":" + password;
    token = Base64.encode(token);
    args.headers = {};
    args.headers["Content-Type"] = "application/xml";
    args.headers["Authorization"] = "Basic " + token;
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
    page = new Number(page) - 1;
    if (page < 0) page = 0;


    var args = {};
    args.callback = executeCallback;
    args.url = providerServer + "requests/" + provider.value + "?page=" + page + "&pageSize=" + recordsPerPage;
    args.contentType = "text/xml";
    args.dataType = "XML";
    args.type = "GET";
    var token = sessionToken + ":" + password;
    token = Base64.encode(token);
    args.headers = {};
    args.headers["Content-Type"] = "application/xml";
    args.headers["Authorization"] = "Basic " + token;
    ajax(args);
  };

  var executeCallback = function(xhr, status, result, reason, args) {
    $(".container .row:first").html("");
    $("#response").text(xhr.responseText);
  };

  var getFirstXmlTagContents = function(xmlDocument, xmlTag) {
    var result = null;
    var regularExpression = new RegExp("<" + xmlTag + ">([^<]*)<","g");
    var matches = regularExpression.exec(xmlDocument);
    if (matches && matches != null && matches.length > 1) {
      result = matches[1];
    }
    return result;
  };

  var showParameters = function() {
    var methodOption = $("#method option:selected");
    var method = methodOption.data("method");
    $(".parameter-header").css("display","none");
    $(".parameter-block").css("display","none");
    if (method && method.parameterBody) {
      $(".parameter-header").css("display","");
      $("#" + method.parameterBody).css("display","");
    }
  };

  var populateProviders = function() {
    $("#provider").html("<option></option>");
    for (var i = 0; i < providers.length; i++) {
      var provider = providers[i];
      var option = new Option(provider.name, provider.value);
      $(option).data("provider", provider);
      $("#provider").append(option);
    }
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
  };

  return _app;
}(hitsclient || {}));