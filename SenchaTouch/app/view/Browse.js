Ext.define('SIFRest.view.Browse', {
    extend: 'Ext.List',
    xtype: 'browse',
	config: {
		title: 'Browse',
		itemTpl: '{title}',
		store: 'Browse',
		onItemDisclosure: true
	}
});
