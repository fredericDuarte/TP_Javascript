function throwError() {
    throw new Error('not a number');
}


function multiply(x, y) {
    console.log('Nombre arg : ' + arguments.length);

    try {
        if (isNaN(x && y))
            throwError();
        else return x * y;
    } catch (e) {
        console.log(e);
    }
}

(function autoInvoquee() {
    console.log('Auto-invoquée');

})();

