import styles from "../style";
import { discount, phonee,call, robot, rocket } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[40px] text-white ss:leading-[100.8px] leading-[50px]">
          Be 10x <br className="sm:block hidden" />{" "}
            {/* <span className="text-gradient"> Your Tasks, </span>{" "} */}
            <span className="text-gradient"> with phone call</span>{" "}
            {/* <span className="text-gradient"> Your Time </span>{" "} */}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="mb-2 px-10 bg-[#33bbcf] rounded-full font-poppins font-semibold ss:text-[68px] text-[35px] text-white ss:leading-[100.8px] leading-[50px]">
          Reminders
        </h1>


        {/* <div className="flex flex-row items-center py-[4px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
           Get <span className="text-white">phone calls</span> to <span className="text-white"> remind </span> habits and be 10X more productive.
          </p>
        </div> */}
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={phonee} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
