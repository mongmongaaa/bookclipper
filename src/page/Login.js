import React from 'react'
import KakaoLoginButton from '../comp/KakaoLoginButton'


function Login() {

  return (
    <div id='Login_div1'>
      <div className='Login_div'>
        <ul className='Login_ul'>
          <li><img src='/bookclipper/logo_big.png'></img></li>
          <li><KakaoLoginButton/></li>
        </ul>
      </div>
    </div>
  )
}

export default Login