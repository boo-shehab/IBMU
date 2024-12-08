import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.jpg'
import { NavLink } from 'react-router-dom';

const BlogCard = ({ post }: any) => {
  const { i18n } = useTranslation("global");

  return (
    <div className="bg-white rounded-sm overflow-hidden hover:border border-yellow-400 cursor-pointer">
      <NavLink to={"/news-events/news/" + post.id}>
        <img src={post.img? post.img : logo} alt={post.title[i18n.language]} className={`w-full ${post.img ? '': 'h-60'} ${post.img? 'object-cover' : 'object-contain'} object-top`} />
        <div className="p-4">
          <span className="text-sm text-yellow-600">{post.category[i18n.language]}</span>
          <p className="mt-2 text-xl leading-7 text-gray-600 mb-8">{post.title[i18n.language]}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default BlogCard;
