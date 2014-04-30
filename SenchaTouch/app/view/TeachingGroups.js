Ext.define('SIFRest.view.TeachingGroups', {
    extend: 'Ext.List',
    xtype: 'teachinggroups',
    requires: ['SIFRest.model.TeachingGroup'],
    config: {
	store: 'TeachingGroups',
	itemTpl: '<div class="contact">{Title}</div>'
    }
});
