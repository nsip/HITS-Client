//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'SIFRest': 'app'
});
//</debug>

Ext.application({
    name: 'SIFRest',

    requires: [
        'Ext.MessageBox'
    ],

    // profiles: ['Phone', 'Tablet'],
    controllers: ['Main'],
    views: [
		'Main', 'Nav', 'Tablet', 'Viewer', 'Welcome',
		'Schools', 'School', 'Raw', 'Text',
		'TeachingGroups', 'TeachingGroup',
		'StudentPersonals', 'Student',
		'StaffPersonals', 'Staff',
		'Browse', 'BrowseList', 'Source'
	],
    stores: ['Schools', 'Nav', 'Browse', 'BrowseList', 'TeachingGroups', 'StudentPersonals', 'StaffPersonals'],
    models: ['School', 'Nav', 'ListItem', 'Entry', 'TeachingGroup', 'StudentPersonal', 'StaffPersonal'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
		if (Ext.os.is.Phone) {
			console.log("PHONE");
			Ext.Viewport.add(Ext.create('SIFRest.view.Main'));
		}
		else {
			console.log("TABLET");
			Ext.Viewport.add(Ext.create('SIFRest.view.Tablet'));
		}
			
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
