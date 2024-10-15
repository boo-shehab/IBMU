import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const TabSection = () => {
  const { i18n } = useTranslation("global");
  const { aboutUsData } = useSelector((state: any) => state.aboutUs);
  const [activeTab, setActiveTab] = useState('message');

  // Early return if data is not yet loaded
  if (!aboutUsData) {
    return <div>Loading...</div>; // or any loading spinner/message you prefer
  }

  // Ensure aboutUsData contains the expected structure
  const contentData: any = {
    values: {
      title: aboutUsData?.values?.title || '',
      content: aboutUsData?.values?.content || '',
    },
    vision: {
      title: aboutUsData?.vision?.title || '',
      content: aboutUsData?.vision?.content || '',
    },
    goals: {
      title: aboutUsData?.goals?.title || '',
      content: aboutUsData?.goals?.content || '',
    },
    message: {
      title: aboutUsData?.message?.title || '',
      content: aboutUsData?.message?.content || '',
    },
  };

  return (
    <section className="section bg-white py-20">
      <div className="container mx-auto px-4 max-w-screen">
        <div className="flex justify-center space-x-4 mb-6">
          {Object.keys(contentData).map((key) => (
            <button
              key={key}
              className={`tab px-4 py-2 text-lg focus:outline-none ${
                activeTab === key ? 'text-black font-bold border-b-2 border-yellow-500' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(key)}
            >
              {contentData[key].title[i18n.language]}
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">{contentData[activeTab].title[i18n.language]}</h3>
          <p className="text-gray-700">{contentData[activeTab].content[i18n.language]}</p>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
