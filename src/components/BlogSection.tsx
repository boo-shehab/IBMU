import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BlogSection = () => {
  // Dummy blog posts data
  const blogPosts = [
    {
      img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png', // replace with actual image paths
      category: 'المدونة',
      title: 'تعزيز رضا الموظفين وتحقيق النمو المستدام',
    },
    {
      img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
      category: 'المدونة',
      title: 'كيف سيكون وضع العالم بعد أزمة كورونا؟',
    },
    {
      img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
      category: 'المدونة',
      title: 'الآثار الاقتصادية لجائحة كوفيد-19 على الدول العربية',
    },
    {
      img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
      category: 'المدونة',
      title: 'التأثيرات الاقتصادية لجائحة كوفيد-19 على الدول العربية',
    },
    {
      img: 'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
      category: 'المدونة',
      title: 'أهمية الاستثمار لمعالجة الركود الإقتصادي الحالي',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      {/* Header section with title and navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            اقرأ جديد مقالاتنا
          </h2>
          <div className="flex space-x-2">
            <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
              <FaArrowRight />
            </button>
            <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full">
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
