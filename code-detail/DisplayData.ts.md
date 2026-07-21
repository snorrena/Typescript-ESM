The file `DisplayData.ts` contains a single exported function, `outputUserData`, which demonstrates three different programming methods for iterating over and displaying an array of user data in TypeScript/JavaScript.

The code relies on two imported sources of user data from `./Data.ts`: a default export (`getData`) and a named constant array (`userDataArray`).

### Summary of Functionality

The `outputUserData` function performs the following actions, categorized by the looping method used:

**1. For...of loop:**

- It uses the modern `for...of` construct to iterate directly over every element in the `userDataArray`.
- For each user object, it accesses and prints the `id`, `firstName`, and `lastName` properties using template literals.

**2. Array `.forEach()` method (foreach loop):**

- It uses the built-in `forEach()` method on `userDataArray`.
- An arrow function is passed to `forEach` to process each user object, printing all three required fields in a single formatted string per iteration.

**3. Traditional Index-based `for` loop:**

- This section first calls `getData()` and assigns the resulting array to `userNameArray`.
- It uses a classic counter-controlled `for` loop (`for (let i = 0; ...)`).
- Inside this loop, it accesses user data using index notation (`userNameArray[i].id`). It also includes additional logic to print a separator line (`" - "`) between users but not after the last one.

**In essence, the file serves as an educational example demonstrating best practices and syntactical differences for array traversal in TypeScript.**
