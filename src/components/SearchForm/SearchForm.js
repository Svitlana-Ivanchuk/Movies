import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormStyled, ButtonStyled, InputStyled } from './SearchForm.styled';

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
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="text"
        placeholder="input movie"
        value={value}
        onChange={handelChange}
      />
      <ButtonStyled type="submit">Search</ButtonStyled>
    </FormStyled>
  );
};
