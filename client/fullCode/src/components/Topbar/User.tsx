import IconLike from 'imgs/icons/like';
import IconNotif from 'imgs/icons/notif';

export default function  () {
  return (
    <div className="User">
      <IconLike/>
      <IconNotif/>

     <div className="container">
        <div className="User_avatar">
          <img src="" alt="" />
        </div>
        <span className="User_nickname">
          Ryan Azhari
        </span>
     </div>
    </div>
  )
}