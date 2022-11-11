-- data to fill the 2 tables in the schema file

INSERT INTO departments (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "IT"),
       (4, "HR"),
       (5, "Marketing");

INSERT INTO roles (id, title, salary)
VALUES (1, "Inside Sales Rep", 75000.50),
       (2, "Web Developer", 105000.25),
       (3, "Lead Engineer", 125000),
       (4,"Help Desk Manager", 60000.10),
       (5, "Human Resources Manager", 70000.00),
       (6, "Junior Digital Marketing Manager", 75000.75);

INSERT INTO employees (id, first_name, last_name, manager_id)
VALUES               (1, "Bob", "Jones", 2),
                     (2, "Judy", "Smith", 1),
                     (3, "Bill", "Johnson", 3),
                     (4, "Jane", "Wilson", 4),
                     (5, "Tim", "Garcia", 2),
                     (6, "Molly", "Green", 1),
                     (7, "Charles", "Brown", 4),
                     (8, "Jennifer", "Hill", 1),
                     (9, "June", "Park", 2);