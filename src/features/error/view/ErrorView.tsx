import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import XCenter from '~/components/XCenter';
import Lottie from 'react-lottie';
import animationData from '../../../assets/lotties/page-not-found-animation.json';
import ROUTER_NAME from '~/router/router-name';

export default function ErrorView() {
  const { t } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTER_NAME.home);
  };

  return (
    <XCenter isFullScreen={true}>
      <div className=' bg-white'>
        <div className='text-center'>
          <Lottie options={defaultOptions} height={300} width={300} />
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            {t('error-page-not-found')}
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>{t('error-sorry')}</p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              onClick={handleClick}
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {t('error-back-home')}
            </a>
          </div>
        </div>
      </div>
    </XCenter>
  );
}
