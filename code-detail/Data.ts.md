# Data.ts

The Data.ts file is used to simulate a database back end server api that returns
an array list of user data objects.

The import statement at the top of this file brings in a custom data type named
'UserName' defined in the Types.ts file.

Types are key to catching coding errors in Typescript if an incorrect value is
passed to or returned from a function or set to a variable.

The named import { UserName } is indicated by the surrounding curly brackets.

A default import does not included the curly brackets.
ex. import myfunction from "./path/file.ts"

The keyword 'type' is also used in the import statement to define a type import.

The custom type 'UserName' is used to hold data
fields for an individual user including first name, last
name and id number.

The function expression named 'getData' initializes seed data of five 'UserName'
objects.
The 'UserName' type is used in the function signature to define the shape of the
function argument and return values.

Typescript variables may be declared including a type definition if the type is
not inferred in the declaration.

The function expression 'getData' includes a local variable named 'userNameArray'
declared and initialized as an array of type 'UserName'.

The 'UserName' objects are pushed onto the array and the array is returned from
the function.
