import React, { useContext } from 'react';
import { ResidenciaContext } from '../context/ResidenciaContext';
import CardLuz from '../components/CardLuz';
import CardArCondicionado from '../components/CardArCondicionado';
import CardSmartTV from '../components/CardSmartTV';

function Dashboard() {
  const { state, dispatch } = useContext(ResidenciaContext);

  if (state.carregando) return <p>Carregando...</p>;
  if (state.erro) return <p>Erro: {state.erro}</p>;

  const residencia = state.dados;
  if (!residencia) return <p>Nenhum dado disponível.</p>;

  const renderCard = (dispositivo, comodo) => {
    switch (dispositivo.tipo) {
      case 'luz':
        return <CardLuz key={dispositivo.id} dados={dispositivo} comodo={comodo} dispatch={dispatch} />;
      case 'ar_condicionado':
        return <CardArCondicionado key={dispositivo.id} dados={dispositivo} comodo={comodo} dispatch={dispatch} />;
      case 'smart_tv':
        return <CardSmartTV key={dispositivo.id} dados={dispositivo} comodo={comodo} dispatch={dispatch} />;
      default:
        // return <p key={dispositivo.id}>Tipo desconhecido</p>;
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {Object.entries(residencia).map(([comodoNome, comodoDados]) => (
        <div key={comodoNome}>
          <h2>{comodoDados.nome}</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            {comodoDados.dispositivos.map(dispositivo => renderCard(dispositivo, comodoNome))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;