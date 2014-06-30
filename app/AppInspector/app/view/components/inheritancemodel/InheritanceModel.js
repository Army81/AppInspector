/**
 * @class   AI.view.components.inheritancemodel.InheritanceModel
 * @extends d3xtjs.CollapsibleTree
 *
 * This class is here just to follow the current design patterns. Feel free to remove. -jgarcia
 */
Ext.define('AI.view.components.inheritancemodel.InheritanceModel', {
    extend: 'd3xtjs.CollapsibleTree',
    xtype: 'inheritancemodel',

    requires: [],

    mixins: [
        'AI.mixin.Localize'
    ],

//    controller: 'inheritancemodel',
//    viewModel: {
//        type: 'inheritancemodel'
//    },

    title: 'Inheritance Model',
    itemId: 'inheritancemodel'
});
