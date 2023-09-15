import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <div>
          <img src="#" />
        </div>
      </header>
      <div className="contents">
        <div className="">
          안녕하세요 <span>0007</span>님!
          <br />
          지금까지 <span>45</span>권의 책을 읽었고, <span>45</span>개의{" "}
          <span>클립</span>을 남겼습니다!
        </div>
        <form>
          <input type="search" name="q"></input>
          <input type="submit" placeholder="도서를 검색하세요." />
        </form>
        <div>
          <p>유저들의 독서 클립을 살펴보세요!</p>
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
        <div>
          <div>
            나의 서재 <span>바로가기</span>
          </div>
          <ul>
            <li>
              <img src="" />
              <p>책 제목</p>
            </li>
          </ul>
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

export default Home;
