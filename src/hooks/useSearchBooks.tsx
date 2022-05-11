import axios from "axios";
import { useEffect, useState } from "react";
import { TBook } from "../components/models/Book";

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

  useEffect(() => {
    if (!searchParameters) return;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${searchParameters.searchText}&langRestrict=${searchParameters.searchLang}&startIndex=${index}&maxResults=15`
      )
      .then((res) => {
        const response = res.data;
        setMaxIndex(response.totalItems);

        setFoundBooks(
          response.totalItems > 0
            ? response.items.map((item: any) => ({
                id: item.id,
                title: item.volumeInfo.title,
                description: item.volumeInfo.description,
                publishedDate: item.volumeInfo.publishedDate,
                imageLink: item.volumeInfo.imageLinks?.thumbnail,
              }))
            : undefined
        );
      });
  }, [searchParameters, index]);

  return { setSearchParameters, foundBooks };
};

export default useSearchBooks;
