import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/fonts.css';

import Wrapper from '../../components/Wrapper';
import InputAutocomplete from '../../components/InputAutocomplete';
import Button from '../../components/Button';
import Geocoder from '../../components/Geocoder';
import Map from '../../components/Map';

import {
  updateStartQuery,
  initStartSuggestionsFetch,
  updateStartSuggestions,
  updateEndQuery,
  initEndSuggestionsFetch,
  updateEndSuggestions,
} from './actions';

const App = () => {
  const dispatch = useDispatch();

  const [startStreet] = useState(null);
  const {
    startQuery,
    startSuggestions,
    endQuery,
    endSuggestions,
  } = useSelector((state) => state, (a, b) => JSON.stringify(a) === JSON.stringify(b));

  // const updateStartStreet = (value) => {
  //   setStartStreet(value);
  // };

  const searchStreet = () => {
    dispatch(updateStartQuery(startStreet));
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
        suggestions={startSuggestions}
        onChange={(q) => {
          dispatch(updateStartQuery(q));
          dispatch(initStartSuggestionsFetch());
        }}
        value={startQuery}
        onReady={(v) => { console.log(v); }}
        error={false}
      />
      <InputAutocomplete
        m2
        mt5
        placeholder="Calle destino"
        suggestions={endSuggestions}
        onChange={(q) => {
          dispatch(updateEndQuery(q));
          dispatch(initEndSuggestionsFetch());
        }}
        value={endQuery}
        onReady={(v) => { console.log(v); }}
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
      <Geocoder query={startQuery} suggestionsCallback={(arr) => dispatch(updateStartSuggestions(arr))} />
      <Geocoder query={endQuery} suggestionsCallback={(arr) => dispatch(updateEndSuggestions(arr))} />
      <Map />
    </Wrapper>
  );
};

export default App;
