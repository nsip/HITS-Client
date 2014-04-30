// Load HTML Text into a container
Ext.define('SIFRest.view.Text', {
	extend: 'Ext.Container',
	xtype: 'textview',
	config: {
		viewData: '',
		styleHtmlContent: true,
		data: { },
		html: '<h1>Loading...</h1>',
		scrollable: true,
		border: 5,
		listeners: {
			show: function() {
				this.setHtml("Loading...");
				this.setMasked({
					xtype: 'loadmask',
					message: 'Loading...'
				});

				var that = this;
				console.log(this);

				Ext.Ajax.request({
					url: this.getViewData(),
					success: function(response) {
						that.setHtml(response.responseText);
						that.unmask();
					}
				});

			}
		}
	}
});

