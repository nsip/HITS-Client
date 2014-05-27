var siftemplate = (function(_templates) {
  _templates.environment = {};
  _templates.environment.create = 
    "<environment xmlns=\"http://www.sifassociation.org/infrastructure/3.0.1\">\n" +
    "  <solutionId>HITS</solutionId>\n" +
    "  <authenticationMethod>Basic</authenticationMethod>\n" +
    "  <userToken>${USER_TOKEN}</userToken>\n" +
    "  <consumerName>TestConsumer</consumerName>\n" +
    "  <applicationInfo>\n" +
    "    <applicationKey>HITS</applicationKey>\n" +
    "    <supportedInfrastructureVersion>3.0.1</supportedInfrastructureVersion>\n" +
    "    <dataModelNamespace>http://www.sifassociation.org/au/datamodel/1.3</dataModelNamespace>\n" +
    "    <transport>REST</transport>\n" +
    "    <applicationProduct>\n" +
    "      <vendorName>NSIP</vendorName>\n" +
    "      <productName>HITS Test Harness</productName>\n" +
    "      <productVersion>0.1alpha</productVersion>\n" +
    "    </applicationProduct>\n" +
    "  </applicationInfo>\n" +
    "</environment>";


  return _templates;
}(siftemplate || {}));