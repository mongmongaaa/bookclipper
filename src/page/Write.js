import React from "react";

function Write() {
  return (
    <div>
      <header>
        <div>
          <img src="#" />
        </div>
      </header>
    <form>
      <div>X</div>
      <input type="sumit"/>
      <textarea placeholder="감명 깊게 읽었던 구절의 내용을 적어주세요!"/>
      <textarea placeholder="생각을 자유롭게 적어주세요!"/>
      <div>page<input type="text" placeholder="페이지를 기록해주세요"/></div>
      <div>
        페이지를 읽고 난 뒤 감정을 스티커로 남겨보세요!
        <ul>
          <li><img src=""/></li>
          <li><img src=""/></li>
          <li><img src=""/></li>
          <li><img src=""/></li>
          <li><img src=""/></li>
        </ul>
      </div>
      <input type="checkbox" value="클립을 공유하시겠습니까?"/>
    </form>
    </div>
  );
}

export default Write;
