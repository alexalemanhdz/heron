import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/fonts.css';

import Wrapper from '../../components/Wrapper';
import InputAutocomplete from '../../components/InputAutocomplete';
import Button from '../../components/Button';
import Map from '../../components/Map';

import { updateQuery, initSuggestionsFetch, updateSuggestions } from './actions';

const App = () => {
  const dispatch = useDispatch();

  const [startStreet] = useState(null);
  const query = useSelector((state) => state.query);

  // const updateStartStreet = (value) => {
  //   setStartStreet(value);
  // };

  const searchStreet = () => {
    dispatch(updateQuery(startStreet));
  };

  return (
    <Wrapper
      flex={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
      primary
    >
      <InputAutocomplete
        m2
        mt5
        placeholder="Calle origen"
        suggestions={['Calle Falsa']}
        onChange={(q) => {
          dispatch(updateQuery(q));
          dispatch(initSuggestionsFetch());
        }}
        onReady={() => {}}
        error={false}
      />
      <Button
        m1
        p3
        mb5
        message="Calcular ruta"
        onClick={searchStreet}
        disabled={!(startStreet)}
      />
      <Map query={query} suggestionsCallback={(arr) => dispatch(updateSuggestions(arr))} />
    </Wrapper>
  );
};

export default App;
