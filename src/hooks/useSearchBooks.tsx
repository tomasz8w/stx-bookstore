import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { TBook } from "models/Book";

type SearchParameters = {
  searchText: string;
  searchLang: string;
};

type ApiModel = {
  totalItems: number;
  items: {
    id: string;
    volumeInfo: {
      title: string;
      description?: string;
      publishedDate?: string;
      imageLinks?: {
        thumbnail: string;
      };
    };
  }[];
};

const useSearchBooks = () => {
  const [searchParameters, setSearchParameters] = useState<
    SearchParameters | undefined
  >();
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [foundBooks, setFoundBooks] = useState<TBook[] | undefined>();

  const endOfResults =
    !loading && (searchParameters || false) && index + 15 >= maxIndex;

  const fetchMoreBooks = useCallback(() => {
    if (!endOfResults) {
      setIndex((prev) => prev + 15);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, maxIndex]);

  const changeSearchParameters = (newSearchParameters: SearchParameters) => {
    setIndex(0);
    setSearchParameters(newSearchParameters);
  };

  useEffect(() => {
    if (!searchParameters) return;
    setLoading(true);
    (async () => {
      axios
        .get<ApiModel>(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchParameters.searchText}&langRestrict=${searchParameters.searchLang}&startIndex=${index}&maxResults=15&printType=books`
        )
        .then(({ data }) => {
          setLoading(false);
          setMaxIndex(data.totalItems);
          const books: TBook[] | undefined =
            data.totalItems > 0
              ? data.items.map((item) => ({
                  id: item.id,
                  title: item.volumeInfo.title,
                  description: item.volumeInfo.description,
                  publishedDate: item.volumeInfo.publishedDate,
                  imageLink: item.volumeInfo.imageLinks?.thumbnail,
                }))
              : undefined;

          setFoundBooks((foundBooksPrev) => {
            if (index > 0 && foundBooksPrev) {
              if (!books) return foundBooksPrev;
              const newFoundBooks = [...foundBooksPrev, ...books];
              // filter out duplicates when searching by most relevant:
              return newFoundBooks.filter(
                (v, i, arr) => arr.findIndex((t) => t.id === v.id) === i
              );
            }
            return books;
          });
        });
    })();
  }, [searchParameters, index]);

  return {
    changeSearchParameters,
    foundBooks,
    fetchMoreBooks,
    loading,
    endOfResults,
  };
};

export default useSearchBooks;
