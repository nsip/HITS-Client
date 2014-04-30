Ext.define('SIFRest.view.tablet.Main', {
	extend: 'Ext.Container',
	xtype: 'main',
	requires: [
		'SIFRest.view.Nav'
	],

	config: {
		title: 'SIF Rest ?',

		fullscreen: true,

		layout: {
		    type: 'card',
		    animation: {
			type: 'slide',
			direction: 'left',
			duration: 250
		    }
		},

		items: [
			{
				xtype: 'navigationview',
				id: 'viewer',
				html: 'Hello world'
			},
			{
				xclass: 'SIFRest.view.Nav',
				xtype: 'mainnav',
				id: 'mainnav',
				useTitleAsBackText: false,
				docked: 'left',
				width : 250
			},
			{
				id: 'mainNavigationBar',
				xtype : 'titlebar',
				docked: 'top',
				title : 'SIF REST',
				items: {
					xtype : 'button',
					id: 'viewSourceButton',
					hidden: true,
					align : 'right',
					ui    : 'action',
					action: 'viewSource',
					text  : 'Source'
				}
			}
		]
	}
});
