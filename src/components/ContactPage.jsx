import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-page container mx-auto p-6">
      {/* Contact Form Section */}
      <section className="contact-form mb-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-6">
          We would love to hear from you! Please fill out the form below to get in touch with us.
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 border">
        <div className = "flex gap-8 items-center mb-8">
            <label htmlFor="name" className="inline-block text-md font-medium mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-4 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              required
            />
        </div>
        <div className = "flex gap-8 items-center mb-8">   
            <label htmlFor="email" className="block text-md font-medium mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-4 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              required
            />
        </div>
        <div className = "flex gap-8 items-center mb-8">  
            <label htmlFor="message" className="block text-md font-medium mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 py-2 px-4 text-base focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              rows="4"
              required
            ></textarea>
        </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="text-lg mb-4">
          If you have any questions, feel free to reach out to us directly:
        </p>
        <p className="text-lg">
          Email: <a href="mailto:contact@yourblog.com" className="text-blue-500">hemanthijjuruthu@gmail.com</a><br />
          Phone: <a href="tel:+1234567890" className="text-blue-500">+91 6305717241</a><br />
          Address: Vizianagram , Andhra Pradesh
        </p>
      </section>

      {/* Additional Information Section */}
      <section className="additional-info mb-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <p className="text-lg mb-4">
          Follow us on social media to stay updated with our latest posts and news:
        </p>
        <div>
          <a href='https://www.linkedin.com/in/hemanth-ijjurouthu-ab9265280/' className="text-blue-500 hover:text-blue-700">LinkedIn</a>
          {/* Add more social links as needed */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
