import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div>
      <header>
        <div>
          <img src="#" />
        </div>
      </header>
      <form>
        <input type="search" name="q"></input>
        <input type="submit" placeholder="도서를 검색하세요." />
      </form>
      <ul>
        <li>
          <div>
            <img src=""/>
          </div>
          <div>
            <p>아몬드</p>
            <p><span>저자저자</span>·<span>비룡문학</span>·<span>2013.25.35</span></p>
          </div>
        </li>
      </ul>
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

export default Search;
