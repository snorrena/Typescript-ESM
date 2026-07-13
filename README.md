# Program Notes

This project demonstrates the use of custom types and ESModules in Typescript to
generate an application including both front end and back end components.

Typescript code is used for development and type safety and may be run directly
on the back end with Node, Deno or Bun.

Typescript code must be compiled into JavaScript if the target runtime
environment is a web browser.

## Tools

lazyvim - Integrated Development environment based on Neovim

## Programming languages

JavaScript
Typescript
HTML - only a basic skeleton is used to load our compiled JavaScript to build
our web page and run the program
Nodejs

## Node modules

pnpm is use instead of npm
npm install -g pnpm

### node modules installed with pnpm

#### Typescript

pnpm install -g typescript

-installation of typescript will include the 'tsc' command which is used for type
checking and/or compilation of typescript code to JavaScript. The tsconfig.json
file is used to configure tsc. We are only using 'tsc' for type checking in this
program. We will use 'esbuild' to complile Typescript to JavaScript instead.

#### live-server

pnpm install -g live-server

-live-server will launch the default system web browser and load the index.html
page in the root of the program directory. This web page includes a
skeleton html structure with a script tag to defer load our compiled index.js
file from the dist folder in the program directory. The tag also includes
a module flag that allows the index.js file to use ESModules to import
our web application code.

#### esbuild

pnpm install -g esbuild

-esbuild is used to compile Typescript code into JavaScript. See the configuration
options used in the esbuild script in package.json file.

#### javascript-obfuscation

pnpm install -g javascript-obfuscation

-see the configuration used for obfuscation in the obfuscation script in the package.json
file. JavaScript files in the 'dist' folder are obfuscated and placed in the 'obfuscated'
folder. You might wish to use the obfuscate code in production.

## Workflow

Edit the Typescript files in the 'src' folder

The 'src' folder contains '.ts' Typescript files that use ESModule
import/export statements to connect the modular source code.

This typescript program can be run as is with the current versions of Node,
Deno or Bun to demonstrate the back end function.

JavaScript may also be run on a back end using Node, Deno or Bun.

The program entry file is the index.ts. Execution of this file
from the terminal with Node, Deno or Bun will console log the seed user data hard
coded in the Data.ts file. The successful execution of this code demonstrates
that our web app will have access to the seed user data.

Run the following commands in your terminal at the program root.

deno ./src/index.ts
node ./src/index.ts
bun ./src/index.ts

Or use the Node scripts in the package.json file.

pnpm run denoRun
pnpm run nodeRun

## run the web app

The script named 'server' in the package.json file includes
all steps used to compiled our Typescript code into JavaScript and launch
our web app in a browser with live-server.

pnpm run server

## note

Run the 'server' script first. This will compile Typescript files in the
'src' folder to JavaScript in the 'dist' folder. The 'obfuscate' script will then
obfuscate the JavaScript files in the 'dist' folder and place in the
'obfuscated' folder. The obfuscated files might be preferred for use in production
to provide some protection for your code.

pnpm run obfuscate

## Folder structure

==cypress== - cypress is a automation tool used to test web applications.

==dist== - this folder contains all JavaScript files that will be used in the browser

==obfuscated== - this folder contains JavaScript files obfuscated and an index.html
use to load in a browser.

==src== - this is the source folder containing all typescript files

==cypress.config.js== - cypress automation testing configuration

==eslint.config.js== - eslint configuration

==importPathUpdate== - a script that will correct the extension on import
statements in the JavaScript files in the dist folder.

==index.html== - this html file will load the JavaScript file and execute
showing the program output in a web page.

==jsconfig.json== - JavaScript compiler options

==package.json== - this file includes various scripts to compile and run the program.

==pnpm-lock.yml== - pnpm generated file

==removeDistFolder.js== - script used to clean out the 'dist' folder for
fresh compilation.

==tsconfig.json== - this files includes configuration options for compilation of
the typescript code in 'src' folder over to JavaScript code in the 'dist' folder.

## node package.json helper scripts

==cy:open== - runs cypress automated testing

==obfuscate== - runs javascript-obfuscation on files in 'dist' folder and
outputs to 'obfuscate' folder.

==esbuild== - esbuild is run to compile the source code Typescript in the 'src'
folder to JavaScript in the 'dist' folder.

==typecheck== - runs 'tsc' to type check the typescript code in the 'src' folder.
The compile command is deactivated in tsconfig.json file because
we are using the esbuild compiler instead.

==importPathUpdate== - executes JavaScript script used to search and replace
the extentions on import statements from '.ts' to '.js' for all files in the
'dist' directory.

==nodeRun== - runs the typescript files with Node.

==denoRun== - runs the typescript files with Deno.

==serverRun== - live-server loads index.html in the root directory by default.

==runObfuscated== - copies and obfuscates the JavaScript files in the 'dist' folder
over to the 'obfuscated' folder, moves execution to 'obfuscate' directory and runs
live-server opening the 'index.html' with the default web browser.
The 'index.html' file includes a script tag to load the obfuscated JavaScript
file to launch our web application.

==server== - first runs type checking on the Typescript codebase, then executes
a function to remove the 'dist' directory, then compiles the 'src' Typescript over
to JavaScript in the 'dist' directory, then replaces '.ts' extensions on all import
statements in the JavaScript files in the 'dist' directory, then launches
live-server to load and run the JavaScript web app in the default web browser.

==rmdir== - runs a script to remove and delete files in the dist directory. Used
to cleanup before a new compilation.
