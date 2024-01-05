import { apple, task,todo, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={todo} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> tasks &
        activities
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      You will get a call exactly at the time you've set for your reminder, ensuring you never miss a moment. You will just have to press 1 if you'll do the task or press 0 if you are rescheduling or canceling it. 
      </p>
    </div>
  </section>
);

export default Billing;
