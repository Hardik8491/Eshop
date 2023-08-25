import { useTranslation } from 'next-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (locale) => {
    i18n.changeLanguage(locale);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
}
