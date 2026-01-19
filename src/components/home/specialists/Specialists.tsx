import { Typography } from "@/components/ui/typography"
import doctorImage from "../../../assets/images/home/specialist/doctor.png"


export const Specialists = () => {
    return (
        <div className="max-md:px-4 py-16 relative">

            <svg className="absolute -top-60 right-0 -z-10" width="623" height="745" viewBox="0 0 623 745" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.92361 210.787C67.9236 290.287 227.604 356.926 313.924 367.787C389.424 377.287 547.408 373.326 628.924 279.826C710.439 186.326 698.098 57.3262 612.531 15.8262C526.965 -25.6738 413.031 30.3263 413.031 175.826C413.031 321.326 657.267 689.713 911.031 742.326" stroke="#E6FCF8" strokeWidth="5" />
            </svg>


            <div className="max-w-378 max-md:max-w-md md:w-188 xl:w-full xl:px-10 mx-auto ">
                <Typography variant={"h2"} className="text-left md:text-center xl:text-left mb-10 md:mb-12 xl:hidden">
                    Нашите специалисти се грижат денонощно за вас и вашето здраве
                </Typography>

                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-10">
                    <Typography variant={"h2"} className="hidden xl:block xl:w-100 shrink-0">
                        Нашите специалисти се грижат денонощно за вас и вашето здраве
                    </Typography>

                    <div className="xl:w-full max-md:w-full" data-aos="zoom-in" data-aos-duration="600" data-aos-once="true">
                        <img src={doctorImage} alt="Doctor" className="w-full max-w-71.25 xl:max-w-full max-md:max-w-full" />
                    </div>

                    <div className="flex flex-col gap-8 items-start md:w-100 w-full shrink-0">
                        <div>
                            <span className="text-accent text-[48px] font-thin leading-[120%] font-transformaMix">85+</span>
                            <Typography variant={"h4"}>Сертифицирани специалисти</Typography>
                        </div>
                        <div>
                            <span className="text-accent text-[48px] font-thin leading-[120%] font-transformaMix">1000+</span>
                            <Typography variant={"h4"}>Обслужени пациенти</Typography>
                        </div>
                        <div>
                            <span className="text-accent text-[48px] font-thin leading-[120%] font-transformaMix">15000+</span>
                            <Typography variant={"h4"}>Запазени часове</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}