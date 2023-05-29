import React from 'react';
import imgBook from './assets/img/book.png';
import './assets/style/App.css';
import Stars from './components/Stars';

const App: React.FC = () => {
  return (
    <div className="App">
      <img className="img" src={imgBook} alt="book" />
      <div className="info">
        <p className="title">Повелители DOOM</p>
        <Stars count={2} />
      </div>
    </div>
  );
};

export default App;
