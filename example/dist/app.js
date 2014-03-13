
require.config({ enable_ozma: true });


/* @source cat.js */;

define("cat", function(){
    return "hello world";
});

/* @source mod/b.js */;

define('mod/b', [], function(){
    return { 'name': 'mod/b' };
});

/* @source mod/a.js */;

define('mod/a', [], function(){
    return { 'name': 'mod/a' };
});

/* @source  */;

define('app', ['./mod/a', './mod/b', "./cat"], function(a, b, c){
    return { 'name': 'app' };
});

require(['app'], function(app){});
