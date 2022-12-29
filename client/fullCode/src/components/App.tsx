import Nav from './Nav';
import Topbar from './Topbar';
import Main from './Main';

import { useAppSelector, useAppDispatch } from 'store/hooks';
import * as User from 'store/user/user.slice';

export default function () {
  const userState = useAppSelector(User.getState);
  const dispatch = useAppDispatch();


//   <button onClick={() => dispatch(User.signIn("name"))}>
//   {userState.name.length > 0 ? userState.name : "sdfsdfsdfs" }
// </button>
  return (
    <>
      <Nav />
      <Main/>
      <Topbar/>
    </>
  )
}