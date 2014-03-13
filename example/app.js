define('app', ['./mod/a', './mod/b', "./cat"], function(a, b, c){
    return { 'name': 'app' };
});

require(['app'], function(app){});
