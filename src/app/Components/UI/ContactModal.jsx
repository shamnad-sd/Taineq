"use client";
import { useState } from "react";
import { ContactEmailTemplate, sendMail, ThankYouEmailTemplate } from '@/app/Mail';
import { siteEmail, siteName } from '@/utils/variable';
import toast from 'react-hot-toast';
import { Waveform } from 'ldrs/react'
import 'ldrs/react/Waveform.css'




function ContactModal({ what, where, contact, onClose , HomePageData }) {

  const [phone, setPhone] = useState(contact || "");
  const [message, setMessage] = useState("");
  const [name, setName] = useState(what || "");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState(where || "");
  const [isLoading, setIsLoading] = useState(false);

  // If user opened from "Let's Talk" mobile, allow inputs empty
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const defaultWhat = isMobile ? "" : what;
  const defaultWhere = isMobile ? "" : where;
  const defaultContact = isMobile ? "" : contact;

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Send to Admin
      await sendMail({
        sendTo: `${siteEmail}`,
        name: "Admin",
        subject: `Contact - ${siteName}`,
        message: await ContactEmailTemplate(name, email, phone, message, location), // Adjust template params as needed
      });

      // Send Thank You to User
      await sendMail({
        sendTo: email,
        name: name,
        subject: `Thank you for contacting ${siteName}`,
        message: await ThankYouEmailTemplate(name),
      });

      setIsLoading(false);
      toast.success("Message sent successfully!");
      // On success, reset all fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setLocation("");
      onClose();
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to send message. Try again!");
      console.error("Error sending emails:", error);
    }
  }

  return (
    <>
      <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-sm px-5">
        <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md relative">
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-3 right-4 text-[#0065EC] text-2xl"
          >
            ×
          </button>
          <h2 className="text-2xl font-semibold mb-4">{HomePageData?.acf?.contact_popup?.popup_heading}</h2>
          <p className="pb-4 text-[#334486] ">{HomePageData?.acf?.contact_popup?.popup_description}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2 rounded border border-[#0065EC]"
              placeholder="Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded border border-[#0065EC]"
              placeholder="Email"
              required
            />
            <input
              type="text"
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="w-full px-4 py-2 rounded border border-[#0065EC]"
              placeholder="Location"
              required
            />
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded border border-[#0065EC]"
              placeholder="Phone Number"
              required
            />
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded border border-[#0065EC]"
              rows={3}
              placeholder="Message"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="border cursor-pointer border-[#0065EC] text-[#0065EC] w-full py-3 rounded-full font-semibold hover:bg-[#0065EC] hover:text-[#fff] transition duration-300"
            >
              {isLoading ?

                <Waveform
                  size="25"
                  stroke="3.5"
                  speed="1"
                  color="#0065EC"
                />
                : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactModal;
