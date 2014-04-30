Ext.define('SIFRest.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			'main': 'mainnav',
			'viewer': 'viewer',
		},
		control: {
			'nav': {
				'select': 'navSelect'
			},

			'browse': {
				'select': 'navSelect',
				'disclose': 'navDisclose'
			},

			'browselist': {
				'select': 'navView'
			},

			'schoolslist': {
				'select': 'showSchool'
			},

			'studentpersonals': {
				'select': 'showStudent'
			},

			'staffpersonals': {
				'select': 'showStaff'
			},

			'teachinggroups': {
				'select': 'showTeachingGroup'
			}

		}
	},

	// Show Student
	showStudent: function(list, record) {
		console.log("showStudent");
		console.log(record.data);
		var view = Ext.create('SIFRest.view.Student', {
			title: record.data.GivenName + ' ' + record.data.FamilyName,
			viewData: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/StudentPersonals/' + record.data.Id
		});
		this.getViewPanel(view);
	},

	// Show Staff
	showStaff: function(list, record) {
		console.log("showStaff");
		console.log(record.data);
		var view = Ext.create('SIFRest.view.Staff', {
			title: record.data.GivenName + ' ' + record.data.FamilyName,
			viewData: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/StaffPersonals/' + record.data.Id
		});
		this.getViewPanel(view);
	},

	// Show a school
	showSchool: function(list, record) {
		console.log("showSchool");
		console.log(record.data);
		var view = Ext.create('SIFRest.view.School', {
			title: record.data.Title,
			viewData: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/SchoolInfos/' + record.data.Id
		});
		this.getViewPanel(view);
	},

	// Show a group
	showTeachingGroup: function(list, record) {
		console.log("showTeachingGroup");
		console.log(record.data);
		var view = Ext.create('SIFRest.view.TeachingGroup', {
			title: record.data.Title,
			viewData: '/SIFDirectRest/sif/v2_5/objects/au/v1_3/TeachingGroups/' + record.data.Id
		});
		this.getViewPanel(view);
	},

	// Show the URL as Text
	navDisclose: function(list, record) {
		console.log("Disclose...");
		var view = Ext.create('SIFRest.view.Source', {
			title: record.data.title,
			viewData: '/pretty/' + record.data.data
		});
		this.getViewPanel(view);
	},

	// Show the URL as Text
	navView: function(list, record) {
		var view = Ext.create('SIFRest.view.Source', {
			title: record.data.title,
			viewData: '/pretty/' + record.data.Link
		});
		this.getViewPanel(view);
	},

	// Load nav or view automatically
	navSelect: function(list, record) {
		console.log(record.data);

		// Load the view, set data from record
		var view;
		if (record.data.view) {
			view = Ext.create('SIFRest.view.' + record.data.view, {
				title: record.data.title,	// XXX Optional
				viewData: record.data.data,
			});
		}

		if (record.data.type == 'nav') {
			// XXX Push onto Navigation !
			this.getMain().push(view);
		}
		else if (record.data.type == 'view') {
			// Phone = Push onto Navigation, Tablet = replace view
			this.getViewPanel(view);
		}

	},

	getViewPanel: function(o) {
			if (Ext.os.is.Phone) {
				this.getMain().push(o);
			}
			else {
				this.getViewer().push(o);
			}
	}


});
