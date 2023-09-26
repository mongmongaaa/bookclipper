import { Link,useParams } from "react-router-dom";
import AladinBookSearch from "../comp/AladinBookSearch";
import React, { useContext } from "react";
import { BookDataContext } from "../Context";

function Search() {
  const { books } = useContext(BookDataContext);
  const { userId } = useParams();

  return (
    <div id="search_pading">
      <header>
        <div>
        <img src="/bookclipper/logo_small.png"/>
        </div>
      </header>
      <AladinBookSearch/>
      <ul id="search_ul">
        {books.map((item) => (
          <Link key={item.isbn} to={`/BookDetail/search/${userId}/${item.isbn}`} state={{bookData: item.isbn}}>
          <li>
            <div>
              <img src={`${item.cover}`}/>
            </div>
            <div className="search_text" >
              <b>{item.title}</b>
              <p>
                <span>{item.author}</span>·<span>{item.publisher}</span>·
                <span>{item.pubDate}</span>
              </p>
            </div>
          </li>
          </Link>
        ))}
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
  );
}

export default Search;
