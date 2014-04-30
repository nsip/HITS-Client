Ext.define("SIFRest.store.StaffPersonals", {
    extend: 'Ext.data.Store',
	config: {
		model: 'SIFRest.model.StaffPersonal',
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
		proxy: {
			type: "ajax",
			url : '/SIFDirectRest/sif/v2_5/objects/au/v1_3/StaffPersonals',
			reader: {
				type: "json",
				rootProperty: "SIF_Collection.Entry"
			}
		},
		autoLoad: true
	}
});
