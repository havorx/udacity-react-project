# MyReads: A Book Lending App

This project was created with create-react-app, using the latest version of react and react-router-dom.

## To run the app locally:

- You can use `npm` (`yarn` is more preferred)
- First, install the project dependencies with `yarn install`
- Start the app in the development mode with `yarn start` and [http://localhost:3000](http://localhost:3000) will be
  opened automatically

## How the project is implemented:

- After analyzing the requirements, it can be seen that a reusable component for the books displaying across the two
  main pages will be implemented as the smallest child component. It will be called **Book**.
- In the **MyReads** page, the books are grouped by three shelves type, so **BookShelves** is created to hold three
  shelves, containing the list of corresponding books that map to render the **Book** component. The fetched _books_
  from the **getAll** API is processed in a functions to be grouped by the shelf type.
- The **Search Page** component is created for the searching result page, which holds list of **Book** component
  rendered with the books fetched from the **search API**. The shelf type of the books in the search result will be
  displayed by mapping with the corresponding books in the main pages.
- Routing is added at the **App.js** file, using **React Router**. The parent route is the `/`, which is the **MyReads**
  page, containing the search page with `/search` route.
- Data fetching for all books is called at the top component **App.js**, and from there it is passed down and processed
  for further usages. Searching API is called at the **SearchPage** component so it can be passed down to many **Book**
  components.
