import React from 'react';
import Button from './components/Button/Button';

const App: React.FC = () => {
  
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="app">
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default App;
