import { useSelector } from 'react-redux';

const Achievements = () => {
  const { aboutUsData } = useSelector((state: any) => state.aboutUs);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 max-w-screen">
        {/* <h2 className="text-3xl font-semibold text-center mb-6 text-blue-800">{achievement.title}</h2>
        
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
        </div> */}
        
        <div className="w-full border rounded-lg shadow">  
          {aboutUsData && aboutUsData?.pdf && (
            <iframe src={aboutUsData.pdf} width="100%" style={{height: '90vh'}} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
