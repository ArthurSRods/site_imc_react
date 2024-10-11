import React, { useState } from 'react';

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  // Função para calcular o IMC
  const getImc = (peso, altura) => {
    const imc = peso / (altura ** 2);
    return imc.toFixed(2);
  };

  // Função para determinar o nível do IMC
  const getNivelImc = (imc) => {
    const nivel = [
      'Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    const pesoNum = Number(peso);
    const alturaNum = Number(altura);

    if (!pesoNum) {
      setResultado('Peso inválido');
      return;
    }

    if (pesoNum>400) {
      setResultado('Peso inválido');
      return;
    }

    if (!alturaNum) {
      setResultado('Altura inválida');
      return;
    }

    if (alturaNum>4) {
      setResultado('Altura inválida');
      return;
    }

    const imc = getImc(pesoNum, alturaNum);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg);
  };

  return (
    <div className='container'>
      <h2>Calculadora de IMC</h2>
      <form id="formulario" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="peso">Peso (kg): </label>
          <input
            id="peso"
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </div>
        <div>
          <label htmlFor="altura">Altura (m): </label>
          <input
            id="altura"
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 1.75"
            step="0.01"
          />
        </div>
        <button className='botão-enviar' type="submit">Calcular IMC</button>
      </form>
      <div id="resultado">
        {resultado && (
          <p className={resultado.includes('inválido') || resultado.includes('inválida') ? 'bad' : 'paragrafo-resultado'}>
            {resultado}
          </p>
        )}
      </div>
    </div>
  );
};

export default CalculadoraIMC;