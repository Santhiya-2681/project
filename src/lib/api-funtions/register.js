import connect from "../Connect";
// getusers
export const regGet=async()=>await connect.get("/register");
// userdetails
export const regPost=async(user)=>await connect.post("/register",user);