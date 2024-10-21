import { useTranslation } from 'react-i18next';
import { IoLocation } from "react-icons/io5";
import 'react-quill/dist/quill.snow.css';

const Event = ({ event }: any) => {
  const {i18n} = useTranslation('global');
  return (
    <div className="overflow-hidden">
      <img src={event.img} alt={event.title[i18n.language]} className="w-11/12 h-72 object-cover mx-auto" />
      <div className="p-6">
        <div className="flex justify-between align-center">
            <h3 className="text-lg font-semibold mb-2">{event.title[i18n.language]}</h3>
            <a href={event.locationLink} target='_blank' className='text-yellow-400 text-2xl'><IoLocation /></a>
        </div>
        <p dangerouslySetInnerHTML={{ __html: event.description[i18n.language] }}></p>
      </div>
    </div>
  );
};

export default Event;
