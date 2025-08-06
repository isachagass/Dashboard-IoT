import React, { createContext, useReducer, useEffect } from 'react';

// Estado inicial
const initialState = {
    dados: null,
    carregando: true,
    erro: null
  };

// Ações possíveis no reducer
const residenciaReducer = (state, action) => {
    switch (action.type) {
      case 'CARREGAR_SUCESSO':
        return { ...state, dados: action.payload, carregando: false };
      case 'CARREGAR_ERRO':
        return { ...state, erro: action.payload, carregando: false };
  
      case 'ATUALIZAR_DISPOSITIVO': {
        const { comodo, dispositivoId, novoEstado } = action.payload;
  
        // Atualiza o dispositivo certo no cômodo certo
        const novosDispositivos = state.dados[comodo].dispositivos.map(disp => {
          if (disp.id === dispositivoId) {
            return {
              ...disp,
              estado: { ...disp.estado, ...novoEstado }
            };
          }
          return disp;
        });
  
        return {
          ...state,
          dados: {
            ...state.dados,
            [comodo]: {
              ...state.dados[comodo],
              dispositivos: novosDispositivos,
            }
          }
        };
      }
  
      default:
        return state;
    }
  };
  

// Criando o contexto
export const ResidenciaContext = createContext();

// Criando o Provider
export const ResidenciaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(residenciaReducer, initialState);

  useEffect(() => {
    fetch('/dadosResidencia.json')
      .then(res => res.json())
      .then(data => {
        console.log('Conteúdo do JSON:', data); // 👈 AQUI está o console correto
        dispatch({ type: 'CARREGAR_SUCESSO', payload: data.residencia });


      })
      .catch(err => {
        dispatch({ type: 'CARREGAR_ERRO', payload: err.message });
      });
  }, []);

  return (
    <ResidenciaContext.Provider value={{ state, dispatch }}>
      {children}
    </ResidenciaContext.Provider>
  );
};