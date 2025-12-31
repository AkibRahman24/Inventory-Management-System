import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";



const Root=()=>{
    const {user} = useAuth();
    const navigate = useNavigate();

   useEffect(() => {
  if (user) {
    // Check if the user is authenticated and redirect accordingly
    if (user.role === "admin") {
      navigate("admindashboard");
    } else if (user.role === "seller") {
      navigate("sellerdashboard");
    } else {
      navigate("login");
    }
  }
  else{
     navigate("login");
  }
}, [user, navigate]);

return null;
}

export default Root;