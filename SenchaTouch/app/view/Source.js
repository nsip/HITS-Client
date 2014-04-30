Ext.define('SIFRest.view.Source', {
	extend: 'Ext.tab.Panel',
	config: {
		viewData: '',

        tabBar: {
            layout: {
                pack: 'center'
            }
        },
        activeTab: 1,
        defaults: {
            scrollable: true
        },

		listeners: {
			show: function() {
				this.add(Ext.create('SIFRest.view.Text', {
					title: 'XML',
					viewData: this.getViewData() + "?type=xml"
				}));
				this.add(Ext.create('SIFRest.view.Text', {
					title: 'JSON',
					viewData: this.getViewData() + "?type=json"
				}));
			}
		}
	}
});

