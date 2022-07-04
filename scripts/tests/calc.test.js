//this will be used to test the calc.js file
//two dots are to signify that file is in seperate folder

const addition = require('../calc')

//creating a top parent describe of calculator
describe("Calculator", () =>{
//second level of descibe of addition
describe("Addition function", ()=>{
    //outline your test here
    test("should return 42 for 20 + 22", ()=>{
        //inside the test you must outline your expectations
        expect(addition(20,22)).toBe(42);
    });
});
describe("Subtraction function", ()=>{

});
describe("Multiply function", ()=>{

});
describe("Division function", ()=>{

});
});