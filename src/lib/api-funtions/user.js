import connect from "../Connect";
// getusers
export const getusers=async()=>await connect.get("/login");
// userdetails
export const userdetails=async(user)=>await connect.post("/login",user);
// userlogout
// export const logout=async()=>await connect.delete("/login/1");
export const logout=async(id)=>await connect.delete(`/login/${id}`);