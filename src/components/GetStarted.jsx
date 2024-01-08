import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div onClick={() => window.open("https://bankappole.netlify.app/")} className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full  hover:bg-slate-500`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Try</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain  " />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">our app</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
