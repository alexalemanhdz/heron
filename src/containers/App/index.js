import React from 'react';

import '../../styles/fonts.css';

import Wrapper from '../../components/Wrapper';
import InputAutocomplete from '../../components/InputAutocomplete';

const App = () => (
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
      suggestions={['Calle Falsa', 'Calle No Real']}
      onReady={(value) => console.log(value)}
      error={false}
    />
  </Wrapper>
);

export default App;
