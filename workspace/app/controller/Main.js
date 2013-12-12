Ext.define('AI.controller.Main', {
    extend : 'Ext.app.Controller',

    init : function () {
        this.control({
            'ai-view-appinfo' : {
                'afterrender' : this.onAppInfoRender
            }
        });
    },

    onAppInfoRender : function (cmp) {
        var getInfoFromInspectedWindow = function () {
            if (!window.Ext) {
                return null;
            }

            var v = Ext.versions.extjs;

            return {
                'Version' : v.version
            };
        };

        AI.util.InspectedWindow.eval(
            getInfoFromInspectedWindow,
            null,
            function (data) {
                cmp.setSource(data);
            }
        );
    }
});
