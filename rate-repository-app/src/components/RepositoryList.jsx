import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import useRepositories from '../hooks/useRepositories';
import { RepositoryListContainer } from './RepositoryListContainer';

const RepositoryList = () => {
  const [sort, setSort] = useState('latest');
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword] = useDebounce(keyword, 500);

  const getSortOptions = () => {
    switch (sort) {
      case 'highest':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      case 'lowest':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
      default:
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
    }
  };

  const variables = {
    ...getSortOptions(),
    searchKeyword: debouncedKeyword,
  };

  const { repositories } = useRepositories(variables);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sort={sort}
      setSort={setSort}
      keyword={keyword}
      setKeyword={setKeyword}
    />
  );
};

export default RepositoryList;
