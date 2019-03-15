INSERT INTO employees (first, last, email, phone, salary)
VALUES (${firstName}, ${lastName}, ${emailAddress}, ${phoneNumber}, ${salary})
RETURNING *;