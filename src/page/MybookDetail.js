import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BookDataContext } from "../Context";

function MybookDetail() {
  const { userId, isbn } = useParams();
  const { MUserData, setMUserData } = useContext(BookDataContext);

  if (!MUserData.length) {
    return <></>;
  }
  const ClickBook = MUserData[0].addBook.find((book) => book.isbn === isbn);
  console.log(ClickBook);



  
  return (
    <div>
      <div>
        <div> - </div>
        <div>
          <img src={ClickBook.cover} alt={`${ClickBook.title} 표지`} />
          <p>{ClickBook.title}</p>
          <p>{ClickBook.author}</p>
          <button>상세보기</button>
        </div>
        <ul>
          <li>나는 이 책을</li>
          <li>읽는 중</li>
          <li>완독</li>
        </ul>
        <div>
          <p>
            나의 독서 클립(<span>0</span>)
          </p>
          <Link to={`/Write/${userId}/${isbn}`}>클립하기</Link>
        </div>
        <ul>
          <li>
            <div>
              <ul>
                <li><img src="" alt="이미지" /></li>
                <li><img src="" alt="이미지" /></li>
              </ul>
              <div>page<span>153</span><span>2013.02.58</span></div>
              <b>그래서 어쩌구 그래서 그랬어</b>
              <p>이 문장을 읽고 난 뒤 어저구 저쩌구 했다</p>
              <p>공유된 클립</p>
            </div>
          </li>
        </ul>
      </div>
      <footer>
        <nav>
          <ul>
            <li>
              <Link to="/MyBookList">
                <img src="#" alt="이미지" />
                <p>내 서재</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="#" alt="이미지" />
                <p>홈</p>
              </Link>
            </li>
            <li>
              <Link to="/History">
                <img src="" alt="이미지" />
                <p>클립</p>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default MybookDetail;