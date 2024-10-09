import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ post }) => {
  
  const { t, i18n } = useTranslation("global");
  return (
    <div className="bg-white shadow-lg rounded-sm overflow-hidden hover:border border-yellow-400 cursor-pointer">
      <NavLink to={"/news-events/news/" + post.id}>
        <img src={post.img} alt={post.title[i18n.language]} className="w-full h-60 object-cover" />
        <div className="p-4">
          {/* Displaying the category in English (you can change this to Arabic if needed) */}
          <span className="text-xs text-yellow-600">{post.category[i18n.language]}</span>
          <p className="mt-2 text-lg leading-7 text-gray-600 mb-8">{post.title[i18n.language]}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default BlogCard;
