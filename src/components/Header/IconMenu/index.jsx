import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export const IconMenu = ({openedMenu, toogleMenu}) => {
  return (
    <>
      {!openedMenu ? (
        <RiMenu3Fill
          size={25}
          color="#ffff"
          style={{ cursor: "pointer" }}
          className="slit-in-vertical"
          onClick={toogleMenu}
        />
      ) : (
        <IoMdClose
          size={25}
          color="#ffff"
          style={{ cursor: "pointer" }}
          className="slit-in-vertical"
          onClick={toogleMenu}
        />
      )}
    </>
  );
};
