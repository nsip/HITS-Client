var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Location Info",
    value: "ChargedLocationInfos",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<ChargedLocationInfo>\n" +
      "  <LocationType>School</LocationType>\n" +
      "  <SiteCategory>Campus</SiteCategory>\n" +
      "  <Name>Main Campus</Name>\n" +
      "  <Description>Description</Description>\n" +
      "  <LocalId>localId</LocalId>\n" +
      "  <StateProvinceId>WA</StateProvinceId>\n" +
      "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "  <AddressList>\n" +
      "    <Address Type="0123" Role="012B">\n" +
      "      <Street>\n" +
      "        <Line1>1 Address Street</Line1>\n" +
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
      "  <PhoneNumberList>\n" +
      "    <PhoneNumber Type="0096">\n" +
      "      <Number>0894463125</Number>\n" +
      "    </PhoneNumber>\n" +
      "  </PhoneNumberList>\n" +
      "</ChargedLocationInfo>\n"
  });

  return _app;    
}(hitsclient || {}));