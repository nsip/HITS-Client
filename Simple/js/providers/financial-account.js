var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Financial Account",
    value: "FinancialAccounts",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<FinancialAccount>\n" +
      "  <ParentAccountRefId>{RefId}</ParentAccountRefId>\n" +
      "  <ChargedLocationInfoRefId>{RefId}</ChargedLocationInfoRefId>\n" +
      "  <AccountNumber>43242244L</AccountNumber>\n" +
      "  <Name>Account Name</Name>\n" +
      "  <Description>Account Description</Description>\n" +
      "  <ClassType>Asset</ClassType>\n" +
      "  <CreationDate>2015-06-21</CreationDate>\n" +
      "  <CreationTime>11:32:00</CreationTime>\n" +
      "</FinancialAccount>"
  });

  return _app;    
}(hitsclient || {}));
