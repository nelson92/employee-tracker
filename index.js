const inquirer = require('inquirer');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
const { db } = require('./config/connection');
// const mysql = require('mysql2');
// const express = require('express');
// const app = express();
// set up series of prompts for user in terminal
// const query = require('./db/query');
// const { allowedNodeEnvironmentFlags } = require('process');
// const PORT = process.env.PORT || 3001;
// require the query.sql file? 

function startPrompt(){
    inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'firstChoice',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Finished']
        
        }
         

    
]).then((responses) => {
    switch(responses.firstChoice){
        case 'View All Employees':
        viewAllEmployees();
        break;
        case 'Add Employee':
        addEmployee();
        break;
        case 'Update Employee Role':
        updateEmployeeRole();
        break;
        case 'View All Roles':
        viewRoles();
        break;
        case 'Add Role':
        addRole();
        break;
        case 'View All Departments':
        viewAllDepartments();
        break;
        case 'Add Department':
        addDepartment();
        break;
        case 'Finished':
        console.log('goodbye');
        break;
        default: 
        console.log("choice " + response.firstChoice + " is not working")
    }
} )
};

function viewAllEmployees () {
    const allEmployees = `SELECT * from employees;`

    db.query(allEmployees, function (err, results) {
        if (err) throw err;
        console.table(results);
        startPrompt();
    })
};

function viewRoles() {
    const allRoles = `SELECT * FROM roles;`
    //  JOIN departments ON roles.department_id = department.id
    // role.id, role.title, department.name AS departments, role.salary

    db.query(allRoles, function (err, results){
        if(err) throw err;
        console.table(results);
        startPrompt();
    })
};

function viewAllDepartments() {
    db.query(`SELECT * FROM departments;`, function (err, results){
        if(err) throw err;
        console.table(results);
        startPrompt();
    })
        
};

function addDepartment() {
    inquirer
        .prompt ([
            {
                name: 'departmentName',
                type: 'input',
                message: 'Enter the name of the new Department.'
            },
            {
                name: 'departmentId',
                type: 'input',
                message: 'Enter the ID of the new Department.',
            }
        ])
        .then
        (function (response) {
            db.query("INSERT INTO departments set ?",
            {
                id: response.departmentId,
                name: response.departmentName
            },
                function(err) {
                    if (err) throw err;
                    console.log("New Department successfully");
                startPrompt()
                }
            );
        });
};

// switch statement - 
// if one of the following 3 is chosen: view all employees, view all roles, view all departments is chosen THEN it needs to READ/GET and display that data in a table in the terminal - using console.table



// if one of the following 3 is chosen: Add Employee, Add Role or Add Department THEN it needs to CREATE/POST a new set of fields/data for the corresponding table

// if Add Department is chosen then the question appears: "What is the name of the department?" after the new name is entered the following will appear if successful: "Added ________ to the database"

// if Add Role is chosen the the following prompt will appear: "What is the salary of the role?" and then "Which department does the role belong to?" which will display a lost of the following: Sales, Engineering, IT, HR, Marketing" after one of these is chosen then the (if successful) message will appear: "Added ______ to the database"

// if Add Employee is chosen then the following will appear: "What is the employee's first name?" then "What is the employee's last name?" then "What is the employee's role?" and they will choose from a list of the following: 
// "Inside Sales Rep" "Web Developer" "Lead Engineer" "Help Desk Manager" "Human Resources Manager" "Junior Digital Marketing Manager"
// and then "Who is the employee's manager?" and a list of names will appear to choose from. Once that is completed then this will apper: "Added ______ to the database"



// if update employee role is chosen THEN it needs to UPDATE/PUT new data in an existing field. The following prompt will appear: "Which employee's role do you want to update?" then a list of the employees will appear to choose from. Then "Which role do you want to assing to the selected employee?" and a list of roles will appear and finally this message appears: "Updated employee's role successfully"



startPrompt();