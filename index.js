const inquirer = require('inquirer');
const { db } = require('./config/connection')
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
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Deparments', 'Add Department']
        
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
        addDepartment;
        break;
        case 'Finished':
        console.log('goodbye');
        break;
    }
} )
};

function viewAllEmployees () {
    const allEmployees = `SELECT employees.first_name, employees.last_name, employee_role.title, departments.department_name, CONCAT(employees.first_name, ' ' ,employees.last_name) AS Manager FROM employees INNER JOIN employee_role ON employee_role.id = employee.role_id INNER JOIN departments ON department.id = employee_role.department_id LEFT JOIN employees on employee.manager_id = employee.id;`

    db.query(allEmployees, function (err, results) {
        if (err) throw err;
        console.table(results);
        startPrompt();
    })
};

function viewRoles () {
    const allRoles = `SELECT role.id, role.title, department.name AS departments, role.salary FROM roles JOIN departments ON roles.department_id = department.id`

    db.query(allRoles, function (err, results){
        if(err) throw err;
        console.table(results);
        startPrompt();
    })
};

function viewAllDepartments() {
    const allDepartments = db.query(`SELECT * FROM departments`)
        console.table(allDepartments);
        startPrompt();
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