import React from 'react';

function CardSmartTV({ dados, comodo, dispatch }) {
  const toggleLigado = () => {
    dispatch({
      type: 'ATUALIZAR_DISPOSITIVO',
      payload: {
        comodo,
        dispositivoId: dados.id,
        novoEstado: { ligado: !dados.estado.ligado },
      },
    });
  };

  const alterarVolume = (e) => {
    const novoVolume = Number(e.target.value);
    dispatch({
      type: 'ATUALIZAR_DISPOSITIVO',
      payload: {
        comodo,
        dispositivoId: dados.id,
        novoEstado: { volume: novoVolume },
      },
    });
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', borderRadius: '8px', width: '220px' }}>
      <h3>{dados.nome}</h3>
      <p>Estado: {dados.estado.ligado ? 'Ligado' : 'Desligado'}</p>
      <button onClick={toggleLigado}>
        {dados.estado.ligado ? 'Desligar' : 'Ligar'}
      </button>

      <p>
        Volume: {dados.estado.volume}
        <input
          type="range"
          min="0"
          max="100"
          value={dados.estado.volume}
          onChange={alterarVolume}
          disabled={!dados.estado.ligado}
          style={{ width: '100%' }}
        />
      </p>

      <p>Canal/App: {dados.estado.canal_app}</p>
      <p>Consumo: {dados.estado.consumoWatts} W</p>
    </div>
  );
}

export default CardSmartTV;