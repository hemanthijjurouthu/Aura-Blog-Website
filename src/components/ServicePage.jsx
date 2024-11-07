import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications using the latest technologies.',
    icon: '🌐',
  },
  {
    title: 'Content Creation',
    description: 'Creating engaging content for blogs, social media, and marketing campaigns.',
    icon: '✍️',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines through proven SEO strategies.',
    icon: '📈',
  },
  {
    title: 'Graphic Design',
    description: 'Designing stunning graphics for web and print media.',
    icon: '🎨',
  },
  {
    title: 'Social Media Management',
    description: 'Managing and growing your social media presence to engage with your audience effectively.',
    icon: '📱',
  },
  {
    title: 'Email Marketing',
    description: 'Creating and executing email marketing campaigns to boost your business reach and engagement.',
    icon: '📧',
  },
];

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="text-6xl mb-4">{service.icon}</div>
            <h2 className="text-gray-900">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
