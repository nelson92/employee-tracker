-- data to fill the 2 tables in the schema file

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("IT"),
       ("HR")
       ("Marketing")

INSERT INTO role (title, salary, department_id)
VALUES ("Inside Sales Rep", 75,000.50, 1),
       ("Web Developer", 105,000.25, 2),
       ("Lead Engineer", 125,000, 2)
       ("Help Desk Manager", 60,000.10, 3),
       ("Human Resources Manager", 70,000.00, 4),
       ("Junior Digital Marketing Manager", 75,000.75, 5)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
                     ("Bob", "Jones", 11)
                     ("Judy", "Smith", 12, 1)
                     ("Bill", "Johnson", 13)
                     ("Jane", "Wilson", 14)
                     ("Tim", "Garcia", 15, 2)
                     ("Molly", "Green", 16)
                     ("Charles", "Brown", 17, 4)
                     ("Jennifer", "Hill", 18, 1)
                     ("June", "Park", 19, 9, 2)