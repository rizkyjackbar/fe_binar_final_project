import { user_icon } from "../assets"
import { Button } from "../component"

const Home = () => {
  return (
    <div>
        This is Home
        <Button/>
        <img src={user_icon} alt="icon_user" />
    </div>
  )
}

export default Home