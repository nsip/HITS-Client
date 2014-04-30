Ext.define('SIFRest.view.BrowseList', {
    extend: 'Ext.List',
    xtype: 'browselist',
	config: {
		viewData: '',
		itemTpl: '{EntryId}',
		store: 'BrowseList',
		listeners: {
			show: function() {
				var store = this.getStore();
				store.setProxy({
					type: 'ajax',
					url: this.getViewData(),
					reader: {
						type: "json",
						rootProperty: "SIF_Collection.Entry"
					}
				});
				console.log(this.getViewData());
				store.load();
			}
		}
	}
});
