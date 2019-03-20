var x;
var y;
console.log('Égalité faible : ', x == y);
console.log('Égalité forte', x === y);

x = 2;
y = 'Formation';
console.log('Égalité faible : ', x == y);
console.log('Égalité forte', x === y);
x = 2;
y = '2';
console.log('Égalité faible : ', x == y);
console.log('Égalité forte', x === y);
x = undefined;
y = null;
console.log('Égalité faible : ', x == y);
console.log('Égalité forte', x === y);

x =20;
y=5;
console.log('20 + 5 ', x + y);

x =20;
y = 'Formation';
console.log('20 + \'formation\' ', x + y);

x =20 + 5;
y = 'Formation';
console.log('20 + 5  +  \'formation\' ', x + y);

x =20;
y = 'Formation' + 5;
console.log('20 + \'formation\' + 5 ', x + y);

x = 'Formation' + 20;
y =5;

console.log(' \'formation\' + 20 + 5 ', x + y);

