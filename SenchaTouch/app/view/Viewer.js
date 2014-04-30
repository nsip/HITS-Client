Ext.define('SIFRest.view.Viewer', {
	extend: 'Ext.navigation.View',
	xtype: 'viewer',
	config: {
		defaultBackButtonText: '',
		items: [{
			xclass: 'SIFRest.view.Welcome'
		}]
	}
});

