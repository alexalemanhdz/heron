import React from 'react';

import Wrapper from '../../components/Wrapper';

const App = () => (
  <Wrapper
    flex={{
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}
    primary
  >
    <p>Hola mundo</p>
  </Wrapper>
);

export default App;
