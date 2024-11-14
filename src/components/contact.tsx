import React, { useState } from "react";

export function Contact({isContactOpen,setIsContactOpen}:any) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("message", message);

      // Replace the URL with your actual Getform endpoint
      const response = await fetch("https://getform.io/f/akkknnna", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Trigger Button */}
    
      {/* Modal Overlay */}
      {isContactOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10"
          onClick={() => setIsContactOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent close on click inside modal
          >
            <header className="flex justify-between items-center border-b pb-4">
              <h2 className="text-2xl font-semibold text-teal-700">Contact Me</h2>
              <button
                onClick={() => setIsContactOpen(false)}
                className="text-gray-500 hover:text-gray-800 transition"
              >
                &#10005;
              </button>
            </header>

            <p className="mt-4 text-gray-600">
              Send me an email directly from here!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white p-2 rounded w-full hover:bg-teal-700 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
              {success && (
                <p className="text-green-600 mt-2">Message sent successfully!</p>
              )}
              {error && (
                <p className="text-red-600 mt-2">
                  Failed to send the message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
