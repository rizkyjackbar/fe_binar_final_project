import { user_icon } from "../assets";
import { Button, Navbar } from "../component";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      This is Home
      <Button />
      <img src={user_icon} alt="icon_user" />
    </div>
  );
};

export default Home;
