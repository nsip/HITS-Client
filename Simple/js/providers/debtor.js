var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Debtor",
    value: "Debtors",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<Debtor>\n" +
      "  <BilledEntity SIF_RefObject=\"VendorInfo\">{RefId}</BilledEntity>\n" +
      "  <AddressList>\n" +
      "    <Address Type=\"0123\" Role=\"012B\">\n" +
      "      <Street>\n" +
      "        <Line1>1 Billed Street</Line1>\n" +
      "      </Street>\n" +
      "      <City>Perth</City>\n" +
      "      <StateProvince>WA</StateProvince>\n" +
      "      <PostalCode>6000</PostalCode>\n" +
      "      <GridLocation>\n" +
      "        <Latitude>-31.952693</Latitude>\n" +
      "        <Longitude>115.871971</Longitude>\n" +
      "      </GridLocation>\n" +
      "    </Address>\n" +
      "  </AddressList>\n" +
      "  <BillingName>Billing Name</BillingName>\n" +
      "  <BillingNote>Billing Note</BillingNote>\n" +
      "  <Discount>0.05</Discount>\n" +
      "</Debtor>"
  });

  return _app;    
}(hitsclient || {}));