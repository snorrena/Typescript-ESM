# index.ts

There are two import statement used to bring in functional
code to the index.ts file.

The first statement imports the function =='outputUserData'== and renames it as
=='displayDataInDevConsole'==. This function will loop through the user data and
console log data to a terminal.

The second import statement brings in the function
=='generateHTML'==. This function will generate all html elements used by our web
app for display and management of user data in a web browser.

The =='if else'== control flow in this file checks for a window object.
If the object exists, the execution environment is inside a web browser and
the =='generateHTML'== function is executed to build our web application.
Otherwise, the runtime environment is in a terminal and the
=='displayDataInDevConsole'== function is executed to console log user data
to the terminal window.
