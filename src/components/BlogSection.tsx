import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BlogSection = () => {
  const { t } = useTranslation("global");
  
  // Dummy blog posts data
  const blogPosts = [
    {
      img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
      category: t('common.blog'),
      title: 'تعزيز رضا الموظفين وتحقيق النمو المستدام',
    },
    {
      img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
      category: t('common.blog'),
      title: 'تعزيز رضا الموظفين وتحقيق النمو المستدام',
    },
    {
      img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
      category: t('common.blog'),
      title: 'تعزيز رضا الموظفين وتحقيق النمو المستدام',
    },
    {
      img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
      category: t('common.blog'),
      title: 'تعزيز رضا الموظفين وتحقيق النمو المستدام',
    },
    // Add more posts here...
  ];

  return (
    <section className="bg-gray-100 py-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">{t('home.blogSection.title')}</h2>
          <div className="flex space-x-2">
            <Link to="/news" className="p-2 hover:text-yellow-500 underline rounded-full">
              {t('home.blogSection.seeMore')}
            </Link>
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded-sm overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <span className="text-xs text-yellow-600">{post.category}</span>
                <p className="mt-2 text-lg leading-7 text-gray-600 mb-8">{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
