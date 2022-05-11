import axios from "axios";
import { useEffect, useState } from "react";
import { TBook } from "../models/Book";

type SearchParameters = {
  searchText: string;
  searchLang: string;
};

const useSearchBooks = () => {
  const [searchParameters, setSearchParameters] = useState<
    SearchParameters | undefined
  >();
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [foundBooks, setFoundBooks] = useState<TBook[] | undefined>();

  const fetchMoreBooks = () => {
    if (index + 15 < maxIndex) {
      setIndex((prev) => prev + 15);
    }
  };

  useEffect(() => {
    setIndex(0);
  }, [searchParameters]);

  useEffect(() => {
    if (!searchParameters) return;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchParameters.searchText}&langRestrict=${searchParameters.searchLang}&startIndex=${index}&maxResults=15&printType=books`
      )
      .then((res) => {
        const response = res.data;
        setMaxIndex(response.totalItems);
        const books =
          response.totalItems > 0
            ? response.items.map((item: any) => ({
                id: item.id,
                title: item.volumeInfo.title,
                description: item.volumeInfo.description,
                publishedDate: item.volumeInfo.publishedDate,
                imageLink: item.volumeInfo.imageLinks?.thumbnail,
              }))
            : undefined;

        setFoundBooks((foundBooksPrev) => {
          if (index > 0 && foundBooksPrev) {
            const newFoundBooks = [...foundBooksPrev, ...books];
            // filter out duplicates when searching by most relevant:
            return newFoundBooks.filter(
              (v, i, arr) => arr.findIndex((t) => t.id === v.id) === i
            );
          }
          return books;
        });
      });
  }, [searchParameters, index]);

  return { setSearchParameters, foundBooks, fetchMoreBooks };
};

export default useSearchBooks;
