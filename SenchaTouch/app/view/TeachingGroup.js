Ext.define('SIFRest.view.TeachingGroup', {
	extend: 'SIFRest.view.Record',
	xtype: 'student',
	config: {
		tpl: Ext.create('Ext.XTemplate',
			'<tpl for="TeachingGroup">',
				'<h2>{ShortName} = {LongName} ({SchoolYear})</h2>',
				'<tpl for="TeacherList">',
					'<tpl for="TeachingGroupTeacher">',
						'<h3>{Association} = ',
							'<tpl for="Name">',
								'{GivenName} {FamilyName}</h3>',
							'</tpl>',
						'</h3>',
					'</tpl>',
				'</tpl>',
				'<h3>Students</h3>',
				'<tpl for="StudentList">',
					'<tpl for="TeachingGroupStudent">',
						'<ul>',
						'<tpl for="Name">',
							'<li>Name = {GivenName} {FamilyName}</li>',
						'</tpl>',
						'</ul>',
					'</tpl>',
				'</tpl>',
			'</tpl>'
		)
	}
});

