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

Node modules

pnpm is use instead of npm
    npm install -g pnpm

node modules installed with pnpm

typescript
    pnpm install -g typescript
-installation of typescript will include the tsc command which is used from type checking and/or compilation of typescript code to javascript. The tsconfig.json file is used to configure tsc. We are only using tsc for type checking in this program.

live-server
    pnpm install -g live-server

esbuild
    pnpm install -g esbuild
-esbuild is used to compile typescript code into javascript. See the configuration options used in the esbuild script in package.json.

javascript-obfuscation
    pnpm install -g javascript-obfuscation
-see the configuration used for obfuscation in the obfuscation script in the package.json file. Javascript files in the dist folder are obfuscated and placed in the obfuscated folder.

Workflow:

Edit the typescript files in the src folder

The src folder contains .ts typscript files that use esmodule import statements to connect the modular source code.

This typescript program can be run as is with the current versions of Node and Deno as these runtime understand relative import statements using the .ts extention.

The compiled javascript code in the dist or obfuscated folder may also be run with Node or Deno.

Run the typescript program directly with node or deno // use the run script defined in the package.json file.
    pnpm run denoRun or pnpm run nodeRun
note: the index.js file directs the program path to execute code suitable for the terminal or console environment, the code related to build and execution in a web browser is by-passed.
or
Compile the Typescript to Javascript run in a browser.
    pnpm run server
or
obfuscate the javascript files and run from obfuscated folder.
    pnpm run obfuscate, pnpm run runObfuscated
note: the obfuscated javascript may also be run locally with Deno or Node.

In order to run the same program in a browser, the typescript files must me converted to javascript and the imports statement ammended to include a .js file extention.
the tsc command is used to type check the typescript code before compilation to javascript.
If the tsc command executes without error, esbuild is used to convert the typescript to javascript. The compiled javascript files are saved in the dist folder.
It is then necessary to run the included ./importPathUpdate.js file to search and replace .ts extentions with .js in all import statements in the exported javascript files in the dist directory
in order to run the file in a browser.

Folder structure:

dist - this folder contains all javascript files that will be used in the browser
obfuscated - this folder contains javscript files obfuscated and an index.html use to load in a browser.
src - this is the source folder containing all typescript files
importPathUpdate - when run with node will correct the extention on import statments in the javascript files in the dist folder
index.html - this file will load the javascript file and execute showing the program output in the developer tools console or web page.
package.json - this file includes various scripts to compile and run the program.
tsconfig - this files include parameter for compilation of the typescript code in src over to javascript code in the dist file

package.json scripts

test - auto generated test script
obfuscate - runs javascript-obfuscation on files in dist folder and outputs to obfuscate folder
esbuild - esbuild is run to compile the source code. Typescript in the src folder is compiled to Javascript in the dist folder.
typecheck - runs tsc to type check the typescript code in the src folder. Compile cmd are deactivated in tsconfig.json file.
importPathUpdate - execute code in a Javascript function to search and replace import statements extentions from .ts to .js for all files in the dist directory
nodeRun - runs the typescript files with Node
denoRun - runs the typescript files with Deno
rmdir - removes and deletes files in the dist directory. Used to cleanup before a new build
serverRun - live-server loads index.html in the root dir by default.
runObfuscated - changes dir to obfuscate and runs live-server. The index.html file in this dir loads the obfuscated js file and executes in the browser.
server - executes all scripts to remove the dist directory, compile the src Typescript to Javascript in the dist directory, replace .ts extentions on import statements in 
all Javascript files in the dist directory then launch live-server to load and run the Javascript program in a web browser. 
rmdir - executes js code to clean out the dist dir when the typescript code is re-compiled into javascript.

Live-server by default will load the index.html file in the program root. The index.html file is configure to load and run the index.js file in the dist folder. The index.js file uses
esm modular imports to include all other required javascript data files and execute the files to display the program output in the browser developer console and/or on a web page.


