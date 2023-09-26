import { Link,useParams } from "react-router-dom";
import AladinBookSearch from "../comp/AladinBookSearch";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BookDataContext } from "../Context";

function Home() {

  const {setUserId, MUserData,setMUserData,bestBookData } = useContext(BookDataContext);
  const { userId } = useParams();
  useEffect(()=>{
    setUserId(userId);
  }, []);
  
  console.log(MUserData);

    if(!bestBookData || bestBookData.length <= 0) return <></>;
  return (
    <div id="home_pading">
      <header>
        <div>
          <img src="/bookclipper/logo_small.png" />
        </div>
      </header>
      <div className="contents" id="home_contents_all">
        <div className="user">
          안녕하세요 <span>{MUserData?.nickname}</span>님!
          <br/>
          지금까지 <span>45</span>권의 책을 읽었고, <span>45</span>개의
          <span>클립<img src="/bookclipper/cilp_small.png"/></span>을 남겼습니다!
        </div>
        <AladinBookSearch/>
        <div>
          <p>유저들의 독서 클립을 살펴보세요!</p>
          <div>
            <ul className="home_ul">
              <li className="home_li">
                <ul className="homeclip_icon">
                  <li>
                    <img src="/bookclipper/emotion_happy.png" className="emo_i"/>
                  </li>
                  <li>
                    <img src="/bookclipper/clip.png"  className="clip_i"/>
                  </li>
                </ul>
                <div className="home_clip_book">
                  <img src="/bookclipper/ex_book.jpg" />
                  <p>원피스</p>
                </div>
                <div className="users_clip">
                  <p>
                    <span>0007</span>님의 클립
                  </p>
                  <b>아무도....없었다....</b>
                  <p>진심 갓 명작이다.</p>
                  <div>
                    page<span>153</span>
                    <span>2023.02.58</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="home_booklist-backcolor">
          <div>베스트 셀러 책을 추천해드려요!</div>
          <ul className="home_bestbooklist">
            {
            bestBookData.map((BestList) => (
            <Link key={BestList.isbn} to={`/BookDetail/best/${userId}/${BestList.isbn}`} state={{bookData: BestList.isbn}} >
                <li>
                  <img src={`${BestList.cover}`}/>
                  <p>{BestList.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
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
  );
}

export default Home;
