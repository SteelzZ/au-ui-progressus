if (Meteor.isClient) {
    // Will proxy this config to Router.configure( ... );
    CmsInn.configure({
        loadingTemplate: 'loading',
        layoutTemplate: 'layout',
        plugins: {
            navigation: {
                pageTypes: [
                    {
                        type: "about"
                    },
                    {
                        type: "contact"
                    },
                    {
                        type: "home"
                    }
                ],
                defaultTemplate: 'home'     // On initial load as there is no routes, 
                                            // package automatically adds route and uses 'defaultTemplate' value to set as its template
            }
        }
    });
}