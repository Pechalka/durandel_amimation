define([
    'plugins/router'
    , 'durandal/app'
], function(
    router
    , app
) {

    return {
        activate: function () {

            //router.guardRoute = auth.guard;
            router.map([
                { route: ['', 'page1'], title:'page1', moduleId: 'viewModels/page1', nav: true },
                { route: ['page2'], title:'page2', moduleId: 'viewModels/page2', nav: true }
            ]).buildNavigationModel();

            
            return router.activate();
        }
    }
});