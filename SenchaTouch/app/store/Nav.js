Ext.define("SIFRest.store.Nav", {
    extend: 'Ext.data.Store',
	config: {
		model: 'SIFRest.model.Nav',
		data: [
			{
				title: 'Welcome',
				type: 'view',
				view: 'Welcome'
			},
			{
				title: 'Schools',
				type: 'nav',
				view: 'Schools'
			},
	/*
			{
				title: 'School',
				type: 'view',
				data: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/SchoolInfos/6BF4417EA9AD57510070B383A5544EB0',
				view: 'School'
			},
	*/
			{
				title: 'Students',
				type: 'nav',
				view: 'StudentPersonals'
			},
			{
				title: 'Staff',
				type: 'nav',
				view: 'StaffPersonals'
			},
			{
				title: 'Teaching Group',
				type: 'nav',
				view: 'TeachingGroups'
				//data: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/TeachingGroups/BBC24F06F6803C8A4783A785AFBB626E'
			},
			{
				title: 'Browse',
				type: 'nav',
				view: 'Browse'
			}
			//{
			//	title: 'TEST2',
			//	type: 'view',
			//	view: 'Text',
			//	data: '/~scottp/',
			//}
		]
	}
});
