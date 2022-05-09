# Challenge

Mr Czesław from the STX BookStore company asked you for help with writing an application
that will allow him to browse the list of books and help him understand what needs to be
ordered for his bookstores.
Use the publicly available Google API as a source of data:
​​https://developers.google.com/books/docs/v1/using#WorkingVolumes
https://www.googleapis.com/books/v1/volumes?q=Hobbit

# Requirements:

- Implement the application using one of the JavaScript web frameworks (your choice).
- Don’t care too much about styling, some basic styles are enough.
- Make sure there is a text area present, where the user can input the book title when
  searching for a specific item.
- The user should be able to search for the book using the chosen language - Polish or
  English.
- Each element on the displayed list of books should contain:
- a picture of the book cover
- the title of the book
- the year of book’s publication
- the book’s description (it should be shortened to 200 characters if needed,
  “...” should be displayed at the end if it was shortened).

- The number of results on the displayed list should be limited to 15. More records
  should load after the user scrolls to the end of the page (infinite scroll).
- The user should be able to mark which books are already in their library. Each record
  on the list should have a button to add/remove a book from the list. Those added
  should be visually highlighted.

When submitting the task, please provide us with:

- the URL for the deployed application
- a link to the public repository, so that our technical recruiters can look at the code.
