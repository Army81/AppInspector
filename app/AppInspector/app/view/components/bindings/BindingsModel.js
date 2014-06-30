/**
 * @class   AI.view.componets.details.BindingsModel
 * @extends Ext.app.ViewModel
 */
Ext.define('AI.view.componets.details.bindings.BindingsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.bindings',

    requires: [
        'Ext.data.Field',
        'Ext.util.Sorter'
    ],

    stores: {
        Bindings: {
            storeId: 'Bindings',
            fields: ['key', 'value', 'boundTo', {
                defaultValue: null,
                name: 'isValid',
                type: 'boolean',
                useNull: true
            }],
            sorters: 'key'
        }
    }
});
