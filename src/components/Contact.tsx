import { collection, doc, getDoc, getDocs } from 'firebase/firestore'; 
import { db } from '../firebaseConfig';
import { FaPhone, FaBusinessTime } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    
    const { t, i18n } = useTranslation("global");
    const [contactInfo, setContactInfo] = useState();

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'contactInfo'));
                const data = await querySnapshot.docs[0].data()
                setContactInfo(data);
                console.log(data);
                
            } catch(error) {
                console.error('Error fetching images:', error);
            }
            
        };
        fetchContactData();
    }, []);

    return (
        <div className="container mx-auto px-4 py-32 max-w-screen">
            <div className='text-center'>
                <p className='text-gray-400 font-bold'>{t('ContactUs.content')}</p>
                <h1 className="font-bold text-4xl">{t('ContactUs.sendMessage')}</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-12 gap-10">
                <div className="w-full md:w-1/2 space-y-4 mx-3">
                    {contactInfo? (
                        <>
                            <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                                <h2>{t("ContactUs.phone")}</h2>
                                <div className='text-gray-400 text-sm'>
                                    <p>{contactInfo.phoneNumber}</p>
                                </div>
                                <span className='text-yellow-200 px-2'>
                                <FaPhone />
                                </span>
                            </div>
                            <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                                <h2>{t("ContactUs.address")}</h2>
                                <div className='text-gray-400 text-sm'>
                                    {contactInfo.address.map((addres) => (
                                        <>
                                            <a href={addres.addresLink} target="_blank" rel="noopener noreferrer">{addres.addresText[i18n.language]}</a>
                                        </>
                                    ))}
                                </div>
                                <span className='text-yellow-200 px-2'>
                                <FaMapLocationDot />
                                </span>
                            </div>
                            <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                                <h2>{t("ContactUs.email")}</h2>
                                <div className='text-gray-400 text-sm'>
                                    <p>{contactInfo.email}</p>
                                </div>
                                <span className='text-yellow-200 px-2'>
                                <MdOutlineMail />
                                </span>
                            </div>
                            <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                                <h2>{t("ContactUs.workingTime")}</h2>
                                <div className='text-gray-400 text-sm'>
                                    <p>{contactInfo.workingTimes.days[i18n.language]}</p>
                                    <p>{contactInfo.workingTimes.time[i18n.language]}</p>
                                </div>
                                <span className='text-yellow-200 px-2'>
                                <FaBusinessTime />
                                </span>
                            </div>
                        </>) : (
                            <p>loading...</p>
                        )
                    }
                </div>
                <div className="w-full md:w-1/2 ml-8">
                    <h2 className="text-2xl font-bold mb-4">{t('ContactUs.sendMessage')}</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="border p-2 rounded w-full" />
                            <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Phone" className="border p-2 rounded w-full" />
                            <input type="text" placeholder="Message Title" className="border p-2 rounded w-full" />
                        </div>
                        <textarea placeholder="Message" className="border p-2 rounded w-full h-32" style={{resize: 'none'}}></textarea>

                        <button type="submit" className="bg-yellow-500 text-white p-2 rounded w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
