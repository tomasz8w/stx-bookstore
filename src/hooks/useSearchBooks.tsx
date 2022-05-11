import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { TBook } from "models/Book";

type SearchParameters = {
  searchText: string;
  searchLang: string;
};

const useSearchBooks = () => {
  const [searchParameters, setSearchParameters] = useState<
    SearchParameters | undefined
  >();
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [foundBooks, setFoundBooks] = useState<TBook[] | undefined>();

  const fetchMoreBooks = useCallback(() => {
    if (index + 15 < maxIndex) {
      setIndex((prev) => prev + 15);
    }
  }, [index, maxIndex]);

  const changeSearchParameters = (newSearchParameters: SearchParameters) => {
    setIndex(0);
    setSearchParameters(newSearchParameters);
  };

  useEffect(() => {
    if (!searchParameters) return;
    setLoading(true);

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchParameters.searchText}&langRestrict=${searchParameters.searchLang}&startIndex=${index}&maxResults=15&printType=books`
      )
      .then(({ data }) => {
        setLoading(false);
        setMaxIndex(data.totalItems);
        console.log(data.totalItems);
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

  return { changeSearchParameters, foundBooks, fetchMoreBooks, loading };
};

export default useSearchBooks;
