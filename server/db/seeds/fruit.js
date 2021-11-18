const week1 = ['Pair programming','Git & GitHub','Data types','Nested data structures','Functions','Modular JavaScript (CommonJS, Node and npm)','Unit Testing and Test Driven Development (TDD)','Server-side development','Server-side debugging','Refactoring']
const week2 = ['Synchronous vs. asynchronous functions','Writing, calling and testing async functions','Error-first callbacks','Callback scope','Filesystem interactions (reading & writing)','Client and server interactions','HTTP GET and POST requests','Deploying web applications']
const week3 = ['Databases','Entities (tables)','Relationships','Private & foreign keys','Joins','Data operations with SQL (CRUD)','Management tools','Migrations','Seeding','Graphical tools','Promises']
const week4 = ['ECMAScript 6/2015 (part 1)','var, let, and const','Arrow functions','String interpolation','Enhanced object literals: methods and properties','Task runners & bundlers','Minification','Concatenation','Transpiling','Bundling','Loading','React components','Virtual DOM','Components','Props and state','Unidirectional data flow','View composition with components']
// const week5 = []


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bootcamp').del()
    .then(function () {
      // Inserts seed entries
      return knex('bootcamp').insert([
        { id: 1, week: 1, coreConcepts: JSON.stringify(week1) }
      ])
    })
}
