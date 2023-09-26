import { Link, useParams } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { BookDataContext } from "../Context";

function MyBookList() {
  const { userId } = useParams();
  const { MUserData, setMUserData } = useContext(BookDataContext);
  
  console.log(MUserData);
  

  if (!MUserData?.length) {
    return <></>;
  }

  return (
    <div>
      <header>
        <div>
          <img src="#" />
        </div>
      </header>
      <div>
        <div>
          <ul>
            <li>내 서재</li>
            <li>MY 클립</li>
          </ul>
        </div>
        <div className="library">
          <form>
            <select name="category">
              <option>전체</option>
              <option>읽는 중</option>
              <option>완독</option>
            </select>
          </form>
          <ul>
        {MUserData[0].addBook.map((book,k) => (
              <Link key={k} to={`/MybookDetail/${userId}/${book.isbn}`}>
              <li>
                <img src={`${book.cover}`}/>
                <p>{book.title}</p>
              </li>
              </Link>
            ))} 
          </ul>
        </div>
        <div className="cilp">
          <div>
            <ul>
              <li>
                <ul>
                  <li>
                    <lmg src="" />
                  </li>
                  <li>
                    <lmg src="" />
                  </li>
                </ul>
                <div>
                  <img src="" />
                  <p>책 제목</p>
                </div>
                <div>
                  <b>그래서 어쩌구 그래서 그랬어</b>
                  <p>이 문장을 읽고 난 뒤 어저구 저쩌구 했다</p>
                  <div>
                    page<span>153</span>
                    <span>2013.02.58</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <nav>
          <ul>
            <li>
              <Link to="/MyBookList">
                <img src="#" />
                <p>내 서재</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src="#" />
                <p>홈</p>
              </Link>
            </li>
            <li>
              <Link to="/History">
                <img src="" />
                <p>클립</p>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default MyBookList;
