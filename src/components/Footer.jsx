import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <footer className="footer text-white p-10 font-inter">
        <aside>
          <h2 className="text-3xl bg-gradient-to-r from-[#007991] to-[#78ffd6] bg-clip-text text-transparent font-semibold pb-2 font-pt">
            FundingTrail
          </h2>
          <p className="lg:max-w-sm font-poppins text-[#9ea9b2] text-[14px]">
            Interns work under the guidance of experienced professionals,
            allowing them to apply theoretical knowledge in real-world
            scenarios.
          </p>
          <div className="flex space-x-4 b">
            <span>
              <FaFacebook
                size={26}
                className="bg-gray-100 hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] text-black rounded-md font-md hover:text-white  px-[2px]"
              />
            </span>
            <span>
              <FaInstagram
                size={26}
                className="bg-gray-100 hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] text-black rounded-md font-md hover:text-white  px-1"
              />
            </span>
            <span>
              <FaTwitter
                size={26}
                className="bg-gray-100 hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] text-black rounded-md font-md hover:text-white  px-1"
              />
            </span>
            <span>
              <FaLinkedinIn
                size={26}
                className="bg-gray-100 hover:bg-gradient-to-r from-[#007991] to-[#78ffd6] text-black rounded-md font-md hover:text-white font-md px-1 "
              />
            </span>
          </div>
        </aside>
        <nav>
          <h6 className="text-xl font-semibold pb-2 text-white">Resources</h6>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">
            Support center
          </a>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">
            Community
          </a>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">
            Join Discord
          </a>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">
            Dashboard
          </a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold pb-2 text-white">Quick Links</h6>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">
            Affiliate Program
          </a>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">About us</a>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">Late</a>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">
            Press kit
          </a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold pb-2 text-white">Services</h6>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">Email</a>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">
            Live Chat
          </a>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">
            Help Center
          </a>
          <a className="link link-hover text-[#9ea9b2] text-[14px]">
            Join Discord
          </a>
        </nav>
      </footer>
      <hr className="border-none h-[1px] bg-gray-500" />
      <div className="lg:flex text-center justify-between pt-4 px-2">
        <p>© 2024, All Rights Reserved.</p>
        <ul className="lg:flex space-x-4 py-2 lg:p-0">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
