import create from "zustand";
import { persist } from "zustand/middleware";

import { TBook } from "models/Book";

type BookStore = {
  books: TBook[];
  isBookInStore: (id: string) => boolean;
  addBook: (book: TBook) => void;
  deleteBook: (id: string) => void;
};

const useBookStore = create<BookStore>(
  persist(
    (set, get) => ({
      books: [],
      isBookInStore: (id) => {
        if (get().books.find((book) => book.id === id)) return true;
        return false;
      },
      addBook: (book) => {
        if (get().isBookInStore(book.id)) return;
        set((state) => ({ books: [...state.books, book] }));
      },
      deleteBook: (id) =>
        set((state) => ({
          books: state.books.filter((book) => book.id !== id),
        })),
    }),
    {
      name: "book-store",
    }
  )
);

export default useBookStore;
