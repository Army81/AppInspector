Ext.define('AI.view.Main', {
    extend   : 'Ext.container.Container',
    requires : [
        'Ext.tab.Panel',
        'Ext.layout.container.Border',

        'AI.view.store.List',
        'AI.view.AppInfo',
        'AI.view.profile.Overnesting',
        'AI.view.profile.BoxLayouts',
        'AI.view.component.Panel'
    ],

    xtype : 'app-main',

    layout : {
        type : 'border'
    },

    items : [
        {
            region : 'north',
            xtype  : 'ai-view-appinfo'
        },
        {
            region : 'center',
            xtype  : 'tabpanel',
            items  : [
                {
                    xtype  : 'ai-view-component-panel'
                },
                {
                    xtype : 'ai-view-store-list'
                },
                {
                    xtype : 'ai-view-profile-overnesting'
                },
                {
                    xtype : 'ai-view-profile-boxlayouts'
                }
            ]
        }
    ]
});