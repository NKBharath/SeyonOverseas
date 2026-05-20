import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { IoCallOutline, IoLocationOutline, IoLogoFacebook, IoMailOutline } from "react-icons/io5";

function Footer() {
    return ( 
        <div className="bg-[#020617] py-[45px] px-[15px] text-white">
            <h2 className="text-[16.875px] font-bold text-center">Seyon Overseas</h2>
            <p className="text-[rgb(148,163,184)] text-[14px] leading-[18.75px] mt-2 text-center">Your trusted partner in overseas education consultancy.</p>
            <h3 className="text-[12.875px] font-bold mt-4">Quick Links</h3>
            <ul className="text-[rgb(148,163,184)] ">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h3 className="text-[12.875px] font-bold mt-4">Popular Destinations</h3>
            <ul className="text-[rgb(148,163,184)] ">
                <li><a href="#">Canada</a></li>
                <li><a href="#">United States</a></li>
                <li><a href="#">United Kingdom</a></li>
                <li><a href="#">Australia</a></li>
            </ul>
            <h2 className="text-[16.875px] font-bold mt-4  ">Contact Us</h2>
            <div>
                <div className="flex gap-2 items-center mt-2">
                    <IoCallOutline className="text-[rgb(0,100,240)]"/>
                    <p className="text-[rgb(148,163,184)]">+91 8072295598</p>
                </div>
                <div className="flex gap-2 items-center mt-2">
                    <IoMailOutline className="text-[rgb(0,100,240)]"/>
                    <p className="text-[rgb(148,163,184)]">info@seyonoverseas.in</p>
                </div>
                <div className="flex gap-2 items-center mt-2">
                    <IoLocationOutline className="text-[rgb(0,100,240)]"/>
                    <p className="text-[rgb(148,163,184)]">123 Education Street, City,<br /> State, ZIP Code</p>
                </div>
            </div>
            <hr  className="text-[rgb(148,163,184)] mt-3"/>
            <div className="flex gap-3 mt-4 text-2xl text-[rgb(148,163,184)]">
                <FiFacebook />
                <FiInstagram />
                <FiTwitter />
                <FiLinkedin />
            </div>
        </div>
     );
}

export default Footer;