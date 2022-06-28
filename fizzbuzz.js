// output 1-100, but every multiple of 3 and 5, say fizz or buzz
(() => {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
})();
