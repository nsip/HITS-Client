var hitsclient = (function(_app) {

  var template =
      "<environment xmlns=\"http://www.sifassociation.org/infrastructure/3.2.1\">\n" +
      "  <solutionId>${SOLUTION_ID}</solutionId>\n" +
      "  <authenticationMethod>Basic</authenticationMethod>\n" +
      "  <userToken>${USER_TOKEN}</userToken>\n" +
      "  <consumerName>TestConsumer</consumerName>\n" +
      "  <applicationInfo>\n" +
      "    <applicationKey>${APPLICATION_KEY}</applicationKey>\n" +
      "    <supportedInfrastructureVersion>3.2.1</supportedInfrastructureVersion>\n" +
      "    <dataModelNamespace>http://www.sifassociation.org/datamodel/au/3.4</dataModelNamespace>\n" +
      "    <transport>REST</transport>\n" +
      "    <applicationProduct>\n" +
      "      <vendorName>NSIP</vendorName>\n" +
      "      <productName>HITS Test Harness</productName>\n" +
      "      <productVersion>0.1alpha</productVersion>\n" +
      "    </applicationProduct>\n" +
      "  </applicationInfo>\n" +
      "</environment>";

  _app.environment = {
    visible : false,
    name : "Environment",
    value : "Environment",
    template : template,
    getDetailed : function(solutionId, applicationKey, userToken) {
      var populatedTemplate = hitsclient.environment.template;
      populatedTemplate = populatedTemplate.replace("${SOLUTION_ID}", solutionId);
      populatedTemplate = populatedTemplate.replace("${APPLICATION_KEY}", applicationKey);
      populatedTemplate = populatedTemplate.replace("${USER_TOKEN}", userToken);
      return populatedTemplate;
    }
  };

  return _app;  
}(hitsclient || {}));