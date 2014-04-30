Ext.define('SIFRest.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Tablet;
    },

    launch: function() {
        Ext.create('SIFRest.view.tablet.Main');
    }
});
