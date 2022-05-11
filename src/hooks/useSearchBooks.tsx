import axios from "axios";
import { useCallback, useEffect, useState } from "react";
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

  const fetchMoreBooks = useCallback(() => {
    if (index + 15 < maxIndex) {
      setIndex((prev) => prev + 15);
    }
  }, [index]);

  const changeSearchParameters = (newSearchParameters: SearchParameters) => {
    setIndex(0);
    setSearchParameters(newSearchParameters);
  };

  useEffect(() => {
    if (!searchParameters) return;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchParameters.searchText}&langRestrict=${searchParameters.searchLang}&startIndex=${index}&maxResults=15&printType=books`
      )
      .then(({ data }) => {
        setMaxIndex(data.totalItems);
        const books =
          data.totalItems > 0
            ? data.items.map((item: any) => ({
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

  return { changeSearchParameters, foundBooks, fetchMoreBooks };
};

export default useSearchBooks;
