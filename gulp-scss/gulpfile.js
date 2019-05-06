// load modules

const gulp = require('gulp');

 

// define functions

function sayHello(done) { // sayHello is the name of the task

    console.log('Hello World'); // this just prints 'Hello world'

    done();

}

 

// export tasks

exports.default = sayHello;