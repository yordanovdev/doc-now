import { Typography } from "@/components/ui/typography"


export const Steps = () => {
    return <div className="w-full px-4 md:px-6 xl:px-0 py-16 overflow-hidden">
        <svg className="absolute max-md:hidden md:top-30 w-full xl:-left-50 xl:-top-12 transform xl:scale-90 -z-10 xl:w-[1850.908px] h-[988.211px]" viewBox="0 0 1300 745" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1873.11 266.838C1688.11 309.838 538.5 369.826 451.5 369.826C403.046 369.826 193.123 373.326 111.608 279.826C30.0928 186.326 42.4338 57.3262 128 15.8262C213.566 -25.6738 327.5 30.3261 327.5 175.826C327.5 321.326 83.2644 689.712 -170.5 742.326" stroke="#E6FCF8" strokeWidth="5" />
        </svg>

        <Typography variant={"h2"} as={"h2"} className="text-center mb-10">Лесни стъпки за запазване на час</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 place-items-center xl:place-items-stretch md:w-188 md:mx-auto xl:w-auto xl:max-w-358">
            <Step
                number={1}
                title={"Изберете услуга"}
                description={"Доктор, Медицинска сестра, IV терапия или лабораторни изследвания"}
            />
            <Step
                number={2}
                title={"Изберете удобен час"}
                description={"Виждате наличните слотове в реално време."}
            />
            <Step
                number={3}
                title={"Специалист идва при вас"}
                description={"Напълно оборудван и подготвен за услугата."}
            />
            <Step
                number={4}
                title={"Плащане и документация"}
                description={"Лесно, сигурно и прозрачно."}
            />
        </div>
    </div>
}


type StepProps = {
    number: number
    title: string
    description: string
}
const Step = (props: StepProps) => {
    return <div className="flex flex-col gap-2 items-center w-71.75 sm:w-full">
        <span className="text-accent text-[80px] leading-[120%] font-extralight font-transformaMix">{props.number}</span>
        <Typography variant={"h4"} as={"h4"} className="text-center">{props.title}</Typography>
        <Typography variant={"sm"} as={'p'} className="text-center">{props.description}</Typography>
    </div>
}