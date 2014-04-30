Ext.define("SIFRest.store.Browse", {
    extend: 'Ext.data.Store',
	config: {
		model: 'SIFRest.model.Nav',
		data: [
			{
				title: 'SchoolInfo',
				type: 'nav',
				view: 'BrowseList',
				data: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/SchoolInfos'
			},
			{
				title: 'StudentPersonal',
				type: 'nav',
				view: 'BrowseList',
				data: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/StudentPersonals'
			},
			{
				title: 'StaffPersonal',
				type: 'nav',
				view: 'BrowseList',
				data: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/StaffPersonals'
			},
			{
				title: 'StudentSchoolEnrollment',
				type: 'nav',
				view: 'BrowseList',
				data: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/StudentSchoolEnrollments'
			},
			{
				title: 'StaffAssignment',
				type: 'nav',
				view: 'BrowseList',
				data: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/StaffAssignments'
			},
			{
				title: 'TeachingGroup',
				type: 'nav',
				view: 'BrowseList',
				data: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/TeachingGroups'
			}
		]
	}
});
