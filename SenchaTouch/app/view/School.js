Ext.define('SIFRest.view.School', {
	extend: 'SIFRest.view.Record',
	xtype: 'school',
	config: {
		tpl: Ext.create('Ext.XTemplate',
			'<tpl for="SchoolInfo">',
				'<img style="border: 1px solid blue;" src="/photo/school/{RefId}.png" alt="TODO" />',
				'<h2>{SchoolName}</h2>',
				'<p>Type = {SchoolType}</p>',
				'<p>Sector = {SchoolSector}</p>',
			'</tpl>'
		)

	}
});

