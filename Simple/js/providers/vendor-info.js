var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Vendor Info",
    value: "VendorInfos",
    servicePaths : ["SchoolInfos/{}/VendorInfos"],
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<VendorInfo>\n" +
      "  <Name>Vendor Inc Pty Ltd</Name>\n" +
      "  <ContactInfo>\n" +
      "    <Name Type=\"LGL\">\n" +
      "      <FamilyName>Jones</FamilyName>\n" +
      "      <GivenName>Jack</GivenName>\n" +
      "      <MiddleName>Jim</MiddleName>\n" +
      "    </Name>\n" +
      "    <PositionTitle>Position Title</PositionTitle>\n" +
      "    <Role>Role</Role>\n" +
      "    <Address Type=\"0123\" Role=\"012B\">\n" +
      "      <Street>\n" +
      "        <Line1>43 Some Street</Line1>\n" +
      "      </Street>\n" +
      "      <City>Perth</City>\n" +
      "      <StateProvince>WA</StateProvince>\n" +
      "      <PostalCode>6000</PostalCode>\n" +
      "      <GridLocation>\n" +
      "        <Latitude>-31.952693</Latitude>\n" +
      "        <Longitude>115.871971</Longitude>\n" +
      "      </GridLocation>\n" +
      "    </Address>\n" +
      "    <EmailList>\n" +
      "      <Email Type=\"06\">email@not.a.real.domain</Email>\n" +
      "    </EmailList>\n" +
      "    <PhoneNumberList>\n" +
      "      <PhoneNumber Type=\"0096\">\n" +
      "        <Number>08 9455 3382</Number>\n" +
      "      </PhoneNumber>\n" +
      "    </PhoneNumberList>\n" +
      "  </ContactInfo>\n" +
      "  <CustomerId>434443L</CustomerId>\n" +
      "  <ABN>25 348404 20404</ABN>\n" +
      "  <RegisteredForGST>Y</RegisteredForGST>\n" +
      "  <PaymentTerms>30</PaymentTerms>\n" +
      "  <BPay>34205890508302390409</BPay>\n" +
      "  <BSB>444-333</BSB>\n" +
      "  <AccountNumber>4394958</AccountNumber>\n" +
      "  <AccountName>John Smith</AccountName>\n" +
      "</VendorInfo>"
  });

  return _app;    
}(hitsclient || {}));

	