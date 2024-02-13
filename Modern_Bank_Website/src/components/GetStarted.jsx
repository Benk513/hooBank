import { arrowUp } from "../assets"
import styles from "../style"
const GetStarted = () => {
  return (
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}>
          <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
              <div className={`${styles.flexStart} flex-row`}>
                  <p className="text-gradient font-poppins font-medium text-[18px] leading-[23px] mr-2">
                      <span>Get</span></p>
                  <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
              </div>
              <div className={`${styles.flexStart} flex-row`}>
                  <p className="text-gradient font-poppins font-medium text-[18px] leading-[23px] mr-2">
                <span>Started</span></p>
                  
              </div>
              
      </div></div>
  )
}

export default GetStarted