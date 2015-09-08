var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Financial Classification",
    value: "FinancialClassifications",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<FinancialClassification>\n" +
      "  <Name>The Name</Name>\n" +
      "  <Description>Financial Classification Description</Description>\n" +
      "  <ClassificationType>Asset</ClassificationType>\n" +
      "</FinancialClassification>"
  });

  return _app;    
}(hitsclient || {}));