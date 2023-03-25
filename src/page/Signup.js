import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="signup">
      <section className="classification">
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="login_btn"
        >
          로그인
        </button>
        <button className="register_btn">회원가입</button>
      </section>
      <section className="id_info">
        <label>아이디</label>
        <input type="text" placeholder="아이디" name="username" />
      </section>
      <section className="nickname_info">
        <label>닉네임</label>
        <input type="text" placeholder="닉네임" name="nickname" />
      </section>
      <section className="password_info">
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호" name="" />
      </section>
      <section className="password_confirm">
        <label>비밀번호 확인</label>
        <input type="password" placeholder="비밀번호 확인" />
      </section>
      <section>
        <button className="login_btn2">회원가입</button>
      </section>
    </div>
  );
}

export default Signup;
