var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Invoice",
    value: "Invoices",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<Invoice>\n" +
      "  <InvoicedEntity SIF_RefObject=\"Debtor\">{RefId}</InvoicedEntity>\n" +
      "  <FormNumber>8BC001</FormNumber>\n" +
      "  <BillingDate>2015-07-01</BillingDate>\n" +
      "  <TransactionDescription>Textbooks</TransactionDescription>\n" +
      "  <BilledAmount Type=\"Debit\" Currency=\"AUD\">320.00</BilledAmount>\n" +
      "  <Ledger>Sundry</Ledger>\n" +
      "  <ChargedLocationInfoRefId>{RefId}</ChargedLocationInfoRefId>\n" +
      "  <TaxRate>0.10</TaxRate>\n" +
      "  <TaxType>GST</TaxType>\n" +
      "  <TaxAmount Currency=\"AUD\">29.09</TaxAmount>\n" +
      "  <CreatedBy>Created By</CreatedBy>\n" +
      "  <ApprovedBy>Approved By</ApprovedBy>\n" +
      "  <ItemDetail>4 Textbooks</ItemDetail>\n" +
      "  <DueDate>2015-10-22</DueDate>\n" +
      "  <FinancialAccountRefIdList>\n" +
      "    <FinancialAccountRefId>{RefId}</FinancialAccountRefId>\n" +
      "  </FinancialAccountRefIdList>\n" +
      "  <AccountingPeriod>2015Q3</AccountingPeriod>\n" +
      "  <RelatedPurchaseOrderRefId>{RefId}</RelatedPurchaseOrderRefId>\n" +
      "  <PurchasingItems>\n" +
      "    <PurchasingItem>\n" +
      "       <ItemNumber>XYZ123</ItemNumber>\n" +
      "       <ItemDescription>Widget</ItemDescription>\n" +
      "       <Quantity>4</Quantity>\n" +
      "       <UnitCost Currency=\"AUD\">80.00</UnitCost>\n" +
      "    </PurchasingItem>\n" +
      "  </PurchasingItems>\n" +
      "  <Voluntary>N</Voluntary>\n" +
      "</Invoice>"
  });

  return _app;    
}(hitsclient || {}));
