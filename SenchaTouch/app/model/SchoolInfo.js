Ext.define('SIFRest.model.SchoolInfo', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'Id', mapping: 'SchoolInfo.RefId', type: 'string'},
            {name: 'SchoolType', mapping: 'SchoolInfo.SchoolType', type: 'string'},
            {name: 'SchoolSector', mapping: 'SchoolInfo.SchoolSector', type: 'string'},
            {name: 'Title', mapping: 'SchoolInfo.SchoolName', type: 'string'}
        ]
    }
});
