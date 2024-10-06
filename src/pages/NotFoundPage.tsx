import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation("global");
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">{t('notFound.title')}</h1>
      <p className="text-xl mb-5">{t('notFound.description')}</p>
      <Link to="/" className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4">
        {t('notFound.goBack')}
      </Link>
    </section>
  );
}

export default NotFoundPage;
