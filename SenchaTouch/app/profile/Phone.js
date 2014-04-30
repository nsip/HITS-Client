Ext.define('SIFRest.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is.Phone;
    },

    launch: function() {
        Ext.create('SIFRest.view.phone.Main');
    }

});
