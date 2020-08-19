import * as React from 'react';
import TestComponent from '@components/TestComponent';
import { Button, TextField } from '@material-ui/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App: React.FC = () => {
  return (
    <div>
      <TestComponent />
      Init
      <TextField />
      <Button>ddd</Button>
      <FontAwesomeIcon icon={faCamera} size="1x" />
    </div>
  );
};

export default App;
