import { card, cycle } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Task reminder was <br className="sm:block hidden" /> never this easy!!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Just create a task. Set a reminder. We are there to handle the rest.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={cycle} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
