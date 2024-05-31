import { useTranslation } from 'react-i18next';

export default function SignUpView() {
  const { t } = useTranslation();
  return <p>{t('start')} SignUp page</p>;
}
