
import { quotes } from "../assets";
import styles from "../style";

/* md:mr-10 sm:mr-5 */
const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 md:py-12 py-4 rounded-[20px]  max-w-[370px]  mr-0 my-5 feedback-card">
    <img src={quotes} className="w-[28px] h-[28px]" />
    <p className={`${styles.paragraph} mt-6 mb-6  font-poppins font-normal text-[18px] `}>{content}</p>

    <div className="flex flex-1 flex-row items-end">
      <div>
        <img src={img} className="w-[48px] h-[48px]  " />
      </div>
      <div className="flex flex-1 flex-col ml-2">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
      </div>
    </div>
  </div>

);


export default FeedbackCard;
