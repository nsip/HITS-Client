Ext.define('SIFRest.model.TeachingGroup', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'Id', type: 'string'},
            {name: 'Link', type: 'string'},
            {name: 'Title', mapping: 'Content.TeachingGroup.ShortName', type: 'string'}
        ]
    }
});
