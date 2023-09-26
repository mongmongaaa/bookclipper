import React, { useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { BookDataContext } from '../Context';

function BookDetail() {
  const { books, MUserData, setAdd, add } = useContext(BookDataContext);
  const location = useLocation();
  let bn = location.state.bookData;
  
  // book 객체가 존재하는지 확인하고 유효한 데이터를 가지고 있으면 사용
  const book = books.find(item => item.isbn === bn) || {};

  const { userId } = useParams();

  const myBookAddList = async (event) => {
    event.preventDefault();
  
    // 책 정보
    const addedBook = {
      writeData: null,
      addBook: [{
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        isbn: book.isbn,
        cover: book.cover,
      }],
    };

    
    try {
      // 서버로 데이터 전송
      console.log('--------------sdfsdf----------------')
      const response = await axios.post(`http://localhost:3030/user-data/${userId}`, addedBook);
      setAdd(!add)
      if (response.data.message === '책을 서재에 추가했습니다.') {
        // 저장 성공
        console.log('책을 마이 서재에 추가했습니다.');
      } else {
        console.error('책을 추가하는데 실패했습니다.');
      }
    } catch (error) {
      console.error('책을 추가하는 중 오류 발생:', error);
    }
  };

  

  return (
    <div id="BookDetail_back">
      <div className="bookDetail_pading">
      <div> - </div>
      <div className="bookDetail_info">
        <img src={`${book.cover}`}/>
        <b>{book.title}</b>
        <p>{book.author}</p>
        <button onClick={myBookAddList}>서재에 담기</button>
      </div>
      <ul className="bookDetail_Detail">
        <li>
          <div>출판사</div>
          <div>{book.publisher}</div>
        </li>
        <li>
          <div>출간일</div>
          <div>{book.pubDate}</div>
        </li>
        <li>
          <div>ISNB</div>
          <div>{book.isbn}</div>
        </li>
        <li>
          <div>책 소개</div>
          <div>{book.description}</div>
        </li>
      </ul>
      <footer>
        <nav>
          <ul>
            <li>
              <Link to={`/MyBookList/${userId}`}>
                <img src="/bookclipper/book_icon.png" />
                <p>내 서재</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="/bookclipper/home_icon.png" />
                <p>홈</p>
              </Link>
            </li>
            <li>
              <Link to="/History">
                <img src="/bookclipper/clip_icon.png" />
                <p>클립</p>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
      </div>
    </div>
  );
}

export default BookDetail;
