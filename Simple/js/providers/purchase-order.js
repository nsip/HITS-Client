var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Purchase Order",
    value: "PurchaseOrders",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<PurchaseOrder>\n" +
      "  <FormNumber>3</FormNumber>\n" +
      "  <VendorInfoRefId>{RefId}</VendorInfoRefId>\n" +
      "  <ChargedLocationInfoRefId>{RefId}</ChargedLocationInfoRefId>\n" +
      "  <EmployeePersonalRefId>{RefId}</EmployeePersonalRefId>\n" +
      "  <PurchasingItems>\n" +
      "    <PurchasingItem>\n" +
      "      <ItemNumber>123156</ItemNumber>\n" +
      "      <ItemDescription>Description</ItemDescription>\n" +
      "      <Quantity>3</Quantity>\n" +
      "      <UnitCost Currency=\"AUD\">20.00</UnitCost>\n" +
      "      <QuantityDelivered>3</QuantityDelivered>\n" +
      "      <ExpenseAccounts>\n" +
      "        <ExpenseAccount>\n" +
      "          <AccountCode>Code</AccountCode>\n" +
      "          <Amount Currency=\"AUD\">60.00</Amount>\n" +
      "          <FinancialAccountRefId>{RefId}</FinancialAccountRefId>\n" +
      "          <AccountingPeriod>201504</AccountingPeriod>\n" +
      "        </ExpenseAccount>\n" +
      "      </ExpenseAccounts>\n" +
      "    </PurchasingItem>\n" +
      "  </PurchasingItems>\n" +
      "  <CreationDate>2015-02-23</CreationDate>\n" +
      "  <TaxRate>0.1</TaxRate>\n" +
      "  <TaxAmount Currency=\"AUD\">8.00</TaxAmount>\n" +
      "  <UpdateDate>2015-09-01</UpdateDate>\n" +
      "  <FullyDelivered>Y</FullyDelivered>\n" +
      "</PurchaseOrder>\n"
  });

  return _app;    
}(hitsclient || {}));

