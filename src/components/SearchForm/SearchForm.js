import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [value, setValue] = useState('');
  const [, setSearchParams] = useSearchParams();
  //const query = searchParams.get('query') ?? '';

  const handelChange = evt => {
    const valueForm = evt.currentTarget.value;
    setValue(valueForm);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    updateQueryString(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="input movie"
        value={value}
        onChange={handelChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
