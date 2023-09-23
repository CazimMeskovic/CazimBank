

import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className="flex flex-col">
   {/*  <div className="flex sm:flex-row flex-col sm: justify-center sm:mt-0 mt-4 mb-6 "> */}
   <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="sm:mb-6 mb-10">
        <img src={logo} className="w-[200px]" />
        <p className={`${styles.paragraph} max-w-[400px] p-6 `}> A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className="flex flex-wrap  flex-row  ">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>


    <div className="flex sm:flex-row flex-col sm:justify-between justify-center border-t-[1px] p-6 border-t-[#3F3E45]">
      <div className="sm:mb-4 mb-6">
        <p className={`${styles.paragraph} sm:text-lg text-sm`} >Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
      </div>

      <div className="flex flex-row  " >
        {socialMedia.map((soc, index) => (
          <img
            src={soc.icon}
            className="w-[25px] mr-4 cursor-pointer "
            onClick={() => window.open(soc.link)}
          />

        ))

        }
      </div>

    </div>


  </section>
);

export default Footer;
