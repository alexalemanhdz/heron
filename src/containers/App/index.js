import React, { useState } from 'react';

import '../../styles/fonts.css';

import Wrapper from '../../components/Wrapper';
import InputAutocomplete from '../../components/InputAutocomplete';
import Button from '../../components/Button';
import Map from '../../components/Map';

const App = () => {
  const [startStreet, setStartStreet] = useState(null);

  const updateStartStreet = (value) => {
    setStartStreet(value);
  };

  const searchStreet = () => {
    console.log(startStreet);
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
        onReady={updateStartStreet}
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
      <Map />
    </Wrapper>
  );
};

export default App;
