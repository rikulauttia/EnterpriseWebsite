import React from 'react';

import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div>
      <button onClick={() => changeLanguage('fi')}>FI</button>
      <button onClick={() => changeLanguage('sv')}>SV</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ja')}>日本語</button>
    </div>
  );
}

export default LanguageSwitcher;
