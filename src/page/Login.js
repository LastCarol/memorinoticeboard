const Login = () => {
  return (
    <div className="login">
      <section className="classification">
        <button className="login_btn">로그인</button>
        <button className="register_btn">회원가입</button>
      </section>
      <section className="id_info">
        <label>아이디</label>
        <input type="text" placeholder="아이디" name="username" />
      </section>
      <section className="password_info">
        <label>비밀번호</label>
        <input type="text" placeholder="비밀번호" name=""
      </section>
    </div>
  );
};

export default Login;
