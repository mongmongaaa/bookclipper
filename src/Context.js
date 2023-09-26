import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BookDataContext = createContext({
  books: [],
  setBooks: () => {},
});

const initialBooks = [];

function Context({ children }) {
  const [books, setBooks] = useState(initialBooks);
  const [bestBookData, setbestBookData] = useState([]);
  const [ MUserData, setMUserData ] = useState();
  const [myLibrary, setMyLibrary] = useState(); 
  const [ userId2, setUserId ] = useState();
  const [add,setAdd] = useState(false);

  useEffect(() => {  
    if(userId2){
      
      axios
      .get(`http://localhost:3030/user-data/${userId2}`)
      .then((result) => {
        setMUserData(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }},[add,userId2]);

    
  useEffect(() => {
    axios
      .get("http://localhost:3030/list/book")
      .then((result) => {
        setbestBookData(result.data.item);
        setBooks(result.data.item);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <BookDataContext.Provider value={{setAdd, add, setUserId,bestBookData,books, setBooks, MUserData, setMUserData,myLibrary, setMyLibrary}}>
      {children}
    </BookDataContext.Provider>
  );
}

export default Context;