var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Room Info",
    value: "RoomInfos",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<RoomInfo>\n" +
      "  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
      "  <RoomNumber>101</RoomNumber>\n" +
      "  <StaffList>\n" +
      "    <StaffPersonalRefId>{RefId}</StaffPersonalRefId>\n" +
      "  </StaffList>\n" +
      "  <Description>Room 101</Description>\n" +
      "  <Building>Main A</Building>\n" +
      "  <HomeroomNumber>10-HR-A</HomeroomNumber>\n" +
      "  <Size>400</Size>\n" +
      "  <Capacity>35</Capacity>\n" +
      "  <RoomType>Classroom</RoomType>\n" +
      "</RoomInfo>\n"
  });

  return _app;    
}(hitsclient || {}));