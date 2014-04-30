Ext.define("SIFRest.store.Schools", {
    extend: 'Ext.data.Store',
	config: {
		model: 'SIFRest.model.School',
		proxy: {
			type: "ajax",
			url : '/SIFDirectRest/sif/v2_5/objects/au/v1_3/SchoolInfos',
			reader: {
				type: "json",
				rootProperty: "SIF_Collection.Entry"
			}
		},
		autoLoad: true
	}
});
