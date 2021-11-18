const week1 = ['Pair programming', 'Git & GitHub', 'Data types', 'Nested data structures', 'Functions', 'Modular JavaScript (CommonJS, Node and npm)', 'Unit Testing and Test Driven Development (TDD)', 'Server-side development', 'Server-side debugging', 'Refactoring']
const week2 = ['Synchronous vs. asynchronous functions', 'Writing, calling and testing async functions', 'Error-first callbacks', 'Callback scope', 'Filesystem interactions (reading & writing)', 'Client and server interactions', 'HTTP GET and POST requests', 'Deploying web applications']
const week3 = ['Databases', 'Entities (tables)', 'Relationships', 'Private & foreign keys', 'Joins', 'Data operations with SQL (CRUD)', 'Management tools', 'Migrations', 'Seeding', 'Graphical tools', 'Promises']
const week4 = ['ECMAScript 6/2015 (part 1)', 'var, let, and const', 'Arrow functions', 'String interpolation', 'Enhanced object literals: methods and properties', 'Task runners & bundlers', 'Minification', 'Concatenation', 'Transpiling', 'Bundling', 'Loading', 'React components', 'Virtual DOM', 'Components', 'Props and state', 'Unidirectional data flow', 'View composition with components']
const week5 = ['Web APIs', 'Scalable route structuring (Express.js)', 'URL route params (/widgets/:id)', 'Performing client-side rendering of API data', 'Issuing client-side requests', 'Testing client-side code', 'Jest and Enzyme']
const week6 = ['Triggers and self regulation', 'Extending React UIs with Redux', 'Functional programming user interfaces', 'Container vs. presentational components', 'The relationship between React and Redux', 'Stores and createStore', 'Actions and action creators', 'Reducers and the root reducer', 'Unidirectional data flow', 'Pure functions']
const week7 = ['Empathy and trust in teams', 'Authentication & authorisation', 'JavaScript Web Tokens (JWT)', 'OAuth & 3rd party auth providers', 'Agile practices', 'Sprint planning', 'Estimating work', 'Prioritisation', 'Managing the backlog', 'Retrospectives', 'Customer demos', 'Git flow on teams', 'Code reviews']
const week8 = ['Applying agile practices', 'Building software on team (real world)']
const week9 = ['Completing final project', 'Presenting final project', 'Graduating!', 'Sharing appreciation']

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('bootcamp').del()
    .then(function () {
      // Inserts seed entries
      return knex('bootcamp').insert([
        { id: 1, week: 1, coreConcepts: JSON.stringify(week1) },
        { id: 2, week: 2, coreConcepts: JSON.stringify(week2) },
        { id: 3, week: 3, coreConcepts: JSON.stringify(week3) },
        { id: 4, week: 4, coreConcepts: JSON.stringify(week4) },
        { id: 5, week: 5, coreConcepts: JSON.stringify(week5) },
        { id: 6, week: 6, coreConcepts: JSON.stringify(week6) },
        { id: 7, week: 7, coreConcepts: JSON.stringify(week7) },
        { id: 8, week: 8, coreConcepts: JSON.stringify(week8) },
        { id: 9, week: 9, coreConcepts: JSON.stringify(week9) }
      ])
    })
}
