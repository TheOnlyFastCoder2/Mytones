import Menu from "./Menu"
import Searcher from "./Searcher"
import User from "./User"

export default function () {
  return (
    <div className="Topbar">
      <Menu/>
      <Searcher/>
      <User/>
    </div>
  )
}
