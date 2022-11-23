import useTranslation from 'next-translate/useTranslation'
import { NextPage } from 'next'

const TailwindPage: NextPage = () => {

  const { t, lang } = useTranslation('common')
  return (
    <>
      <div className="py-12 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">{t('sample')}</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Tailwind + ChakraUI integration
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                  </div>
                  <p className="text-lg font-medium leading-6 text-gray-900 ltr:ml-16 rtl:mr-16 ">{t('tailwind')}</p>
                </dt>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                  </div>
                  <p className="text-lg font-medium leading-6 text-gray-900 ltr:ml-16 rtl:mr-16 ">{t('tailwind')}</p>
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-8">
          <div
            className="flex items-center justify-center w-16 h-16 text-indigo-500 bg-indigo-100 rounded-full shadow-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="mt-6 mb-3 font-medium text-indigo-500 uppercase">
            {t('tailwind')}
          </h2>
          <p className="mb-3 text-sm font-light text-gray-500">
            {t('lorem')}
          </p>
        </div>

        <div className="p-8">
          <div
            className="flex items-center justify-center w-16 h-16 text-green-500 bg-green-100 rounded-full shadow-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="mt-6 mb-3 font-medium text-green-500 uppercase">
            {t('tailwind')}
          </h2>
          <p className="mb-3 text-sm font-light text-gray-500">
            {t('lorem')}
          </p>
        </div>
        <div className="p-8">
          <div
            className="flex items-center justify-center w-16 h-16 text-red-500 bg-red-100 rounded-full shadow-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="mt-6 mb-3 font-medium text-red-500 uppercase">
            {t('tailwind')}
          </h2>
          <p className="mb-3 text-sm font-light text-gray-500">
            {t('lorem')}
          </p>
        </div>
      </div>
    </>
  );
};

export default TailwindPage;
