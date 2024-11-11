import React from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('welcome')}</title>
        <meta name="description" content={t('home_description')} />
      </Helmet>
      <h1>{t('welcome')}</h1>
      <p>{t('company_values')}</p>
    </div>
  );
}

export default HomePage;
