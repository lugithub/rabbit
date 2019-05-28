import React, { useState, useEffect } from 'react';
import { ajax } from 'rxjs/ajax';
import { delay } from 'rxjs/operators';

function SearchResults({ query }: { query: string }) {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    function fetchResults() {
      const url = getFetchUrl();
      ajax
        .getJSON(url)
        .pipe(delay(1000))
        .subscribe(data => setData({ data }), error => setData({ error }));
    }

    function getFetchUrl() {
      return 'http://myapi/results?query' + query + '&page=' + currentPage;
    }

    fetchResults();
  }, [currentPage, query]); // ✅ Refetch on change

  return <p>{JSON.stringify(data)}</p>;
}

export default SearchResults;
