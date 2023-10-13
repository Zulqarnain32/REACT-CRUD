import React, { createContext, useContext, useReducer } from 'react';

const DataContext = createContext();

const initialState = {
  data: [] 
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return { ...state, data: [...state.data, action.payload] };
    case 'UPDATE_DATA':
      const updatedData = state.data.map((user, index) => {
        if (index == action.payload.id) {
          return { ...user, ...action.payload };
        }
        return user;
      });
      return { ...state, data: updatedData };
    case 'DELETE_DATA':
      const filteredData = state.data.filter((user, index) => index !== action.payload);
      return { ...state, data: filteredData };
    default:
      return state;
  }
}

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  return useContext(DataContext);
};

export { DataProvider, useData };
