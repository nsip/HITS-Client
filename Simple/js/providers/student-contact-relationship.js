var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name : "Student Contact Relationship",
    value : "StudentContactRelationships",
    template : 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<StudentContactRelationship StudentPersonalRefId=\"{RefId}\" StudentContactPersonalRefId=\"{RefId}\">\n" +
      "    <Relationship>\n" +
      "        <Code>01</Code>\n" +
      "    </Relationship>\n" +
      "    <ContactFlags>\n" +
      "        <ParentLegalGuardian>Y</ParentLegalGuardian>\n" +
      "        <PickupRights>Y</PickupRights>\n" +
      "        <LivesWith>Y</LivesWith>\n" +
      "        <AccessToRecords>Y</AccessToRecords>\n" +
      "        <EmergencyContact>Y</EmergencyContact>\n" +
      "        <HasCustody>Y</HasCustody>\n" +
      "        <DisciplinaryContact>Y</DisciplinaryContact>\n" +
      "        <PrimaryCareProvider>Y</PrimaryCareProvider>\n" +
      "        <FeesBilling>Y</FeesBilling>\n" +
      "        <FamilyMail>Y</FamilyMail>\n" +
      "        <InterventionOrder>N</InterventionOrder>\n" +
      "    </ContactFlags>\n" +
      "</StudentContactRelationship>\n"
  });

  return _app;  
}(hitsclient || {}));
