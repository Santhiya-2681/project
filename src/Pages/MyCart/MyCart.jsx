import React, { useEffect, useState } from 'react'
import connect from '../../lib/Connect'
import NavBar from '../../Components/NavBar/NavBar'
import { getcartItems } from '../../lib/api-funtions/cart'
import Footer from '../Footer/Footer'

const MyCart = () => {
    const [carts, setCarts] = useState([])
    const deleteCart = async (id) => {
        const response = await connect.delete(`mycart/${id}`)

    }
    useEffect(() => {
        getcartItems().then(({ data }) => setCarts(data))
    }, [])
    return (
        <div>
            <NavBar />
            <form onSubmit={(e) => e.preventDefault()} className={`grid h-[auto] justify-center bg-black text-white p-[70px]
     ${carts.length > 3 ? "h-[/auto]" : "h-[100vh]"}`}>
                {carts.length > 0 ? (
                    carts.map((cart) => <li className="flex border p-[20px] mt-[10px] w-[130vh] h-[30vh] "
                        key={cart.id}>
                        <img className="h-[150px]"
                            src={`https://image.tmdb.org/t/p/original${cart.backdrop_path}`} alt="" />
                        <div className="grid items-center pl-[10px]">
                            <h1>movie name : {cart.title}</h1>
                            <h1>overview :{(cart.overview, 150)}</h1>
                            <input type="submit" value={"remove cart"} className="bg-red-600 p-2 h-[50px] w-[150px] rounded-sm"
                                onClick={() => {
                                    deleteCart(cart.id);
                                    getcartItems().then(({ data }) => setCarts(data))
                                }} />
                        </div>
                    </li>)
                ) : (<h1 className="text-xl text-center mt-[50%] font-bold ">Cart is Empty</h1>)}

            </form>
            <Footer />
        </div>
    )
}

export default MyCart