/**
 *
 */
Ext.define('AI.view.layouts.overnesting.OvernestingModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.overnesting',

    requires: [
        'Ext.util.Sorter',
        'Ext.data.proxy.Memory',
        'AI.model.layouts.Layout'
    ],

    data: {
        selected: false
    },

    stores: {
        Overnestings: {
            storeId: 'Overnestings',
            model: 'AI.model.layouts.Layout',
            sorters: 'cmpId',
            proxy: {
                type: 'memory'
            }
        }
    }
});
