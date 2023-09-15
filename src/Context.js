import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

function Context({children}) {
  return (
   <DataContext.Provider >
       {children}
    </DataContext.Provider> 
  )
}

export default Context