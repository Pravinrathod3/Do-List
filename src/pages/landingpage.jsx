import React, { useState } from 'react';
import { Star, Send, Users, Calendar, FileText, X, Heart } from 'lucide-react';
import Features from '../components/features';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import IMge from '../assets/mobileimage.jpg'
import Testimonial from '../components/testimonial';

export default function TodoLandingPage() {

  const [showPopup, setShowPopup] = useState(false);


  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({

    firstName: '',
    lastName: '',
    gender: '',
    languages: [],
    email: '',
    agreeTerms: false
  });
  const [submittedUsers, setSubmittedUsers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };



  const handleLanguageChange = (language) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(lang => lang !== language)
        : [...prev.languages, language]
    }));
  };
  const handleSubmit = () => {
    if (formData.agreeTerms && formData.firstName && formData.lastName && formData.email && formData.gender && formData.languages.length > 0) {
      const newUser = {
        name: `${formData.firstName} ${formData.lastName}`,
        gender: formData.gender,

        language: formData.languages.join(', '),
        email: formData.email
      };
      setSubmittedUsers(prev => [...prev, newUser]);
      setShowPopup(false);
      setShowThankYou(true);
      
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        languages: [],
        email: '',
        agreeTerms: false
      });
    }
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  const features = [
    {
      id: '01',
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: 'User-Friendly Interface',
      description: 'Our platform offers seamless task management to boost your efficiency.'
    },
    {
      id: '02',
      icon: <Send className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: 'Collaborate & Share Effortlessly',
      description: 'Invite team members to work together and achieve your goals faster.'
    },
    {
      id: '03',
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: 'Effortless Collaboration',
      description: 'Invite team members to work together and achieve your goals faster.'
    },
    {
      id: '04',
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />,
      title: 'Seamless Access',
      description: 'Stay connected and manage your tasks on the go with ease.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {(showPopup || showThankYou) && (
        <div className="fixed inset-0 backdrop-blur-sm bg-transparent z-40"></div>

      )}
      
      <Navbar />

      <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 mb-4 sm:mb-6 leading-tight">
              Simplify Your Life with Our Todo App
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
              Stay organized and boost your productivity with our intuitive todo website. Experience a modern approach to task management that fits your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button


                onClick={() => setShowPopup(true)}
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </button>


              <button className="w-full sm:w-auto flex items-center justify-center border-2 border-red-600 hover:border-gray-400 hover:bg-gray-50 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Transform Your Productivity with Our
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-4 sm:mb-6">
              Innovative To-Do List Features
            </h3>
          </div>
          
          <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {features.map((feature) => (
                  <div key={feature.id} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-gray-300 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                      {feature.id}
                    </div>
                    
                    <div className="mb-3 sm:mb-4">
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-2 sm:mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    
                    <div className="w-6 sm:w-8 h-0.5 bg-red-500 mb-3 sm:mb-4"></div>
                    
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={IMge} 
                alt="Mobile app interface"
                className="shadow-lg w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Start Organizing Your Life Today
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Join us now and transform your productivity with our intuitive to-do list platform!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Sign up
                </button>
                <button 
                  onClick={() => setShowPopup(true)}
                  className="w-full sm:w-auto border-2 border-red-500 hover:bg-red-50 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {submittedUsers.length > 0 && (
        <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Recent Signups</h3>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  <div className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 bg-gray-100 font-semibold text-gray-700 text-sm sm:text-base">
                    <div>Name</div>
                    <div>Gender</div>
                    <div>Language</div>
                    <div className="hidden sm:block">Email</div>
                    <div className="sm:hidden">Email</div>
                  </div>
                  {submittedUsers.map((user, index) => (
                    <div key={index} className="grid grid-cols-4 gap-2 sm:gap-4 p-3 sm:p-4 border-b border-gray-100 hover:bg-gray-50 text-sm sm:text-base">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2 sm:mr-3" />
                        <span className="truncate">{user.name}</span>
                      </div>
                      <div className="truncate">{user.gender}</div>
                      <div className="truncate">{user.language}</div>
                      <div className="truncate">{user.email}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 max-w-md w-full max-h-screen overflow-y-auto relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 pr-8">Get Started Today!</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Fill in your details and take control of your tasks.</p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="w-full p-2 sm:p-3 bg-red-50 border border-red-100 rounded focus:outline-none focus:ring-2 focus:ring-red-200 text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="w-full p-2 sm:p-3 bg-red-50 border border-red-100 rounded focus:outline-none focus:ring-2 focus:ring-red-200 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <div className="flex gap-4 sm:gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleInputChange}
                      className="mr-2 text-red-500"
                      required
                    />
                    <span className="text-sm sm:text-base">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={handleInputChange}
                      className="mr-2 text-red-500"
                      required
                    />
                    <span className="text-sm sm:text-base">Female</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <div className="space-y-2">
                  {['English', 'Hindi', 'Marathi'].map((lang) => (
                    <label key={lang} className="flex items-center p-2 bg-red-50 rounded">
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(lang)}
                        onChange={() => handleLanguageChange(lang)}
                        className="mr-3 text-red-500"
                      />
                      <span className="text-sm sm:text-base">{lang}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full p-2 sm:p-3 bg-red-50 border border-red-100 rounded focus:outline-none focus:ring-2 focus:ring-red-200 text-sm sm:text-base"
                  required
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mr-3 mt-1 text-red-500"
                  required
                />
                <label className="text-xs sm:text-sm text-gray-600">
                  I agree to the <span className="text-red-500 cursor-pointer">terms and conditions</span>
                </label>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 sm:py-3 rounded font-semibold text-base sm:text-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-sm w-full mx-4 text-center">
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Thank you for connecting with us.</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Our team will be contacting you soon</p>
            <button

              onClick={closeThankYou}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 sm:py-3 rounded font-semibold transition-colors"
            >

              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}