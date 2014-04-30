Ext.define('SIFRest.model.Entry', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'EntryId', mapping: 'Id', type: 'string'},
            {name: 'Link', type: 'string'}
        ]
    }
});
