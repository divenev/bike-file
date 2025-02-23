import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { registerUser } from "../services/registerUser";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Register = () => {
  const navigate = useNavigate();
  const { values, changeHandler } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { useLocalStorage, updateUser } = useContext(UserContext);
  const [, setUser] = useLocalStorage();

  const onSubmit = async (e) => {
    try {
      const result = await registerUser(e);
      if (result.hasOwnProperty("token")) {
        setUser(result);
        updateUser(result);
        navigate("/");
      }
    } catch {
      updateUser({});
    }
  };

  return (
    <form className="form" id="login" onSubmit={onSubmit}>
      <input
        type="text"
        name="first_name"
        value={values.first_name}
        onChange={changeHandler}
        placeholder="First name"
      ></input>

      <input
        type="text"
        name="last_name"
        value={values.last_name}
        onChange={changeHandler}
        placeholder="Last name"
      ></input>

      <input
        type="email"
        name="email"
        value={values.email}
        onChange={changeHandler}
        placeholder="Email"
      ></input>

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={changeHandler}
        placeholder="Password"
      ></input>

      <input
        type="password"
        name="re_password"
        value={values.re_password}
        onChange={changeHandler}
        placeholder="Confirm Password"
      ></input>

      <input type="submit" className="button" value="Register"></input>
      <p>
        <span>
          If you already have profile click <Link to="/user/login">here</Link>
        </span>
      </p>
    </form>
  );
};
