


import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";


const Testimonials = () => (
  <section id="clients" className={`flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className=" flex flex-1 sm:flex-row flex-col  ">
      <h2 className="{styles.heading2} font-poppins text-white md:text-5xl text-3xl md:py-12 py-4 text-bold sm:mb-0 mb:4 w-[100%] "> What People are <br className="sm:block hidden" /> saying about us</h2>
      <p className="text-white w-[100%] font-poppins md:text-2xl text-xl md:py-12 py-4 sm:mt-0 mt:4 max-w-[350px]">  Everything you need to accept card payments and grow your business
        anywhere on the planet.</p>
    </div>
    <div className="flex flex-wrap sm:flex-row flex-col sm:justify-start w-full justify-center feedback-container relative z-[1]">
      {feedback.map((fedb) => (
        <FeedbackCard key={fedb.id} {...fedb} />
      ))


      }

    </div>
  </section>
);

export default Testimonials;
