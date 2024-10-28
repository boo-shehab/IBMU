import { collection, addDoc } from 'firebase/firestore'; 
import { db } from '../firebaseConfig';
import { FaPhone, FaBusinessTime } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Branches } from '../redux/data/branches.ts'
import { useEffect, useState } from 'react';

const Contact = () => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation("global");
    const { headquarterData } = useSelector((state: any) => state.headquarter);
    const { branches, loading } = useSelector((state: any) => state.branches);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        title: '',
        content: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        dispatch<any>(Branches());
    }, [dispatch]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            
            await addDoc(collection(db, 'Message'), {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                title: formData.title,
                content: formData.content,
                status: 'new',
                timestamp: new Date(), 
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                title: '',
                content: '',
            });
            setSubmitSuccess(true);
        } catch (error) {
            console.error('Error submitting form: ', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-32 max-w-screen">
            <div className='text-center'>
                <p className='text-gray-400 font-bold'>{t('ContactUs.content')}</p>
                <h1 className="font-bold text-2xl md:text-4xl">{t('ContactUs.sendMessage')}</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-12 gap-10">
                <div className="w-full md:w-1/2 space-y-4 mx-3">
                    {headquarterData && Object.keys(headquarterData).length > 0 ? (
                        <>
                            <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                                <h2>{t("ContactUs.phone")}</h2>
                                <div className='text-gray-400 text-sm'>
                                    <p style={{direction: "ltr"}}>{headquarterData.phone}</p>
                                </div>
                                <span className='text-yellow-200 px-2'>
                                    <FaPhone />
                                </span>
                            </div>
                            <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                                <h2>{t("ContactUs.address")}</h2>
                                <div className='text-gray-400 text-sm'>
                                    <p><a href={headquarterData.locationLink} target="_blank" rel="noopener noreferrer">{headquarterData.locationText[i18n.language]}</a></p>
                                    {!loading && (
                                        <>
                                            {branches.map((location: any) => (
                                                <p key={location.id}><a href={location.locationLink} target="_blank" rel="noopener noreferrer">{location.locationText[i18n.language]}</a></p>
                                            ))}
                                        </>
                                    )}
                                </div>
                                <span className='text-yellow-200 px-2'>
                                    <FaMapLocationDot />
                                </span>
                            </div>
                            <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                                <h2>{t("ContactUs.email")}</h2>
                                <div className='text-gray-400 text-sm'>
                                    <p>{headquarterData.email}</p>
                                </div>
                                <span className='text-yellow-200 px-2'>
                                    <MdOutlineMail />
                                </span>
                            </div>
                            <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                                <h2>{t("ContactUs.workingTime")}</h2>
                                <div className='text-gray-400 text-sm'>
                                    <p>{headquarterData.workingTimes.days[i18n.language]}</p>
                                    <p>{headquarterData.workingTimes.time[i18n.language]}</p>
                                </div>
                                <span className='text-yellow-200 px-2'>
                                    <FaBusinessTime />
                                </span>
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                <div className="w-full md:w-1/2 mx-8">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">{t('ContactUs.sendMessage')}</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder={t("ContactUs.name")}
                                className="border p-2 rounded w-full" 
                                required
                            />
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder={t("ContactUs.email")} 
                                className="border p-2 rounded w-full" 
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input 
                                type="text" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder={t("ContactUs.phone")} 
                                className="border p-2 rounded w-full" 
                            />
                            <input 
                                type="text" 
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder={t("ContactUs.messageTitle")} 
                                className="border p-2 rounded w-full" 
                                required
                            />
                        </div>
                        <textarea 
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            placeholder={t("ContactUs.message")} 
                            className="border p-2 rounded w-full h-32" 
                            style={{ resize: 'none' }}
                            required
                        ></textarea>

                        <button 
                            type="submit" 
                            className="bg-yellow-500 text-white p-2 rounded w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t("ContactUs.sending") : t("ContactUs.send_message")}
                        </button>
                        {submitSuccess && (
                            <p className="text-green-500 mt-2">Message sent successfully!</p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
