import Navbar from "./Navbar";
import { auth } from "../../../auth";

type Props = {};

const Header = async(props: Props) => {
  const session = await auth();
  return (
    <header className="px-4 py-3 fixed w-full top-0 z-30 bg-white">
      <Navbar user={session?.user?.name}/>
    </header>
  );
};

export default Header;
    