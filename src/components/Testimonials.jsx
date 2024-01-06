import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import Price from "./price";
const data = [
  {
    name: "Pro",
    money: 49,
    curreny: "$",
    frequency: "month",
    features: ["10GB Storage", "Unlimited API requests", "Great "],
  },
  {
    name: "Pro Plus",
    money: 99,
    curreny: "$",
    frequency: "month",
    featured: true,
    features: ["10GB Storage", "Unlimited API requests", "Great "],
  },
];
const Testimonials = () => (
  <section
    id="pricing"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Every good thing <br className="sm:block hidden" /> has some price to
        pay
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Prices that won't make you question existence. Just pick, click, and
          let's get this show on the road!
        </p>
      </div>
    </div>

    {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div> */}
    <div className="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center">
      <div className="grid gap-10 lg:gap-6 md:grid-cols-1 lg:grid-cols-2">
        {data.map((plan) => (
          <Price {...plan} key={plan.name} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
