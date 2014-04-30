Ext.define('SIFRest.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainnav',
    id: 'mainnav',
    requires: [
        'SIFRest.view.Nav'
    ],

	config: {
		title: 'SIF Rest ?',

        items: [
			{
				xclass: 'SIFRest.view.Nav'
			}
        ]
    }
});
