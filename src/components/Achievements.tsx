import React from 'react';
import { useTranslation } from 'react-i18next';

const Achievements = () => {
  const { t } = useTranslation("global");
  
  // Single achievement data
  const achievement = {
    title: t('about.achievements.title'),
    description: t('about.achievements.description'),
    pdfLink: '/assets/pdf/book.pdf', // Updated PDF path
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-800">{achievement.title}</h2>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
          <p className="text-gray-700 mb-4">{achievement.description}</p>
          
          <a
            href={achievement.pdfLink}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            download // This attribute allows the PDF to be downloaded
          >
            {t('about.achievements.download_button')}
          </a>
        </div>
        
        {/* Displaying the PDF */}
        <div className="w-full h-96 border rounded-lg shadow">          
          <iframe src={achievement.pdfLink} width="100%" height="500px" />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
