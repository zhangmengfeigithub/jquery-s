
/*
window.$ = function () {
    alert('my lib $()...');
}*/

(function (w) {
    w.$ = function () {
        alert('my lib $()...');
    }
})(window);
