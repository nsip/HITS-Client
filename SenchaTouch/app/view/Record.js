Ext.define('SIFRest.view.Record', {
	extend: 'Ext.tab.Panel',

	config: {
		tabBar: {
		    layout: {
			pack: 'center'
		    }
		},
		activeTab: 1,
		tabBarPosition: 'bottom',
		defaults: {
		    scrollable: true
		},

		tpl: Ext.create('Ext.XTemplate',
			'<h1>No template...</h1>'
		),
		viewData: '',

		items: [],

		listeners: {
			show: function() {
				this.setHtml("Loading...");
				this.setMasked({
					xtype: 'loadmask',
					message: 'Loading...'
				});

				var that = this;
				console.log("URL=" + this.getViewData());

				var view = Ext.create('Ext.Container', {
					title: 'View',
					iconCls: 'bookmarks',
					styleHtmlContent: true,
					html: '<h1>Loading...</h1>',
					tpl: this.getTpl()
				});
				this.add(view);
	
				var json = Ext.create('SIFRest.view.Text', {
					title: 'JSON',
					iconCls: 'star',
					html: '<h1>Loading...</h1>',
					viewData: '/pretty/' + this.getViewData()
				});
				this.add(json);

				Ext.Ajax.request({
					url: this.getViewData(),
					success: function(response) {
						console.log(response.responseText);
						var jsonData = Ext.JSON.decode(response.responseText);
						// XXX Copy all @ fields across !
						if (jsonData.StudentPersonal) {
							jsonData.StudentPersonal.RefId = jsonData.StudentPersonal['@RefId'];
						}
						if (jsonData.StaffPersonal) {
							jsonData.StaffPersonal.RefId = jsonData.StaffPersonal['@RefId'];
						}
						if (jsonData.SchoolInfo) {
							jsonData.SchoolInfo.RefId = jsonData.SchoolInfo['@RefId'];
						}
						console.log(jsonData);
						view.setData(jsonData);
						that.unmask();
					}
				});

				console.log("Inside actual class");
			}
		}
	}
});

