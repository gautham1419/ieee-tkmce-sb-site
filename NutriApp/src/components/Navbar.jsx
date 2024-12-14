import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/ACM-logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav  className="position-fixed bottom-0 w-full flex items-center justify-between py-6 bg-gray-800 text-white">
      <div  className="md:flex items-center">
        <div className="my-0">
        <a href="#">
          <img className="mx-0.2 w-19 h-12 rounded-lg" src={logo} alt="logo" />
        </a>
        </div>

        <div id="contact" className="ml-20 my-1">
          <div className="mt-2 flex items-center gap-8 md:text-5xl">
            <a href="https://www.facebook.com/AssociationForComputingMachinery/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/groups/36836/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/theofficialacm/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/theofficialacm" target="_blank" rel="noopener noreferrer">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        <div id="contact" className="md:ml-40 py-2 flex items-center gap-8">
          <div id="contact" >
            <div  className="md:text-lg py-1">Contact Us:</div>
            <a href="mailto:acm@tkmce.ac.in" className="hover:underline text-sm">
              acm@tkmce.ac.in
            </a>
          </div>

          <Link
          to="vision" 
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline md:text-lg"
        >
          Mission
        </Link>
        <Link
          to="vision" 
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline md:text-lg"
        >
          Vision
        </Link>
          <Link
          to="about" 
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline md:text-lg"
        >
          About Us
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
