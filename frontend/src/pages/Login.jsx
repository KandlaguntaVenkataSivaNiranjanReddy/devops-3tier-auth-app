import axios from "../api/axios";

export default function Login() {
  const login = async () => {
    const res = await axios.post("/login", {
      email: "test@test.com",
      password: "123456"
    });
    alert(res.data.message);
  };

  return <button onClick={login}>Login</button>;
}
