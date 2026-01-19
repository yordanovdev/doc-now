import { Typography } from '@/components/ui/typography'
import logo from '@/assets/navigation/logo.svg'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export const Footer = () => {
  return (
    <div className="px-4 relative md:px-6 xl:px-10 py-6 overflow-hidden max-md:max-w-md mx-auto">
      <div className="max-w-378 max-md:max-w-md md:w-188 mb-20 xl:w-full mx-auto flex flex-col items-center gap-8">
        <Typography
          data-aos="fade-right"
          data-aos-duration="800"
          variant={'h1'}
          className="text-center"
        >
          Нуждаете се от <br />{' '}
          <span className=" border-2 max-md:border-none border-primary rounded-full px-6 max-md:px-0">
            {' '}
            медицинска помощ{' '}
          </span>{' '}
          <br />
          още днес?
        </Typography>
        <div className="w-full flex flex-col gap-3 items-center md:flex-row md:space-x-4 md:gap-0 justify-center">
          <Button variant={'filled'} className="w-full md:w-auto">
            <Typography
              variant={'link'}
              as="p"
              className="font-transformaMix text-center hover:text-inherit"
            >
              Запази Час
            </Typography>
          </Button>
          <Button variant={'outlined'} className="w-full md:w-auto">
            <Typography
              variant={'link'}
              as={'p'}
              className="font-transformaMix text-center hover:text-inherit"
            >
              Към Услугите
            </Typography>
          </Button>
        </div>
      </div>
      <svg
        className="absolute -z-10 hidden md:block md:left-0  md:scale-110 xl:scale-130 top-20"
        width="350"
        height="430"
        viewBox="0 0 289 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-333.565 1.24529C-267.244 116.684 -93.3015 201.435 -11.933 206.192C25.9476 208.407 106.328 202.741 146.976 156.117C187.624 109.493 181.47 45.1665 138.802 24.4723C96.1342 3.77817 39.3206 31.7029 39.3206 104.257C39.3206 176.811 161.11 360.509 287.651 386.745"
          stroke="#E6FCF8"
          strokeWidth="5"
        />
      </svg>

      <div className="max-w-378 mx-auto xl:px-10 gap-6 xl:gap-8 flex items-center xl:flex-row flex-col justify-between">
        <div className="flex items-center gap-6 xl:gap-8 flex-col xl:flex-row">
          <img src={logo} alt="Logo" className="w-25.75 h-4.5" />
          <ul className="flex gap-6 items-center md:flex-row flex-col">
            <Typography variant={'link'} as={'li'}>
              <Link to="/">Начало</Link>
            </Typography>
            <Typography variant={'link'} as={'li'}>
              <Link to="/about-us">За Нас</Link>
            </Typography>
            <Typography variant={'link'} as={'li'}>
              Услуги
            </Typography>
          </ul>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-6">
          <Typography variant={'sm'} as={'p'}>
            Всички права запазени © 2026
          </Typography>
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                fill="#171717"
              />
            </svg>

            {/* Instagram */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                fill="#171717"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
