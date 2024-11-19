import { useTranslation } from 'react-i18next';
import { IoLocation } from "react-icons/io5";
import 'react-quill/dist/quill.snow.css';

const Event = ({ event }: any) => {
  const {i18n} = useTranslation('global');
  return (
    <div className="overflow-hidden">
      <img src={event.img} alt={event.title[i18n.language]} className="w-11/12 h-72 max-w-5xl object-cover mx-auto" />
      <div className="py-6">
        <div className="flex justify-between flex-col-reverse md:flex-row align-center">
            <h3 className="text-2xl font-semibold mb-4">{event.title[i18n.language]}</h3>
              <a href={event.locationLink} target='_blank' className={`flex hover:text-yellow-400 mb-4 text-xl ${i18n.language === 'ar'? 'mr-auto':'ml-auto'}`}>
                <span>{event.eventTime.toDate().toLocaleString()}</span>
                <span className='text-yellow-400 text-2xl'>
                  <IoLocation />
                </span>
                </a>
        </div>
        <p dangerouslySetInnerHTML={{ __html: event.description[i18n.language] }}></p>
      </div>
    </div>
  );
};

export default Event;
