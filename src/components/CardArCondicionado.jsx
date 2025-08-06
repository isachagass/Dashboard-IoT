import React from 'react';

function CardArCondicionado({ dados, comodo, dispatch }) {
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

  const mudarTemperatura = (e) => {
    const novaTemp = Number(e.target.value);
    dispatch({
      type: 'ATUALIZAR_DISPOSITIVO',
      payload: {
        comodo,
        dispositivoId: dados.id,
        novoEstado: { temperatura: novaTemp },
      }
    });
  };

  const mudarModo = (e) => {
    const novoModo = e.target.value;
    dispatch({
      type: 'ATUALIZAR_DISPOSITIVO',
      payload: {
        comodo,
        dispositivoId: dados.id,
        novoEstado: { modo: novoModo },
      }
    });
  };

  // Opções possíveis para o modo
  const modos = ['refrigerar', 'aquecer', 'ventilar'];

  return (
    <div style={{ border: '1px solid gray', padding: '10px', borderRadius: '8px', width: '240px' }}>
      <h3>{dados.nome}</h3>

      <p>Estado: {dados.estado.ligado ? 'Ligado' : 'Desligado'}</p>
      <button onClick={toggleLigado}>
        {dados.estado.ligado ? 'Desligar' : 'Ligar'}
      </button>

      <p>
        Temperatura: 
        <input
          type="number"
          min="16"
          max="30"
          value={dados.estado.temperatura}
          onChange={mudarTemperatura}
          disabled={!dados.estado.ligado}
          style={{ width: '50px', marginLeft: '10px' }}
        /> °C
      </p>

      <p>
        Modo: 
        <select
          value={dados.estado.modo}
          onChange={mudarModo}
          disabled={!dados.estado.ligado}
          style={{ marginLeft: '10px' }}
        >
          {modos.map((modo) => (
            <option key={modo} value={modo}>
              {modo.charAt(0).toUpperCase() + modo.slice(1)}
            </option>
          ))}
        </select>
      </p>

      <p>Consumo: {dados.estado.consumoWatts} W</p>
    </div>
  );
}

export default CardArCondicionado;