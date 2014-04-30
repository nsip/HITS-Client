Ext.define('SIFRest.view.StaffPersonals', {
    extend: 'Ext.List',
    xtype: 'staffpersonals',
    requires: ['SIFRest.model.StaffPersonal'],
    config: {
	store: 'StaffPersonals',
	itemTpl: '{FamilyName}, {GivenName}'
    }
});
