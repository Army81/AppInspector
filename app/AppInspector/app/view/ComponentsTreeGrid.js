Ext.define('AI.view.ComponentsTreeGrid', {
    extend : 'Ext.tree.Panel',
    alias  : 'widget.componentstreegrid',

    requires : [
        'AI.view.FilterField',
        'AI.view.override.ComponentsTreeGrid',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.form.field.Text',
        'Ext.tree.View',
        'Ext.tree.Column'
    ],

    autoScroll  : true,
    store       : 'components.Components',
    animate     : false,
    rootVisible : false,
    useArrows   : true,

    dockedItems : [
        {
            xtype : 'toolbar',
            dock  : 'top',
            ui    : 'default-toolbar',
            items : [
                {
                    xtype   : 'button',
                    itemId  : 'RefreshComponentTree',
                    iconCls : 'icn-refresh',
                    text    : 'Refresh'
                },
                {
                    xtype : 'tbfill'
                },
                {
                    xtype  : 'filterfield',
                    itemId : 'FilterComponentsTree'
                }
            ]
        }
    ],
    viewConfig  : {

    },
    columns     : [
        {
            xtype     : 'treecolumn',
            dataIndex : 'text',
            text      : 'Component ID',
            flex      : 2
        },
        {
            xtype     : 'gridcolumn',
            dataIndex : 'xtype',
            text      : 'XType',
            flex      : 1
        }
    ]


});
