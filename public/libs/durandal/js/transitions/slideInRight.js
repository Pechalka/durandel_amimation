define(function(require) {
    var helper = require('./transitionHelper');
    var system = require('durandal/system');

    var settings = {
        inAnimation: 'fadeInLeftBig',
        outAnimation: 'fadeOutRightBig',
        jsOutFallback: function ($previousView, duration) {
            $previousView.animate({ left: '101%' }, duration);
        },
        jsInFallback: function ($newView, duration) {
            $newView.css({ left: '-101%' });
            $newView.animate({ left: '0' }, duration);
        }
    };

fadeIn = function(context) {
            system.extend(context, settings);
            return helper.create(context);
        };

    return fadeIn;
});