Ext.define('SIFRest.view.Nav', {
    extend: 'Ext.List',
    xtype: 'nav',
    config: {
		title: 'Navigation',
		itemTpl: '{title}',
		store: 'Nav'
    }
});
