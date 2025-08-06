import React from 'react';

function CardLuz({ dados, comodo, dispatch }) {
  const toggleLigado = () => {
    dispatch({
      type: 'ATUALIZAR_DISPOSITIVO',
      payload: {
        comodo,
        dispositivoId: dados.id,
        novoEstado: { ligado: !dados.estado.ligado },
      }
    });
  };

  const mudarCor = (e) => {
    dispatch({
      type: 'ATUALIZAR_DISPOSITIVO',
      payload: {
        comodo,
        dispositivoId: dados.id,
        novoEstado: { cor: e.target.value },
      }
    });
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', borderRadius: '8px', width: '220px' }}>
      <h3>{dados.nome}</h3>
      <p>Estado: {dados.estado.ligado ? 'Ligado' : 'Desligado'}</p>
      <button onClick={toggleLigado}>
        {dados.estado.ligado ? 'Desligar' : 'Ligar'}
      </button>
      <p>Intensidade: {dados.estado.intensidade}%</p>

      {/* Input de cor só aparece se a luz estiver ligada */}
      {dados.estado.ligado && (
        <p>
          Cor: {' '}
          <input
            type="color"
            value={dados.estado.cor || '#ffffff'}
            onChange={mudarCor}
            style={{ verticalAlign: 'middle' }}
          />
          <span style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            backgroundColor: dados.estado.cor,
            marginLeft: '8px',
            border: '1px solid #ccc',
            verticalAlign: 'middle'
          }} />
        </p>
      )}

      {!dados.estado.ligado && dados.estado.cor && (
        <p>Cor atual: <span style={{ backgroundColor: dados.estado.cor, padding: '0 10px', border: '1px solid #ccc' }}> </span></p>
      )}

      <p>Consumo: {dados.estado.consumoWatts} W</p>
    </div>
  );
}

export default CardLuz;