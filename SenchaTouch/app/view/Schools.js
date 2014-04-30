Ext.define('SIFRest.view.Schools', {
    extend: 'Ext.List',
    xtype: 'schoolslist',
    requires: ['SIFRest.model.School'],
    config: {
	store: 'Schools',
	itemTpl: '<div class="contact">{Title}</div>'
    }
});
