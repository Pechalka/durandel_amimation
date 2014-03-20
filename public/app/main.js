require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    waitSeconds: 200,
    paths: {
        "knockout": "../libs/knockout.js/knockout"
        , "jquery": "../libs/jquery/jquery"
        , "text": "../libs/requirejs-text/text"
        , 'transitions' : '../libs/durandal/js/transitions'
        , 'durandal':'../libs/durandal/js'
        , 'plugins' : '../libs/durandal/js/plugins'
    }
});


define([
    "jquery"
    , 'durandal/system'
    , 'durandal/app'
    , 'durandal/viewLocator'
    , "knockout"
    , 'plugins/widget'
],  function ($, system, app, viewLocator, ko, widget) {
    
    system.debug(true);
    
    app.title = 'Gratify admin';

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true
    });

    app.start().then(function() {
        viewLocator.useConvention();
        app.setRoot('viewModels/shell', 'entrance');
    });
});