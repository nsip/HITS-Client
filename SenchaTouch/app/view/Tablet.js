Ext.define('SIFRest.view.Tablet', {
    extend: 'Ext.Container',
    requires: [
        'SIFRest.view.Nav',
        'SIFRest.view.Viewer'
    ],

	config: {
		fullscreen: true,
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },

		title: 'SIF Rest ?',

        items: [
			{
				xclass: 'SIFRest.view.Main',
				width: 250,
				docked: 'left'
			},
			{
				xclass: 'SIFRest.view.Viewer'
			}
        ]
    }
});
