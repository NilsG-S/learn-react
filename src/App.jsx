import React from 'react';
import {
  Container,
} from 'semantic-ui-react';

import Header from './components/Header.jsx';

function App() {
  return (
    <div>
      <Container text textAlign='center'>
        <Header />
        This is a test.
      </Container>
    </div>
  );
}

export default App;
