# index.ts

The 'index.ts' file is the entry point of this application. It may be run
directly with Node, Deno or Bun but must be compiled into JavaScript in order to
be run in a browser.

There are two import statements at the top of this file used to bring in functional
code to the 'index.ts' file.

The first statement imports the function 'outputUserData' and renames it as
'displayDataInDevConsole'. This function will loop through the user data and
console log data to a terminal. The purpose of this is to demonstrate that
our program has access to seed user data.

The second import statement brings in the function
'generateHTML'. This function will generate all html elements used by our web
app for display and management of user data in a web browser.

The 'if else' control flow in this file checks for a window object.
If the object exists, the execution environment is inside a web browser and
the 'generateHTML' function is executed to build our web application.
Otherwise, the runtime environment is in a terminal and the
'displayDataInDevConsole' function is executed to console log user data
to the terminal window.
