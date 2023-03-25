import { useNavigate } from "react-router-dom";

const MyHeader = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          Memorize Board
        </span>
      </div>
      <div className="info">
        <span>Write</span>
        <span
          onClick={() => {
            navigate("/Login");
          }}
        >
          Login
        </span>
      </div>
    </header>
  );
};

export default MyHeader;
