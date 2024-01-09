function receivesAFunction(cb) {
    cb();
}

function callBack() {
    console.log("I called back!");
}

receivesAFunction(callBack);

function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("razzle");
    }
}