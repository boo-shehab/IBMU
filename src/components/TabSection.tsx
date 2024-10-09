import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TabSection = () => {
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState('message');

  const contentData = {
    values: {
      title: t('tabs.values.title'),
      content: t('tabs.values.content'),
    },
    vision: {
      title: t('tabs.vision.title'),
      content: t('tabs.vision.content'),
    },
    goals: {
      title: t('tabs.goals.title'),
      content: t('tabs.goals.content'),
    },
    message: {
      title: t('tabs.message.title'),
      content: t('tabs.message.content'),
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
              {contentData[key].title}
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">{contentData[activeTab].title}</h3>
          <p className="text-gray-700">{contentData[activeTab].content}</p>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
