## 🕵🏻 Search UI 🔍

A user interface for a search. Use JSON data source as endpoint for getting the search results
Every search command may use the same JSON as response.

### How this is built?

Used JSON data source as endpoint (backend). All the data is stored and handled locally using Redux (state management library) store.

### Acceptance criteria

- Use the data set for all search results https://files-imwbhvksg.now.sh/
- Search results are shown in some form of a dropdown.
- Each result in the dropdown is a link to a specific url and contains an image and title.
- Search results are the same for every query that’s entered.
- Search results are shown only after 2 or more characters

### How to install this?

- clone the app
- cd into your project
- Install dependencies using `npm install`
- start development server using `npm start`
