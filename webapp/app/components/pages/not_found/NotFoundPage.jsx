import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section>
      <h2>{i18nService.translate('text.page_not_found')}</h2>
      <Link to="/">{i18nService.translate('text.go_back', {
        page: 'home'
      })}</Link>
    </section>
  );
};

export default NotFoundPage;
