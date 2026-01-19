import { FeatureCard } from "./FeatureCard"
import headerDoctor1 from "../../../assets/images/home/header-doctor-1.svg"
import headerDoctor1Full from "../../../assets/images/home/doctor-1-full.svg"
import headerDoctor2 from "../../../assets/images/home/header-doctor-2.svg"

import service1 from "../../../assets/images/home/services/service-1.svg"
import service2 from "../../../assets/images/home/services/service-2.svg"
import service3 from "../../../assets/images/home/services/service-3.svg"
import service4 from "../../../assets/images/home/services/service-4.svg"

import arrowsDownIcon from "../../../assets/images/home/arrows-down.svg"
import bgElement from "../../../assets/bg-element.svg"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"


export const Header = () => {
    return (
        <header className="overflow-hidden max-w-378 max-md:max-w-md relative mx-auto px-4 md:px-6 xl:px-10 pt-0 pb-10 xl:pb-16 md:py-4 overflow-x-hidden">
            <img src={bgElement} className="absolute max-md:hidden md:w-screen md:right-0 md:-top-25 md:rotate-0 md:scale-100 xl:w-auto xl:right-10 xl:rotate-20 xl:-top-55 -z-10 transform" />
            <div className="flex flex-col xl:flex-row relative w-full xl:justify-end">
                <div className="md:hidden flex flex-col gap-4 items-center mb-8">
                    <img src={headerDoctor1Full} data-aos="zoom-in" data-aos-duration="800" data-aos-once="true" alt="Doctor" className="w-full" />
                </div>

                <div data-aos="fade-right" data-aos-duration="800"  className="flex-1 flex flex-col items-center text-center xl:absolute xl:left-0 xl:top-23 xl:items-start xl:text-left">
                    <Typography variant="h1" className="mb-2 md:w-140 w-full sm:text-left md:text-center xl:w-112.5 xl:text-left">
                        Навременна докторска грижа във вашия дом
                    </Typography>
                    <Typography variant="p" className="mb-8 sm:text-left md:text-center xl:text-left md:w-87.5">
                        Запазете час за лекар директно до вашия дом, онлайн за минути, без чакане и без излишен стрес.
                    </Typography>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mb-8 xl:mb-0">
                        <Button className="w-full md:w-auto">
                            <Typography variant="lg" className="hover:text-inherit" as={'p'}>Запази Час</Typography>
                        </Button>
                        <Button variant="outlined" className="w-full md:w-auto">
                            <Typography variant="lg" className="hover:text-inherit" as={'p'}>Към Услугите</Typography>
                        </Button>
                    </div>
                </div>

                {/* Images Section - Show on md and above */}
                <div className="hidden md:flex flex-col gap-10 items-center xl:items-end">
                    <div className="flex gap-4 max-xl:justify-between">
                        <img id="doctor1" src={headerDoctor1} alt="Doctor" className="max-xl:hidden" data-aos="zoom-in" data-aos-duration="800" />
                        <img src={headerDoctor1Full} alt="Doctor" className="xl:hidden" data-aos="zoom-in" data-aos-duration="800" />
                        <img src={headerDoctor2} alt="Doctor" className="self-end" data-aos-anchor="#doctor1" data-aos-once="true" data-aos="zoom-in" data-aos-duration="800" />
                    </div>

                    {/* Feature Cards - Show on small/medium in 2x2 grid */}
                    <div className="max-xl:grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 md:w-188 md:mx-auto place-items-center xl:flex justify-between xl:w-207.5 xl:mx-0">
                        <FeatureCard
                            icon={service1}
                            title="Консултация с лицензирани специалисти"
                        />
                        <FeatureCard
                            icon={service2}
                            title="Директно в комфорта на вашия дом"
                        />
                        <FeatureCard
                            icon={service3}
                            title="Бързa реакция в рамките на деня"
                        />
                        <FeatureCard
                            icon={service4}
                            title="Сигурност на личните ви данни"
                        />
                    </div>
                </div>

                <div className="md:hidden grid grid-cols-2 gap-4 place-items-center">
                    <FeatureCard
                        icon={service1}
                        title="Консултация с лицензирани специалисти"
                    />
                    <FeatureCard
                        icon={service3}
                        title="Директно в комфорта на вашия дом"
                    />
                    <FeatureCard
                        icon={service2}
                        title="Бързa реакция в рамките на деня"
                    />
                    <FeatureCard
                        icon={service4}
                        title="Сигурност на личните ви данни"
                    />
                </div>


                <div className="absolute max-xl:hidden left-0 -bottom-4 flex items-center justify-center w-28 h-28">

                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite] w-28 h-28">
                        <svg className=" overflow-visible" viewBox="0 0 200 200">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                                />
                            </defs>
                            <text className="fill-black text-[10px] font-medium tracking-[0.2em] uppercase">
                                <textPath href="#circlePath" startOffset="0%">
                                    Продължи надолу — Продължи надолу — Продължи надолу —
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    <img src={arrowsDownIcon} alt="Down Arrows" />

                </div>

            </div>

            {/* Features Section */}

        </header>
    )
}