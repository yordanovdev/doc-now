import { Typography } from "@/components/ui/typography";

export const TrustAndSecurity = () => {
  return (
    <div className="relative md:px-10 py-10">
      <svg
        width="442"
        height="745"
        viewBox="0 0 442 745"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-xl:hidden absolute -left-10 -z-15 -top-40"
      >
        <path
          d="M-467.824 210.787C-401.824 290.287 -242.143 356.926 -155.824 367.787C-80.324 377.287 77.6608 373.326 159.176 279.826C240.691 186.326 228.35 57.3262 142.784 15.8262C57.2176 -25.6738 -56.7162 30.3263 -56.7162 175.826C-56.7162 321.326 187.52 689.713 441.284 742.326"
          stroke="#E6FCF8"
          strokeWidth="5"
        />
      </svg>

      <div className="max-w-378 px-4 max-md:max-w-md w-full relative overflow-x-hidden md:w-188 xl:w-full mx-auto mt-10 xl:mt-16">
        <Typography variant={"h2"} className="text-left md:text-center">
          Доверие и сигурност
        </Typography>
        <Typography
          variant={"p"}
          className="mb-8 xl:mb-16 mt-2 w-full md:w-112.5 text-left md:text-center md:mx-auto"
        >
          Здравето и личните данни са изключително чувствителни. Затова работим
          при строги стандарти за сигурност, конфиденциалност и медицинска
          етика.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto w-fit">
          <Item
            title="Медицинска отговорност"
            description="Всички медицински услуги се извършват от лицензирани специалисти с валидни права за практика и доказан опит. Всеки медицински акт се изпълнява според утвърдени професионални и етични норми."
          />
          <Item
            title="Защита на личните данни"
            description="Личната и медицинската информация на пациентите се обработва при стриктно спазване на GDPR и добрите практики за защита на чувствителни данни. Достъпът до информация е ограничен и контролиран."
          />
          <Item
            title="Прозрачност и информираност"
            description="Пациентът винаги получава ясна информация за услугата, процеса и условията, преди нейното извършване. Вярваме, че доверието започва с открита и честна комуникация."
          />
          <Item
            title="Сигурност на процесите"
            description="Всеки етап — от записването на час до извършването на услугата — е изграден така, че да осигури безопасност, проследимост и контрол, както за пациента, така и за медицинския специалист."
          />
        </div>
      </div>
    </div>
  );
};

type ItemProps = {
  title: string;
  description: string;
};
const Item = (props: ItemProps) => {
  return (
    <div className="bg-light-green p-10 rounded-3xl xl:w-120">
      <Typography variant={"h4"} className="mb-4">
        {props.title}
      </Typography>
      <Typography variant={"sm"} as={"p"} className="w-full">
        {props.description}
      </Typography>
    </div>
  );
};
