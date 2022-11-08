// set up series of prompts for user in terminal

const inquirer = require('inquirer');
// require the query.sql file? 

let startPrompt = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'firstChoice',
        choices: ['View all employees', 'Add employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Deparments', 'Add Department']

    }
];

// if one of the following 3 is chosen: view all employees, view all roles, view all departments is chosen THEN it needs to READ/GET and display that data in a table in the terminal



// if one of the following 3 is chosen: Add Employee, Add Role or Add Department THEN it needs to CREATE/POST a new set of fields/data for the corresponding table

// if Add Department is chosen then the question appears: "What is the name of the department?" after the new name is entered the following will appear if successful: "Added ________ to the database"

// if Add Role is chosen the the following prompt will appear: "What is the salary of the role?" and then "Which department does the role belong to?" which will display a lost of the following: Sales, Engineering, IT, HR, Marketing" after one of these is chosen then the (if successful) message will appear: "Added ______ to the database"

// if Add Employee is chosen then the following will appear: "What is the employee's first name?" then "What is the employee's last name?" then "What is the employee's role?" and they will choose from a list of the following: 
// "Inside Sales Rep" "Web Developer" "Lead Engineer" "Help Desk Manager" "Human Resources Manager" "Junior Digital Marketing Manager"
// and then "Who is the employee's manager?" and a list of names will appear to choose from. Once that is completed then this will apper: "Added ______ to the database"



// if update employee role is chosen THEN it needs to UPDATE/PUT new data in an existing field. The following prompt will appear: "Which employee's role do you want to update?" then a list of the employees will appear to choose from. Then "Which role do you want to assing to the selected employee?" and a list of roles will appear and finally this message appears: "Updated employee's role successfully"



