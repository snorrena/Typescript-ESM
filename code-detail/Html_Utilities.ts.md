This file, `Html_Utilities.ts`, serves as a centralized collection of utility functions designed to manage application state (specifically user data) and handle the initialization and manipulation of the HTML Document Object Model (DOM) for displaying that data.

It acts as a utility layer, abstracting away the complexity of local storage interactions, DOM rendering setup, and basic data management logic.

Here is a detailed summary by functional area:

### 💾 State Management & Persistence Utilities

These functions handle reading from and writing to `localStorage`, ensuring the application state (user records and available IDs) persists between sessions.

- **`setUserData(userDataArray: UserName[], availableId: Set<number>): { _userData: UserName[]; _availableId: Set<number> }`**: The primary function for loading state. It retrieves both the full list of user data (`savedUserData`) and the set of available IDs from local storage. If data is found, it loads it; otherwise, it fetches initial default data using `getData()`.
- **`saveNewUserToLocalStorage(user: UserName, userDataArray: UserName[]): void`**: Saves a new user record by appending it to the current user array and synchronizing the entire updated array back to local storage.
- **`removeUserIdFromSavedIdData(id: number): number[]`**: Handles deletion. It removes a specific `id` from the list of available IDs stored in local storage.
- **`setAvailableId(availableId: Set<number>): Set<number>`**: Loads and reconstructs the set of available IDs from local storage.
- **`checkSavedAvailableIdData(): void`**: A debugging/testing utility that retrieves and logs the saved available ID data to the console.

### 🎨 UI / DOM Initialization Utilities

These functions are responsible for setting up the visual structure of the user data display on the webpage.

- **`initUserDataDiv(GLOBAL_HTML_ELEMENTS: GLOBAL_HTML_Elements): void`**: Performs the initial setup of the "User Data" section in the HTML body. It applies necessary CSS styling (using Flexbox) and structures the main container, ensuring all sub-components (ID, Name containers, Remove button) are correctly laid out and styled.
- **`setCursorFocus(): void`**: Improves user experience by programmatically focusing the input field for the first name after a new user is added or processed.

### ⚙️ General Data & Logic Helpers

These functions provide mathematical or data structure utilities needed by the core logic.

- **`sortAvailableIdAscending(availableId: Set<number>): void`**: Takes a `Set` of available IDs and converts it, sorts its elements numerically in ascending order, and updates the original set with the sorted values.
- **`highestIdNumberInUserArray(userDataArray: UserName[]): number`**: Utility to find and return the largest user ID currently present within the dataset.

### Export Structure

All these functions are aggregated into a single object, **`Html_Utils`**, which is exported as the default module export, providing a clean interface for other parts of the application to access all utility methods.
