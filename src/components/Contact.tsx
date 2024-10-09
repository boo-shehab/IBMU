import { collection, doc, getDoc, getDocs } from 'firebase/firestore'; 
import { db } from '../firebaseConfig';
import { FaPhone } from "react-icons/fa";
import { useEffect, useState } from 'react';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        address: "بغداد، العراق",
        email: "info@ifb-us.org",
        phoneNumber: 7809141940,
        workingTimes: {days: 'الاحد - الخميس', time: '8ص - 2م'}
    });

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
                <p className='text-gray-400 font-bold'>Contact us</p>
                <h1 className="font-bold text-4xl">Send us a message</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center py-12 gap-10">
                <div className="w-full md:w-1/2 space-y-4 mx-3">
                    <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                        <h2>Phone</h2>
                        <div className='text-gray-400 text-sm'>
                            <p>USA : 1-7039723300</p>
                            <p>Iraq : +964 750 803 2505 </p>
                            <p>9647508032505</p>
                        </div>
                        <span className='text-yellow-200 px-2'>
                        <FaPhone />
                        </span>
                    </div>
                    <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                        <h2>Phone</h2>
                        <div className='text-gray-400 text-sm'>
                            <p>USA : 1-7039723300</p>
                            <p>Iraq : +964 750 803 2505 </p>
                            <p>9647508032505</p>
                        </div>
                        <span className='text-yellow-200 px-2'>
                        <FaPhone />
                        </span>
                    </div>
                    <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                        <h2>Phone</h2>
                        <div className='text-gray-400 text-sm'>
                            <p>USA : 1-7039723300</p>
                            <p>Iraq : +964 750 803 2505 </p>
                            <p>9647508032505</p>
                        </div>
                        <span className='text-yellow-200 px-2'>
                        <FaPhone />
                        </span>
                    </div>
                    <div className='flex justify-between pb-6 border-b border-yellow-400 mt-6'>
                        <h2>Phone</h2>
                        <div className='text-gray-400 text-sm'>
                            <p>USA : 1-7039723300</p>
                            <p>Iraq : +964 750 803 2505 </p>
                            <p>9647508032505</p>
                        </div>
                        <span className='text-yellow-200 px-2'>
                        <FaPhone />
                        </span>
                    </div>
                    {/* {contactInfo ? (
                        <>
                            <div>
                                <h2 className="font-semibold text-lg">Phone</h2>
                                <p>phoneNumber : {contactInfo.phoneNumber}</p>
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">Address</h2>
                                <p>{contactInfo.address}</p>
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">Email</h2>
                                <p>{contactInfo.email}</p>
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">Working times</h2>
                                <p>{contactInfo.workingTimes.days}</p>
                                <p>{contactInfo.workingTimes.time}</p>
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )} */}
                </div>

                <div className="w-full md:w-1/2 ml-8">
                    <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
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
