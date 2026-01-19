import { Typography } from "@/components/ui/typography";
import icon1 from "../../../assets/images/about-us/how-it-started/icon1.svg";
import icon2 from "../../../assets/images/about-us/how-it-started/icon2.svg";
import icon3 from "../../../assets/images/about-us/how-it-started/icon3.svg";

export const HowItStarted = () => {
  return (
    <div className="max-w-378 max-md:max-w-md mx-auto px-4 md:px-6 xl:px-10 py-10 xl:py-16">
      <Typography
        variant={"h2"}
        className="text-left md:text-center xl:text-left"
      >
        Как започна всичко?
      </Typography>
      <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 xl:block relative mt-10 xl:mt-0 xl:-top-9.5 md:w-188 md:mx-auto xl:w-full">
        <svg
          className="hidden xl:block absolute left-79 top-24"
          width="670"
          height="536"
          viewBox="0 0 670 536"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M460.321 1.50001L460.319 1.5C163.151 1.50005 -67.3383 1.50003 20.3421 154.284C24.1687 160.952 27.8041 166.893 31.2536 172.163M399.895 381.872C485.2 335.289 594.355 306.324 657.209 343.297C710.636 374.724 565.477 392.572 399.895 381.872ZM399.895 381.872C352.73 407.629 312.855 438.772 292.131 467.134M399.895 381.872C205.869 369.335 -16.2009 317.6 20.3425 202.588C24.0859 190.806 27.7288 180.725 31.2536 172.163M292.131 467.134C281.143 482.171 275.538 496.426 277.084 508.682C285.37 574.383 433.258 492.843 292.131 467.134ZM292.131 467.134C267.473 462.642 233.993 459.854 189.403 459.854M31.2536 172.163C115.15 300.331 89.1231 31.5875 31.2536 172.163Z"
            stroke="#E6FCF8"
            strokeWidth="3"
          />
        </svg>

        <div className="xl:px-30 block xl:flex justify-end w-full">
          <Item
            icon={icon1}
            title="Проблемът, който видяхме"
            description="В много ситуации достъпът до лекар изисква време, чакане и физическо усилие, които не винаги са възможни. За възрастни хора, родители с деца или хора в неразположение това често превръща една нужда от помощ в сериозно преди"
          />
        </div>

        <div className="block xl:flex justify-center w-full">
          <Item
            icon={icon2}
            title="Личният мотив"
            description="Идеята не започна като бизнес концепция, а като опит да се реши реален проблем. Всеки от нас се е сблъсквал с момент, в който навременната медицинска грижа е била трудна за организиране — точно тогава се роди нуждата от по-добър модел."
          />
        </div>
        <div className="xl:px-30 block xl:flex justify-start w-full">
          <Item
            icon={icon3}
            title="Решението, което създадохме"
            description="Вместо пациентът да се адаптира към системата, решихме да адаптираме системата към пациента. Така създадохме услуга, която премества медицинската грижа в домашна среда — по-спокойна, по-достъпна и по-близка до реалния живот."
          />
        </div>
      </div>
    </div>
  );
};

type ItemProps = {
  icon: string;
  title: string;
  description: string;
};
const Item = (props: ItemProps) => {
  return (
    <div
      className="w-full md:w-87 xl:w-96"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <img src={props.icon} alt={props.title} className="" />
      <Typography variant={"h4"} className="mt-6">
        {props.title}
      </Typography>
      <Typography variant={"sm"} as={"p"} className="mt-2.5">
        {props.description}
      </Typography>
    </div>
  );
};
