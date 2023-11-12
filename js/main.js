// Проставити true || false навпроти кожного console.log
// Під кожним console.log() - написати в коментарях пояснення

console.log({}.prototype === {}.prototype);
// true(undefined = undefined, у цих обєктів немає prototype)

function sayHello() { };
console.log(sayHello.prototype === sayHello.__proto__);
// false(sayHello.__proto__ посилається на Function.prototype, Function.prototype != sayHello.prototype)

function sayHello() { };
function sayGoodBye() { };
console.log(sayHello.__proto__ === sayGoodBye.__proto__);
// true(обидва __proto__ посилаються на однаковий батьківський прототип Function.prototype)
console.log(sayHello.prototype === sayGoodBye.prototype);
// false(прототипи різних функцій не рівні між собою)

let arrowFunc = () => { };
console.log(arrowFunc.prototype === Object.prototype);
// false(у стрілочної функції arrowFunc немає прототипу(тобто arrowFunc.prototype видає нам undefined), а прототип у обєкта Object є)

let age = 22;
console.log(age.prototype === Number.prototype);
// false(age - це примітив і у нього немає властивості prototype, а у Number є)
console.log(age.__proto__ === Number.prototype);
// true(age.__proto__ ссилається на батьківський прототип, тобто на Number.prototype)

function Test() { }
console.log(Test.__proto__ === Function.prototype);
// (функція Test ссилається на прототип батьківського обєкта Test.__proto__, яким є Function.prototype)

let num = 77;
console.log(num.__proto__ === Number.prototype)
// (num.__proto__ ссилається на прототип батьківського обєкта, яким є Number. Так як num - це примітив, то навколо нього створюється тимчасовий обєкт Number)

