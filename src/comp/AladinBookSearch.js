import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { BookDataContext } from '../Context';

const AladinBookSearch = () => {
  const { setBooks } = useContext(BookDataContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    axios
      .get(`http://localhost:3030/search/book?Query=${query}&QueryType=Title`)
      .then((response) => {
        const documents = response.data.item;
        setBooks(documents);

        if (documents.length > 0) {
          // 검색 결과가 있을 때만 페이지 이동
          navigate('../search');
        }
      });
  };

  const inputRef = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const query = inputRef.current.value.trim();
        if (query !== '') {
          setInputValue(query);
          handleSearch(query);
        }
      }}
     id='search'>
      <input type="text" placeholder="도서를 검색하세요." ref={inputRef} className='search_input'/>
      <input type="submit" value="" className='search_sub' />
    </form>
  );
};

export default AladinBookSearch;