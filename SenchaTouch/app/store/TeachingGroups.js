Ext.define("SIFRest.store.TeachingGroups", {
    extend: 'Ext.data.Store',
	config: {
		model: 'SIFRest.model.TeachingGroup',
		proxy: {
			type: "ajax",
			url : '/SIFDirectRest/sif/v2_5/objects/au/v1_3/TeachingGroups',
			reader: {
				type: "json",
				rootProperty: "SIF_Collection.Entry"
			}
		},
		autoLoad: true
	}
});
