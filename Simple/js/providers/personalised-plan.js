var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Personalised Plan",
    value: "PersonalisedPlans",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
"<PersonalisedPlan>\n" +
"  <StudentPersonalRefId>{RefId}</StudentPersonalRefId>\n" +
"  <SchoolInfoRefId>{RefId}</SchoolInfoRefId>\n" +
"  <PersonalisedPlanCategory>M</PersonalisedPlanCategory>\n" +
"  <PersonalisedPlanStartDate>2017-11-01</PersonalisedPlanStartDate>\n" +
"  <PersonalisedPlanEndDate>2019-11-10</PersonalisedPlanEndDate>\n" +
"  <PersonalisedPlanReviewDate>2018-11-10</PersonalisedPlanReviewDate>\n" +
"  <PersonalisedPlanNotes>This Student is allergic to cashews.</PersonalisedPlanNotes>\n" +
"</PersonalisedPlan>\n"
  });

  return _app;    
}(hitsclient || {}));
