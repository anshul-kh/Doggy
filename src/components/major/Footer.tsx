import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";


// list of links (for better development)
const footerLinks = {
  1: {
    name: "Home",
    comp: <HomeIcon />,
    path: "/"
  },
  2: {
    name: "About US",
    comp: <PersonIcon />,
    path: "/about"
  },
  3: {
    name: "Work",
    comp: <WorkIcon/>,
    path: "/services"
  },
  4: {
    name: "Contact",
    comp: <PhoneIcon/>,
    path: "/contact"
  }
};

const Footer = () => {
  return (
    <div className="w-full md:h-48 h-36 bg-persian_orange-300 flex justify-around items-center flex-col">
      <div className="flex justify-center items-center gap-5 md:gap-16">
        {Object.values(footerLinks).map((link, index) => (
          <Link className="flex justify-center items-center gap-1 md:gap-2 md:text-lg" to={link.path}  key={index}>
            {link.comp}
            <h1>{link.name}</h1>
          </Link>
        ))}
      </div>

      <div className="md:text-xl">@Copyright To DOGGY</div>
    </div>
  );
};

export default Footer;
