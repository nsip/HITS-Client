Ext.define('SIFRest.model.Nav', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'title', type: 'string'},
            {name: 'type', type: 'string'},
            {name: 'view', type: 'string'},
            {name: 'data', type: 'string'}
        ]
    }
});
