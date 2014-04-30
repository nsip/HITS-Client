Ext.define('SIFRest.view.StudentPersonals', {
    extend: 'Ext.List',
    xtype: 'studentpersonals',
    requires: ['SIFRest.model.StudentPersonal'],
    config: {
	grouped: true,
	indexBar: true,
	store: 'StudentPersonals',
	itemTpl: '{FamilyName}, {GivenName}'
    }
});
