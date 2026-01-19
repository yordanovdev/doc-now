import { Typography } from "@/components/ui/typography";
import icon1 from "../../../assets/images/about-us/our-values/icon1.svg";
import icon2 from "../../../assets/images/about-us/our-values/icon2.svg";
import icon3 from "../../../assets/images/about-us/our-values/icon3.svg";
import icon4 from "../../../assets/images/about-us/our-values/icon4.svg";

export const OurValues = () => {
  return (
      <div className="max-w-378 xl:px-10 px-4 py-10 xl:py-16 max-md:max-w-md w-full md:w-188 xl:w-full mx-auto ">
        <Typography variant={"h2"} className="text-left md:text-center mb-6">
          Нашите ценности
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full justify-items-stretch">
          <Value
            icon={icon1}
            title="Човешко отношение"
            description="Всеки пациент е различен и заслужава внимание, уважение и време."
          />
          <Value
            icon={icon2}
            title="Отговорност"
            description="Работим с ясното съзнание, че здравето не търпи компромиси."
          />
          <Value
            icon={icon3}
            title="Прозрачност"
            description="Ясна комуникация, коректност и честност във всяка услуга."
          />
          <Value
            icon={icon4}
            title="Професионализъм"
            description="Само лицензирани специалисти и утвърдени медицински практики."
          />
        </div>
      </div>
  );
};

type ValueProps = {
  icon: string;
  title: string;
  description: string;
};
const Value = (props: ValueProps) => {
  return (
    <div className="w-full h-auto md:h-36">
      <img src={props.icon} alt={props.title} className="mb-6" />
      <Typography variant={"h4"} className="mb-2">
        {props.title}
      </Typography>
      <Typography variant={"sm"} as={"p"} className="w-full">
        {props.description}
      </Typography>
    </div>
  );
};
