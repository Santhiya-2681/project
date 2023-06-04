import { useNavigate } from 'react-router-dom'
import Netfliximg from "../../Assets/Images/Netflix-user.png"
import './Profilepage.css'
const Profilepage = () => {
  const navigator = useNavigate()
  const handleClick = () => {
    navigator("/")
    localStorage.removeItem("users")
  }
  const userDetails=JSON.parse(localStorage.getItem("users"))
  return (
    <div className=" profile-p-container bg-black text-white">
      <div className='p1 flex '><img className='profile-img w-[35px] h-[35px]' src={Netfliximg} alt="" />
        <h6 >{userDetails?.email}</h6>
      </div>
      <h2 className='p-a'>Manage Profiles</h2><br />
      <h2 className='p-a'>Transfor Profile</h2><br />
      <h2 className='p-a'>Account</h2><br />
      <h2 className='p-a'>Help Center</h2><br />
      <div className='p3'>
        <button onClick={() => handleClick()}>Sign out of Netflix</button>
      </div>
    </div>
  )
}

export default Profilepage