import { useTranslation } from 'react-i18next';

export default function HomeView() {
  const { t } = useTranslation();
  return <p>{t('start')} Home page</p>;
}
