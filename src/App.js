import React from 'react';
import './App.css'; 

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};


const App = () => {
  const handleButtonClick = () => {
    console.log('Кнопка нажата!');
  };

  return (
    <div>
      <h1>Повторно используемый компонент</h1>
      <Button text="Нажмите здесь" onClick={handleButtonClick} />
    </div>
  );
};

export default App;

