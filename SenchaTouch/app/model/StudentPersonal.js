Ext.define('SIFRest.model.StudentPersonal', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'Id', type: 'string'},
            {name: 'Link', type: 'string'},
            {name: 'GivenName', mapping: 'Content.StudentPersonal.PersonInfo.Name.GivenName', type: 'string'},
            {name: 'FamilyName', mapping: 'Content.StudentPersonal.PersonInfo.Name.FamilyName', type: 'string'}
        ]
    }
});
