Ext.define('SIFRest.model.StaffPersonal', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'Id', type: 'string'},
            {name: 'Link', type: 'string'},
            {name: 'GivenName', mapping: 'Content.StaffPersonal.PersonInfo.Name.GivenName', type: 'string'},
            {name: 'FamilyName', mapping: 'Content.StaffPersonal.PersonInfo.Name.FamilyName', type: 'string'}
        ]
    }
});
