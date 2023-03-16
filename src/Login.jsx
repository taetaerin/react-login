import React, { useEffect, useState } from 'react'
import "./login.css"

export default function Login() {
  const User = {
    email: "test@gmail.com",
    password: "Aabc123!123133"
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(regex.test(email)) {
      setEmailValid(true);
    }else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(regex.test(password)) {
      setPasswordValid(true);
    }else {
      setPasswordValid(false);
    }
  }

  const onClickConfirmButton = () => {
    if (email == User.email && password==User.password) {
      alert('로그인 성공')
    } else {
      alert('등록되지 않은 회원')
    }
  }

  useEffect(() => {
    if(emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid])
  
 
  return (
    <div className='page'>
      <div className='titleWrap'>
        이메일과 비밀번호를 <br />
        입력해주세요
      </div>

      <div className='contentWrap'>

        <div className='inputTitle'>이메일 주소</div>
        <div className='inputWrap'>
            <input 
              type='text'
              className='input' 
              placeholder='example.gmail.com' 
              value={email}
              onChange={handleEmail}
            />
        </div>
        <div className='errorMessageWrap' >
          {
            !emailValid && email.length > 0  && (
              <div>올바른 이메일을 입력해주세요.</div>
            )
          }
        </div>


        <div style={{marginTop: "26px"}} className='inputTitle'>비밀번호</div>
        <div className='inputWrap'>
            <input 
              type='password'
              className='input'
              placeholder='영문, 숫자, 특수문자 포함 8자 이상'
              value={password}
              onChange={handlePassword}
            />
        </div>
        <div className='errorMessageWrap'>
          {
            !passwordValid && password.length > 0 && (
              <div>대문자,영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )
          }
        </div>
      </div>

      <div>
        <button onClick={onClickConfirmButton} disabled={notAllow} className='bottomButton'>확인</button>
      </div>
    </div>

  )
}


    