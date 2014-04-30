Ext.define('SIFRest.model.ListItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'text', type: 'string'},
            {name: 'leaf', type: 'bool'},
            {name: 'id', type: 'string'},
            {name: 'type', type: 'string'}
        ]
    }
});
