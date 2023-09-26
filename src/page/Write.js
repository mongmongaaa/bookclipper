import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import axios from "axios";
import { BookDataContext } from "../Context";

function Write() {
  const { userId, isbn } = useParams();
  
  const { MUserData, setMUserData } = useContext(BookDataContext);
  const navigate = useNavigate();
  const [writeData, setWriteData] = useState({isbn});

  const emotionUrls = {
    happy: "./emotion_happy.png",
    love: "./emotion_love.png",
    normal: "./emotion_normal.png",
    sad: "./emotion_sad.png",
    Annoying: "./emotion_Annoying.png",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWriteData({ ...writeData, [name]: value });
  };

  const handleEmotionClick = (emotion) => {
    // 클릭한 감정에 해당하는 URL을 선택하여 상태에 저장    
    setWriteData({ ...writeData, selectedEmotion: emotionUrls[emotion] });
  };
  console.log(writeData);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !writeData.impression ||
      !writeData.thoughts ||
      !writeData.page ||
      !writeData.selectedEmotion
    ) {
      alert("글을 모두 입력해주세요🤗");
    } else {
      try {
        // 글 정보와 책 정보를 하나의 객체로 합치기
        const combinedData = {
          writeData: writeData,
          addBook:null
        };

        const response = await axios.post(
          `http://localhost:3030/user-data/${userId}`,
          combinedData
        );
        
        const updatedUserData = response.data;
        setMUserData(updatedUserData);
        console.log(updatedUserData);
        // history.goBack()
        //navigate(`/MybookDetail/${userId}/${isbn}`);
      } catch (error) {
        console.error("데이터 전송 중 오류 발생:", error);
      }
      console.log(writeData);
    }
  };

  return (
    <div>
      <header>
        <div>
          <img src="#" />
        </div>
      </header>
      <form onSubmit={handleSubmit}>
        <div>X</div>
        <textarea
          name="impression"
          placeholder="감명 깊게 읽었던 구절의 내용을 적어주세요!"
          value={writeData.impression}
          onChange={handleInputChange}
        />
        <textarea
          name="thoughts"
          placeholder="생각을 자유롭게 적어주세요!"
          value={writeData.thoughts}
          onChange={handleInputChange}
        />
        <div>
          page
          <input
            type="text"
            name="page"
            placeholder="페이지를 기록해주세요"
            value={writeData.page}
            onChange={handleInputChange}
          />
        </div>
        <div>
          페이지를 읽고 난 뒤 감정을 스티커로 남겨보세요!
          <ul>
            <li onClick={() => handleEmotionClick("happy")}>
              <img src="./emotion_happy.png" alt="Happy" />
            </li>
            <li onClick={() => handleEmotionClick("love")}>
              <img src="./emotion_love.png" alt="Love" />
            </li>
            <li onClick={() => handleEmotionClick("nomal")}>
              <img src="./emotion_nomal.png" alt="Nomal" />
            </li>
            <li onClick={() => handleEmotionClick("sad")}>
              <img src="./emotion_sad.png" alt="Sad" />
            </li>
            <li onClick={() => handleEmotionClick("Annoying")}>
              <img src="./emotion_Annoying.png" alt="Annoying" />
            </li>
          </ul>
        </div>
        <label>
          <input
            name="shareClip"
            type="checkbox"
            checked={writeData.shareClip}
            onChange={handleInputChange}
          />
          클립을 공유하시겠습니까?
        </label>
        <input type="submit" value="저장" />
      </form>
    </div>
  );
}

export default Write;