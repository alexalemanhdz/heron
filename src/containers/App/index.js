import React, { useState } from 'react';

import '../../styles/fonts.css';

import Wrapper from '../../components/Wrapper';
import InputAutocomplete from '../../components/InputAutocomplete';
import Button from '../../components/Button';
import Map from '../../components/Map';

import streets from '../../data/streets';

const App = () => {
  const [startStreet, setStartStreet] = useState(null);
  const [endStreet, setEndStreet] = useState(null);

  const updateStartStreet = (value) => {
    setStartStreet(value);
  };

  const updateEndStreet = (value) => {
    setEndStreet(value);
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
        suggestions={streets}
        onReady={updateStartStreet}
        error={false}
      />
      <InputAutocomplete
        m2
        mb3
        placeholder="Calle destino"
        suggestions={streets}
        onReady={updateEndStreet}
        error={false}
      />
      <Button
        m1
        p3
        mb5
        message="Calcular ruta"
        onClick={() => console.log(startStreet, endStreet)}
        disabled={!(startStreet && endStreet)}
      />
      <Map />
    </Wrapper>
  );
};
export default App;
