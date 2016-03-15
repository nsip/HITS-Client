var hitsclient = (function(_app) {
  if (!_app.providers) {
    _app.providers = [];
  }

  _app.providers.push({
    name: "Person Picture",
    value: "PersonPictures",
    template: 
      "<!-- Remember to insert RefIds of records that exist; and to hyphenate RefID as\n" +
      "     xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx -->\n" +
      "<PersonPicture>\n" +
      "  <ParentObjectRefId SIF_RefObject=\"StudentPersonal\">{RefId}</ParentObjectRefId>\n" +
      "  <SchoolYear>2016</SchoolYear>\n" +
      "  <PictureSource Type=\"01\">http://www.gravatar.com/avatar/HASH?d=mm</PictureSource>\n" +
      "  <OKToPublish>N</OKToPublish>\n" +
      "</PersonPicture>\n"
  });

  return _app;    
}(hitsclient || {}));
