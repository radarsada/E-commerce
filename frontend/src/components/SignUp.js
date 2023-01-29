import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; //helps in redirecting 1.0

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); //helps in navigation 1.1

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      //fetch internally API
      method: "Post", //for saving data in Database
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result)); //we can see in f12-> application->localstorage
    if (result) {
      navigate("/"); //......
    }
  };
  return (
    <div>
      <div className="register">
        <h1>Register</h1>
        <input
          className="inputbox"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
        ></input>
        <input
          className="inputbox"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
        ></input>
        <input
          className="inputbox"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
        ></input>
        <button onClick={collectData} className="signupbutton" type="signup">
          SignUp
        </button>
      </div>
    </div>
  );
};
export default SignUp;
