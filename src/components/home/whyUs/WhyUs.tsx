import { Typography } from "@/components/ui/typography"
import icon1 from "../../../assets/images/home/why-us/icon1.svg"
import icon2 from "../../../assets/images/home/why-us/icon2.svg"
import icon3 from "../../../assets/images/home/why-us/icon3.svg"
import icon4 from "../../../assets/images/home/why-us/icon4.svg"


export const WhyUs = () => {
    return <div className="bg-light-green py-20 max-md:px-4  w-full">
        <div className="max-w-378 xl:px-10 max-md:max-w-md mx-auto">
            <div className="flex flex-col xl:flex-row xl:items-center gap-6 md:w-188 md:mx-auto xl:w-full">
                <Typography data-aos="fade-right" data-aos-duration="800" variant="h2" as="h2" className="text-center md:text-left sm:text-left mb-4 md:mb-0 xl:w-85 shrink-0">
                    Защо да изберете медицинска грижа у дома?
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:justify-between gap-6 place-items-center sm:place-items-start flex-1">
                    <Item
                        icon={icon1}
                        title="Комфорт и спокойствие"
                        description="Без чакане, без пътуване, без излишен стрес."
                    />
                    <Item
                        icon={icon2}
                        title="Спестявате време"
                        description="Услугата идва при вас, когато ви е удобно."
                    />
                    <Item
                        icon={icon3}
                        title="Професионализъм"
                        description="Проверени и лицензирани специалисти"
                    />
                    <Item
                        icon={icon4}
                        title="Индивидуално внимание"
                        description="Повече време и грижа за пациента."
                    />
                </div>
            </div>
        </div>
    </div>
}

type ItemProps = {
    title: string,
    description: string,
    icon: string
}
const Item = (props: ItemProps) => {
    return (
    <div className="flex xl:items-center justify-center items-start flex-col gap-2 xl:max-w-62 xl:justify-between">
            <img src={props.icon} alt={props.title} className="" />
            <Typography variant={"h4"} className="text-center">{props.title}</Typography>
            <Typography variant={"sm"} as={"p"} className="text-center">{props.description}</Typography>
        </div>
    )
}