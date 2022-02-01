sap.ui.define(["sap/ovp/cards/generic/Component"],
    function (CardComponent) {
        "use strict";

        /* component for custom card */
        return CardComponent.extend("ovpcustomui.ext.cards.Component", {
            // use inline declaration instead of component.json to save 1 round trip
            metadata: {
                properties: {
                    "contentFragment": {
                        "type": "string",
                        "defaultValue": "ovpcustomui.ext.cards.List"
                    },
                    "controllerName": {
                        "type": "string",
                        "defaultValue": "ovpcustomui.ext.cards.List"
                    }
                },

                version: "${version}",

                library: "sap.ovp",

                includes: [],

                dependencies: {
                    libs: ["sap.m", "sap.ui.comp"],
                    components: []
                },
                config: {}
            }
        });
    });