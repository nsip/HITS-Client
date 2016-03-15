var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Payment Receipt",
    value: "PaymentReceipts",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<PaymentReceipt>\n" +
      "    <TransactionType>Creditor payment</TransactionType>\n" +
      "    <InvoiceRefId>{RefId}</InvoiceRefId>\n" +
      "    <VendorInfoRefId>{RefId}</VendorInfoRefId>\n" +
      "    <DebtorRefId>{RefId}</DebtorRefId>\n" +
      "    <ChargedLocationInfoRefId>{RefId}</ChargedLocationInfoRefId>\n" +
      "    <TransactionDate>2015-06-23</TransactionDate>\n" +
      "    <TransactionAmount Type=\"Debit\" Currency=\"AUD\">25.00</TransactionAmount>\n" +
      "    <ReceivedTransactionId>201546</ReceivedTransactionId>\n" +
      "    <FinancialAccountRefIdList>\n" +
      "        <FinancialAccountRefId>{RefId}</FinancialAccountRefId>\n" +
      "    </FinancialAccountRefIdList>\n" +
      "    <TransactionDescription>Some description</TransactionDescription>\n" +
      "    <TaxRate>0.10</TaxRate>\n" +
      "    <TaxAmount Currency=\"AUD\">2.50</TaxAmount>\n" +
      "    <TransactionMethod>Cash</TransactionMethod>\n" +
      "    <ChequeNumber>23593032</ChequeNumber>\n" +
      "    <TransactionNote>Transaction note goes here</TransactionNote>\n" +
      "    <AccountingPeriod>2015Q3</AccountingPeriod>\n" +
      "</PaymentReceipt>"
  });

  return _app;    
}(hitsclient || {}));
