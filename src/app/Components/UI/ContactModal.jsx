import { useState } from "react";

function ContactModal({ what, where, onClose }) {
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // If user opened from "Let's Talk" mobile, allow inputs empty
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const defaultWhat = isMobile ? "" : what;
  const defaultWhere = isMobile ? "" : where;

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted!");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-700 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Contact Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={defaultWhat || what}
            onChange={e => setWhat(e.target.value)}
            className="w-full px-4 py-2 rounded border bg-gray-100"
            placeholder="What? (Type of equipment)"
            required
          />
          <input
            type="text"
            value={defaultWhere || where}
            onChange={e => setWhere(e.target.value)}
            className="w-full px-4 py-2 rounded border bg-gray-100"
            placeholder="Where (Location)"
            required
          />
          <input
            type="tel"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full px-4 py-2 rounded border"
            placeholder="Phone Number"
          />
          <input
            type="text"
            required
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className="w-full px-4 py-2 rounded border"
            placeholder="Subject"
          />
          <textarea
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full px-4 py-2 rounded border"
            rows={3}
            placeholder="Message"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal
