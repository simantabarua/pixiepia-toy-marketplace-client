import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-4 md:p-10 bg-pink-100 font-medium flex flex-col md:flex-row justify-center md:justify-around text-center items-center gap-5 leading-9">
      <div>
        <h2 className="font-bold text-sm sm:text-2xl cursor-pointer ">
          Pixie<span className="text-pink-600 ">pia </span>
        </h2>
        <div>
          <span className="footer-title">Find Us</span>
          <div className="grid grid-flow-col gap-4 my-2 place-content-center">
            <a href="https://twitter.com">
              <FaTwitter className="w-6 h-6 fill-current text-pink-400 hover:text-primary-500 hover:-translate-y-2 duration-500" />
            </a>
            <a href="https://facebook.com">
              <FaFacebook className="w-6 h-6 fill-current text-pink-400 hover:text-primary-500 hover:-translate-y-2 duration-500" />
            </a>
            <a href="https://instagram.com">
              <FaInstagram className="w-6 h-6 fill-current text-pink-400 hover:text-primary-500 hover:-translate-y-2 duration-500" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">.
        <span>About us</span>
        <span>Contact</span>
        <span>Address</span>
        <span>Store</span>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-full md:w-80">
          <div className="md:relative">
            <input
              type="text"
              placeholder="username@email.com"
              className="input input-bordered w-full md:pr-16"
            />
            <button className="btn bg-pink-600 w-full outline-none border-0 md:w-24 md:absolute top-0 right-0 md:rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
