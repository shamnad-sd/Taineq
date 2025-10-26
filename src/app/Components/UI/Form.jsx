"use client"
import { ContactEmailTemplate, sendMail, ThankYouEmailTemplate } from '@/app/Mail';
import { siteEmail, siteName } from '@/utils/variable';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Loader from './Loader';
import AnimatedElement from '../AnimatedElement';
import { useSiteContext } from '@/context/siteContext';

const Form = ({ contactData, borderColor = 'gray-200', PaddingLeft ='lg:pr-[49px]', border='border-t-1' }) => {
    const { contactPageData } = useSiteContext()
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await sendMail({
                sendTo: `${siteEmail}`,
                name: "Admin",
                subject: `Contact - ${siteName}`,
                message: await ContactEmailTemplate(name, email, phone, message),
            });

            await sendMail({
                sendTo: email,
                name: name,
                subject: `Thank you for contacting ${siteName}`,
                message: await ThankYouEmailTemplate(name),
            });

            setLoading(false);
            toast.success("Message sent successfully!");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
        } catch (error) {
            setLoading(false);
            console.error("Error sending emails:", error);
            toast.error("Failed to send message. Try again!");
        }
    };

    // Dynamic input classes
    const inputClasses = `w-full p-4 border-1 border-${borderColor} placeholder:text-[18px] focus:border-green-500 focus:outline-none transition-colors duration-300`;

    return (
        <>
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                    <Loader />
                </div>
            )}

            <AnimatedElement animation='fade-up' delay={800} className={` ${border} ${PaddingLeft} border-gray-300 lg:border-0 pt-10 lg:pt-0 order-2 lg:order-1`}>
                
                <h3 className="text-[20px] uppercase Secondary-color Primary-font mb-4 tracking-wide">
                    {contactData?.acf?.get_in_touch_heading}
                </h3>
                <p className="para mb-5 leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: contactData?.acf?.get_in_description
                    }}
                />

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={inputClasses}
                        />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="5"
                            className={`${inputClasses} resize-vertical`}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#63af51] uppercase hover:bg-[#145D3E] cursor-pointer text-white font-semibold py-4 px-8 transition-colors duration-300 tracking-wide"
                    >
                        {contactPageData?.acf?.submit_button}
                    </button>
                </form>
            </AnimatedElement>
        </>
    )
}

export default Form
