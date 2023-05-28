import React from 'react';
import './assets/style/App.css';
import Stars from './components/Stars';

const App: React.FC = () => {
  return (
    <div className="App">
      <img className="img" src="/src/assets/img/book.png" alt="book" />
      <div className="info">
        <p className="title">Повелители DOOM</p>
        <Stars count={2} />
      </div>
    </div>
  );
};

export default App;
