Ext.define('SIFRest.model.School', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'Id', type: 'string'},
            {name: 'Link', type: 'string'},
            {name: 'Title', mapping: 'Content.SchoolInfo.SchoolName', type: 'string'}
        ]
    }
});
