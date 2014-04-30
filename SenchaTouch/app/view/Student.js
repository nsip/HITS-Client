Ext.define('SIFRest.view.Student', {
	extend: 'SIFRest.view.Record',
	xtype: 'student',
	config: {
		tpl: Ext.create('Ext.XTemplate',
			'<tpl for="StudentPersonal">',
				'<img style="border: 1px solid blue;" src="/photo/student/{RefId}.jpg" alt="TODO" />',
			       '<tpl for="PersonInfo">',
					'<tpl for="Name">',
					       '<h3>{GivenName} {FamilyName}</h3>',
					'</tpl>',
					'<tpl for="Demographics">',
						'<tpl if="BirthDate">',
							"<p>Birthday: {BirthDate:date('d M y')} ({BirthDate:this.bd}yo)</p>",
						'</tpl>',
						'<p>Gender: {Sex:this.sex}</p>',
						'<p>Country of Birth: {CountryOfBirth:this.country}</p>',
					'</tpl>',
				'</tpl>',
			'</tpl>',
			{
				bd: function(i) {
					var birthDate = new Date(i);
					var today = new Date();
					var age = today.getFullYear() - birthDate.getFullYear();
					return age;
				},
				sex: function(i) {
					if (i == 1) { return 'Male' }
					else if (i == 2) { return 'Female' }
					else { return 'Unknown' }
				},
				country: function(i) {
					if (i == 1101) { return 'Australia' }
					else { return 'Unknown' }
				}
			}
		)
	}
});

