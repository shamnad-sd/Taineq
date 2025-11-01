"use client"
import { ContactEmailTemplate, sendMail, ThankYouEmailTemplate } from '@/app/Mail';
import { siteEmail, siteName } from '@/utils/variable';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Loader from './Loader';

const Form = ({ contactData }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
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
                message: await ContactEmailTemplate(name, email, phone, message, location),
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
            // setLocation("");
            setMessage("");
        } catch (error) {
            setLoading(false);
            console.error("Error sending emails:", error);
            toast.error("Failed to send message. Try again!");
        }
    };

    return (
        <>
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                    <Loader />
                </div>
            )}

            <div className="bg-white rounded-[2rem] xl:border xl:border-gray-200 xl:px-[70px] xl:py-[80px] xl:max-w-[680px] w-full">
                <h2 className="text-[24px] md:text-[34px]   Primary-color mb-8">
                    {contactData?.acf?.contact_form_heading}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-[#DDDDDD]  rounded-lg py-3 px-4 text-[1.05rem] focus:outline-none focus:ring-2 focus:ring-[#0065ec] placeholder:text-[#dbdbdb]"
                    />
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="md:w-1/2 border border-[#DDDDDD]  rounded-lg py-3 px-4 text-[1.05rem] focus:outline-none focus:ring-2 focus:ring-[#0065ec] placeholder:text-[#dbdbdb]"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="md:w-1/2 border border-[#DDDDDD]  rounded-lg py-3 px-4 text-[1.05rem] focus:outline-none focus:ring-2 focus:ring-[#0065ec] placeholder:text-[#dbdbdb]"
                        />
                    </div>
                    {/* <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="w-full border border-[#DDDDDD]  rounded-lg py-3 px-4 text-[1.05rem] focus:outline-none focus:ring-2 focus:ring-[#0065ec] placeholder:text-[#dbdbdb]"
                    /> */}
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="3"
                        required
                        className="w-full border border-[#DDDDDD]  rounded-lg py-3 px-4 text-[1.05rem] focus:outline-none focus:ring-2 focus:ring-[#0065ec] placeholder:text-[#dbdbdb]"
                    />
                    <button
                        type="submit"
                        className="w-fit px-7 py-3 bg-[#0065EC]  text-white cursor-pointer text-base rounded-full hover:bg-[#093178] transition"
                    >
                        {contactData?.acf?.contact_form_button}
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form
