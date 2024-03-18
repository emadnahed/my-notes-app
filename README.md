# React Markdown Notes App

This is a simple notes app built with React that allows you to create, edit, and delete markdown notes. The app uses the `react-mde` library to provide a rich text editor for the notes.

## Getting Started

To get started, clone this repository and install the dependencies:

```
git clone https://github.com/emadnahed/my-notes-app
cd react-markdown-notes-app
npm install
```

Then, start the development server:

```
npm start
```

The app should now be available at `http://localhost:3000`.

## Features

* Create, edit, and delete notes
* Rich text editing with markdown syntax
* Persist notes in local storage

## Code Structure

The app consists of the following components:

* `App`: The main component that manages the state of the app, including the list of notes and the current note.
* `Editor`: The component that displays the rich text editor for the current note.
* `Sidebar`: The component that displays the list of notes and allows the user to create a new note or delete an existing one.

## State Management

The app uses the `useState` and `useEffect` hooks from React to manage the state of the app. Specifically:

* `useState` is used to manage the list of notes and the current note.
* `useEffect` is used to persist the list of notes in local storage whenever it changes.

Note: The `nanoid` library is used to generate unique IDs for the notes.

## Conclusion

This app provides a simple and easy-to-use interface for creating and editing markdown notes in the browser. It can be further extended to add more features, such as tagging or searching notes.
