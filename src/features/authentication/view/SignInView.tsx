import { useTranslation } from 'react-i18next';

export default function SignInView() {
  const { t } = useTranslation();
  return <p>{t('start')} SignIn page</p>;
}
