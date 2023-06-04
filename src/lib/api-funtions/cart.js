import connect from "../Connect";

export const deleteCartitem = async(id)=>{
    await connect.delete(`myList/${id}`);
};
//to get all cartItems
export const getcartItems=async()=>await connect.get("mycart");
//add cart
export const addcart=async(cart)=>await connect.post("mycart",cart)
//delete cart
export const deletecart=async(id)=>await connect.delete("mycart",id)