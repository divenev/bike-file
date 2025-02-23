import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { loginUser } from "../services/loginUser";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Login = () => {
  const navigate = useNavigate();
  const { values, changeHandler } = useForm({
    email: "",
    password: "",
  });

  const { useLocalStorage, updateUser } = useContext(UserContext);
  const [, setUser] = useLocalStorage();

  const onSubmit = async (e) => {
    try {
      const result = await loginUser(e);
      if (result.hasOwnProperty("token")) {
        setUser(result);
        updateUser(result);
        navigate("/");
        return result;
      }
    } catch {
      updateUser({});
    }
  };

  return (
    <form className="form" id="login" onSubmit={onSubmit}>
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

      <input type="submit" className="button" value="Login"></input>
      <p>
        <span>
          If you don't have profile click <Link to="/user/register">here</Link>
        </span>
      </p>
    </form>
  );
};
