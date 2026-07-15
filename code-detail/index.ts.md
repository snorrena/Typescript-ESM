# index.ts

The 'index.ts' file is the entry point of this application. It may be run
directly with Node, Deno or Bun, but must be compiled into JavaScript in order to
run in a browser.

There are two import statements at the top of the file used to bring in functional
code.

The first statement imports the function 'outputUserData' and renames it as
'displayDataInDevConsole'. This function will loop through the program data and
console log user properties to a terminal. The purpose of this code is to demonstrate
that our program has access to seed user data in a simulated back end database.

The second import statement brings in the function
'generateHTML'. This function will generate all html elements used by our web
app to display and manage user data in a web browser.

The 'if else' control flow in this file checks for a window object.
If the object exists, the execution environment is inside a web browser and
the 'generateHTML' function is executed to build our web application.
Otherwise, the runtime environment is in a terminal and the
'displayDataInDevConsole' function is executed to console log user data
to the terminal window.
