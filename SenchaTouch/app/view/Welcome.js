Ext.define('SIFRest.view.Welcome', {
    extend: 'Ext.Container',

    config: {
		title: 'Welcome',
	styleHtmlContent: true,
        items: [
			{
				html: '<img src="resources/images/SIFA_AU_crop.png">'
					+ '<h1>Welcome to SIF REST Demo</h1>'
					+ '<ul>'
					+ '<li>One</li>'
					+ '<li>Two</li>'
			}
        ]
    }
});
