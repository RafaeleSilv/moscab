import React from 'react';
import ButtonOption from './ButtonOption';
import './components/Form.css';

const Form: React.FC = () => {
  return (
    <div className="form-container">
      <header className="form-header">
        <button className="back-button">←</button>
        <h1>Formulário Inicial</h1>
      </header>
      <div className="form-content">
        <h2>Qual é o seu modelo de negócio:</h2>
        <ButtonOption label="Comércio" icon="store" />
        <ButtonOption label="Consultor" icon="chat" />
        <ButtonOption label="Indústria" icon="settings" />
        <ButtonOption label="Produtor" icon="box" />
        <ButtonOption label="Saas" icon="cloud" />
        <ButtonOption label="Serviço" icon="service" />
      </div>
    </div>
  );
};

export default Form;
