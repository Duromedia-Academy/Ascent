// images
import { Link } from "react-router-dom";
import { images } from "../constants";

const Footer = () => {
  return (
    <footer className=" bg-primary-color text-white   py-14 lg:pt-20 ">
      <div className=" border-b border-white ">
        <div className=" max-w-3xl lg:max-w-8xl mx-auto px-6 ">
          <div className="lg:grid lg:grid-cols-2 gap-14 ">
            
            <div className="pb-10">
              <h1 className="pl-1 text-3xl  md:text-5xl">teach:able</h1>
              <p className="max-w-xl text-xl pt-6">
                Join the more than 100,000 creators who use Teachable to share
                their knowledge. Easily create an online course or coaching
                business with our powerful yet simple all-in-one platform.
              </p>
            </div>

            <div className="  grid grid-cols-2 sm:grid-cols-3 ">
              <ul className="py-3 text-mag leading-9">
                <h4 className="py-3 font-bold">Explore</h4>
                <li>
                  <Link href="/f">Features</Link>
                </li>
                <li>
                  <Link href="/f">Pricing</Link>
                </li>
                <li>
                  <Link href="/f">Examples</Link>
                </li>
                <li>
                  <Link href="/f">Newsletter</Link>
                </li>
                <li>
                  <Link href="/f">teachable:hq</Link>
                </li>
                <li>
                  <Link href="/f">Podcast</Link>
                </li>
              </ul>

              <ul className="py-3  md:pl-10 text-mag leading-9">
                <h4 className="py-3 font-bold">Company</h4>
                <li>
                  <Link href="/f">About</Link>
                </li>
                <li>
                  <Link href="/f">Career</Link>
                </li>
                <li>
                  <Link href="/f">Blog</Link>
                </li>
                <li>
                  <Link href="/f">Press</Link>
                </li>
                <li>
                  <Link href="/f">Partners</Link>
                </li>
              </ul>

              <ul className="pt-3 pb-8  md:pl-10 text-mag leading-9">
                <h4 className="py-3 font-bold">Support</h4>
                <li>
                  <Link href="/f">Knowledge Base</Link>
                </li>
                <li>
                  <Link href="/f">Contact Support</Link>
                </li>
                <li>
                  <Link href="/f">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/f">Term of Use</Link>
                </li>
                <li>
                  <Link href="/f">Content Guidelines</Link>
                </li>
                <li>
                  <Link href="/f">House Rules</Link>
                </li>
                <li>
                  <Link href="/f">Cookies Policy</Link>
                </li>
                <li>
                  <Link href="/f">Ethics Line</Link>
                </li>
                <li>
                  <Link href="/f">Accessibility</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col md:flex-row-reverse justify-between py-10 px-24">
        <div className="flex justify-center pr-3 mb-5 space-x-3">
          <Link className="">
            <img
              src={images.footerYoutubeIcon}
              alt=""
              className=" rounded-full border-2  w-8 "
            />
          </Link>
          <Link className="">
            <img
              src={images.footerFacebookIcon}
              alt=""
              className=" rounded-full  border-2 w-8"
            />
          </Link>
          <Link className="">
            <img
              src={images.footerPintersetIcon}
              alt=""
              className=" rounded-full  border-2 w-8"
            />
          </Link>
          <Link className="">
            <img
              src={images.footerInstagramIcon}
              alt=""
              className=" rounded-full  border-2 w-8 "
            />
          </Link>
          <Link className="">
            <img
              src={images.footerTwitterIcon}
              alt=""
              className=" rounded-full  border-2 w-8 "
            />
          </Link>
          <Link className="">
            <img
              src={images.footerLinkedinIcon}
              alt=""
              className=" rounded-full  border-2 w-8"
            />
          </Link>
          <Link className="">
            <img
              src={images.footerTiktokIcon}
              alt=""
              className=" rounded-full  border-2   w-8"
            />
          </Link>
        </div>

        <div>
          <p className="text-center max-w-2xl">
            Copyright © 2023 Teachable, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
