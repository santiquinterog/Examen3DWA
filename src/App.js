import React from 'react';
import './styles.scss';
import Menu from './components/Menu';
import Main from './components/Main';
import Zindex from './components/Zindex';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Main/>
      {/*<Zindex/>*/}
    </div>
  );
}

export default App;
