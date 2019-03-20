var hello = function (name) {
    return console.log('Hello ', name);
};


setTimeout(function () {

}, 5000)

function asyncSayHello(name, callback) {
    if (callback && typeof callback === 'function') {
        setTimeout(callback, 5000, name);
    }

}