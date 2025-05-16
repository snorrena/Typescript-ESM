This project demonstrates the use of ESModules in typescript and how to generate a web page using Typescript.
The program typescript files can be run with Node and Deno for testing before compilation to javascript for run a browser environment.
Typescript is used for development and type safety and may be tested locally or run as backend code. Javascript is used for run of the program on the frontend browser environment.
Once the program run in typescript is confirmed correct, the program is then converted to javascript for run in a browser 

Tools:

lunarvin - vim text editor

Programming languages:

Javascript
Typescript
HTML - only a basic skeleton is used to load our compiled Javascript to build our web page and run the program

Workflow:

Edit the typescript files in the src folder
Run the typescript program directly with node or deno // use the run script defined in the package.json file: ex. npm run denoRun
or
Compile the Typescript to Javascript run in a browser. // npm run server

The src folder contains .ts typscript files that use esmodule import statements to connect the modular source code.
This typescript program can be run as is with the current versions of Node and Deno as these runtime understand relative import statements using the .ts extention.
In order to run the same program in a browser, the typescript files must me converted to javascript and the imports statement ammended to include a .js file extention.
The tsc command in conjuction with the tsconfig.json file, converts the typescript to javascript and saves the files in the dist folder.
Run of the tsc command converts the typescript files in the src folder to javascript and copies them into the dist folder
It is then necessary to run the included ./importPathUpdate.js file to search and replace .ts extentions with .js in all import statements in the exported javascript files in the dist directory
in order to run the file in a browser.

Folder structure:

dist - this folder contains all javascript files that will be used in the browser
src - this is the source folder containing all typescript files
importPathUpdate - when run with node will correct the extention on import statments in the javascript files in the dist folder
index.html - this file will load the javascript file and execute showing the program output in the developer tools console or web page.
package.json - this file includes various scripts to compile and run the program.
tsconfig - this files include parameter for compilation of the typescript code in src over to javascript code in the dist file

package.json scripts

build - runs the command tsc with a flag --nocheck and or || exit 0 //  exit 0; is included to continue the program run on error. Typescript in the source folder is compiled to Javascript in the dist folder.
importPathUpdate - execute code in a Javascript function to search and replace import statements extentions from .ts to .js for all files in the dist directory
rmdir - removes and deletes files in the dist directory. Used to cleanup before a new build
nodeRun - runs the typescript files with Node
denoRun - runs the typescript files with Deno
server - executes all scripts to remove the dist directory, compile the src Typescript to Javascript in the dist directory, replace .ts extentions on import statements in 
all Javascript files in the dist directory then launch live-server to load and run the Javascript program in a web browser. 

Live-server by default will load the index.html file in the program root. The index.html file is configure to load and run the index.js file in the dist folder. The index.js file uses
esm modular imports to include all other required javascript data files and execute the files to display the program output in the browser developer console and/or on a web page.


