import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Nickname() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    // userId 파라미터가 변경될 때마다 실행
    console.log('사용자 아이디:', userId);
  }, [userId]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
   };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const usersInfo = {
      nickname: inputValue,
    };
  
    if (inputValue.length <= 12) {
      try {
        // axios를 사용하여 서버로 데이터 전송
        console.log(usersInfo)
        const response = await axios.post(`http://localhost:3030/oauth/${userId}`, usersInfo);
  
        if (response.status === 200) {
          // 저장 성공
          console.log('사용자 정보 저장 성공');
          navigate(`/home/${userId}`);
        } else {
          console.error('사용자 정보 저장 실패');
        }
      } catch (error) {
        console.error('에러:', error);
      }
    } else {
      alert('최대 12글자 이내로 입력해주세요.');
    }
  };

  return (
    <div id='nic_pading'>
      <header>
        <div>
          <img src="/bookclipper/logo_small.png"/>
        </div>
      </header>
      <div id='nicDiv'>
        <p>환영합니다!</p>
        <p className='nicDivP2'>북 클리퍼에서 사용하실 <span>닉네임</span>을 설정해주세요!</p>
      </div>
      <form onSubmit={handleSubmit} id='nicinput'>
        <input
          type="text"
          placeholder="최대 한글, 영어, 숫자 12글자 이내 입력 가능"
          ref={inputRef}
          maxLength={12}
          value={inputValue}
          onInput={handleChange}
         className='nicinput1'/>
        <input type="submit" value="다음" className='nicinput2'/>
      </form>
    </div>
  );
}

export default Nickname;