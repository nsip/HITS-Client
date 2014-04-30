Ext.define("SIFRest.store.StudentPersonals", {
    extend: 'Ext.data.Store',
	config: {
		model: 'SIFRest.model.StudentPersonal',
		proxy: {
			type: "ajax",
			url : '/SIFDirectRest/sif/v2_5/objects/au/v1_3/StudentPersonals',
			reader: {
				type: "json",
				rootProperty: "SIF_Collection.Entry"
			}
		},
		sorters: [
			{
			    property : "FamilyName",
			    direction: "ASC"
			},
			{
			    property : "GivenName",
			    direction: "ASC"
			}
		],
		grouper: function(rec) {
			return rec.get('FamilyName')[0];
		},
		autoLoad: true
	}
});
