import axios from "../api/axios";

export default function Signup() {
  const signup = async () => {
    await axios.post("/auth/signup", {
      name: "Test",
      email: "test@test.com",
      password: "123456"
    });
    alert("Signup success");
  };
  return <button onClick={signup}>Signup</button>;
}
