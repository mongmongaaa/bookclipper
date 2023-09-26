import React, { useState } from 'react';
import KakaoLogin from "react-kakao-login";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const KakaoLoginButton = () => {
  const apiKey = process.env.REACT_APP_KAKAO_API_KEY;
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [nicknameExists, setNicknameExists] = useState(false); 

  

  const responseKakao = async (response) => {
    if (response?.profile) {
      const userUserId = response.profile.id;
      setUserId(userUserId);
      try {
        const userResponse = await axios.get(`http://localhost:3030/user-data/${userUserId}`);   
        console.log(userResponse , '---------------------------')

        if (userResponse.status === 200) {
          // 사용자가 존재하는 경우
          const user = userResponse.data;
          setNicknameExists(!user.nickname); // 닉네임이 있는지 확인

          
          if (user.nickname) {
            // 닉네임이 있는 경우 홈 컴포넌트로 이동
            navigate(`/home/${userUserId}`);
          } else {
            // 닉네임이 없는 경우 닉네임 입력 컴포넌트로 이동
            navigate(`/Nickname/${userUserId}`);
          }
        }
      } catch (error) {
        console.error('사용자 아이디 확인 중 오류:', error);
      }
    
    }
  };

  return (
    <KakaoLogin
      token={apiKey}
      onSuccess={responseKakao}
      onFail={console.error}
      onLogout={console.info}
    />
  );
}

export default KakaoLoginButton;