import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

function Context({children}) {
  return (
    <DataContext.Provider value={ss}>
       {children}
    </DataContext.Provider>
  )
}

export default Context