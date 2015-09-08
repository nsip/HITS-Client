var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Journal",
    value: "Journals",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<Journal>\n" +
      "  <DebitFinancialAccountRefId>{RefId}</DebitFinancialAccountRefId>\n" +
      "  <CreditFinancialAccountRefId>{RefId}</CreditFinancialAccountRefId>\n" +
      "  <OriginatingTransactionRefId SIF_RefObject=\"Invoice\">{RefId}</OriginatingTransactionRefId>\n" +
      "  <Amount Currency=\"AUD\">400.00</Amount>\n" +
      "  <GSTCodeOriginal>G6</GSTCodeOriginal>\n" +
      "  <GSTCodeReplacement>G6</GSTCodeReplacement>\n" +
      "  <Note>Journal Note</Note>\n" +
      "  <CreatedDate>2015-04-20</CreatedDate>\n" +
      "  <ApprovedDate>2015-06-22</ApprovedDate>\n" +
      "  <CreatedBy>James Smith</CreatedBy>\n" +
      "  <ApprovedBy>John Smith</ApprovedBy>\n" +
      "  <FinancialClassificationRefId>{RefId}</FinancialClassificationRefId>\n" +
      "</Journal>"
  });

  return _app;    
}(hitsclient || {}));