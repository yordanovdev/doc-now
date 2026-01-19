import { AnimatePresence, motion } from "motion/react";
import logo from "../../assets/navigation/logo.svg";
import { Link } from "@tanstack/react-router";

type NavBarMobileProps = {
  open: boolean;
  onClose: () => void;
};
export const NavBarMobile = (props: NavBarMobileProps) => {
  return (
    <AnimatePresence>
      {props.open && (
        <motion.div
          key="modal"
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.2,
          }}
          initial={{ y: -500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -500, opacity: 0 }}
          className="fixed inset-0 bg-white h-dvh z-20"
        >
          <div className="h-full">
            <div className="flex items-center justify-between max-w-378 max-md:max-w-md mx-auto px-4 md:px-6 xl:px-10 py-5 xl:py-3">
              <div className="flex justify-start xl:flex-1 md:mr-6 xl:mr-0">
                <img src={logo} alt="Logo" className="w-25.75 h-4.5" />
              </div>

              <div className="flex-1 flex justify-end">
                <button
                  onClick={() => props.onClose()}
                  className="cursor-pointer md:hidden flex flex-col gap-1 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    width="20px"
                    overflow="visible"
                    preserveAspectRatio="none"
                    style={{ display: "block" }}
                    viewBox="0 0 13.3075 13.3075"
                    aria-label="close"
                    role="img"
                  >
                    <path
                      d="M1.05375 13.3075L0 12.2538L5.6 6.65375L0 1.05375L1.05375 0L6.65375 5.6L12.2537 0L13.3075 1.05375L7.7075 6.65375L13.3075 12.2538L12.2537 13.3075L6.65375 7.7075L1.05375 13.3075Z"
                      fill="black"
                      fill-opacity="0.7"
                      id="close"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <ul className="w-full h-full flex items-center justify-center gap-8 flex-col">
              <li>
                <Link
                  to="/"
                  onClick={() => props.onClose()}
                  className="text-2xl font-transformaMix font-[650] leading-8"
                >
                  Начало
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  onClick={() => props.onClose()}
                  className="text-2xl font-transformaMix font-[650] leading-8"
                >
                  За Нас
                </Link>
              </li>
              <li>
                <p className="text-2xl font-transformaMix font-[650] leading-8">
                    Услуги
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
