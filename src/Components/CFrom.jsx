import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Phone,
  MapPin,
  Loader2,
  MoveUpRight,
  ArrowRight,
  X,
  Clock,
  CheckCheck,
  AlertTriangle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { MESSAGE_API_ENDPOINT } from "../constant/data";



const CFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setProgressValue(0);

    const progressInterval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4;
      });
    }, 50);

    try {
      // Replace the getform.io URL with your backend API endpoint
      const response = await axios.post(
        `${MESSAGE_API_ENDPOINT}/send`,
        formData
      );

      // Simulate a delay for the progress bar animation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Check the response from the backend
      if (response.data.success) {
        setSubmitStatus("success");
        setNotificationVisible(true);

        // Clear the form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(response.data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setNotificationVisible(true);
    } finally {
      setIsSubmitting(false);
      clearInterval(progressInterval);
      setProgressValue(100);
      setTimeout(() => {
        setNotificationVisible(false);
        setTimeout(() => setSubmitStatus(null), 300);
      }, 8000);
    }
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleDismissNotification = () => {
    setNotificationVisible(false);
    setTimeout(() => setSubmitStatus(null), 300);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Contact Info Section */}
        <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white flex flex-col justify-between relative overflow-hidden group">
          {/* Background pattern */}
          <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-150"></div>
          <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-white/5 transition-transform duration-700 group-hover:scale-150"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-6 group-hover:translate-x-1 transition-transform duration-300">
              Contact Information
            </h3>
            <p className="text-indigo-100 mb-8 group-hover:translate-x-1 transition-transform duration-300 delay-75">
              Fill up the form and I'll get back to you within 4 hours...
            </p>

            <div className="space-y-4">
              <a
                href="tel:+923490393306" target="_blank"
                className="flex items-center gap-4 group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 rounded-full bg-indigo-500/30 flex items-center justify-center group-hover/item:bg-white/20 group-hover/item:scale-110 transition-all duration-300">
                  <Phone size={18} className="text-white"  />
                </div>
                <span className="text-sm group-hover/item:translate-x-1 transition-transform duration-300">
                  +92 349 0393306
                </span>
              </a>
              <a
                href="https://wa.me/+923490393306"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 rounded-full bg-indigo-500/30 flex items-center justify-center group-hover/item:bg-white/20 group-hover/item:scale-110 transition-all duration-300">
                  <FaWhatsapp size={18} className="text-white" />
                </div>
                <span className="text-sm group-hover/item:translate-x-1 transition-transform duration-300">
                  +92 305 2879926 (WhatsApp)
                </span>
              </a>
              <a
                href="mailto:Khadimalisoomro33@gmail.com" target="_blank"
                className="flex items-center gap-2 group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 rounded-full bg-indigo-500/30 flex items-center justify-center group-hover/item:bg-white/20 group-hover/item:scale-110 transition-all duration-300">
                  <Mail size={18} className="text-white" />
                </div>
                <span className="text-sm group-hover/item:translate-x-1 transition-transform duration-300">
                  Khadimalisoomro33@gmail.com
                </span>
              </a>

              <span
                className="flex items-center gap-4 group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 rounded-full bg-indigo-500/30 flex items-center justify-center group-hover/item:bg-white/20 group-hover/item:scale-110 transition-all duration-300">
                  <MapPin size={18} className="text-white" />
                </div>
                <span className="text-sm group-hover/item:translate-x-1 transition-transform duration-300">
                  Pakistan
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:col-span-3 p-8 group">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
            Send a Message
            <MoveUpRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300"
            />
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div
              className={`relative ${
                focusedInput === "name" ? "scale-[1.02]" : ""
              } transition-all duration-300`}
            >
              <div
                className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${
                  focusedInput === "name"
                    ? "text-indigo-600 scale-110"
                    : "text-indigo-500"
                } transition-all duration-300`}
              >
                <User size={18} />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                placeholder="Your Name"
                required
                className="w-full pl-10 pr-4 py-3 text-primary dark:text-secondary  bg-gray-100 dark:bg-gray-700/50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500  placeholder-gray-500 dark:placeholder-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              />
            </div>

            <div
              className={`relative ${
                focusedInput === "email" ? "scale-[1.02]" : ""
              } transition-all duration-300`}
            >
              <div
                className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${
                  focusedInput === "email"
                    ? "text-indigo-600 scale-110"
                    : "text-indigo-500"
                } transition-all duration-300`}
              >
                <Mail size={18} />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                placeholder="Your Email"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700/50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 text-primary dark:text-secondary placeholder-gray-500 dark:placeholder-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              />
            </div>

            <div
              className={`relative ${
                focusedInput === "phone" ? "scale-[1.02]" : ""
              } transition-all duration-300`}
            >
              <div
                className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${
                  focusedInput === "phone"
                    ? "text-indigo-600 scale-110"
                    : "text-indigo-500"
                } transition-all duration-300`}
              >
                <Phone size={18} />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus("phone")}
                onBlur={handleBlur}
                placeholder="Your Phone (optional)"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700/50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 text-primary dark:text-secondary placeholder-gray-500 dark:placeholder-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              />
            </div>

            <div
              className={`relative ${
                focusedInput === "message" ? "scale-[1.02]" : ""
              } transition-all duration-300`}
            >
              <div
                className={`absolute top-3 left-0 flex items-center pl-3 pointer-events-none ${
                  focusedInput === "message"
                    ? "text-indigo-600 scale-110"
                    : "text-indigo-500"
                } transition-all duration-300`}
              >
                <MessageSquare size={18} />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700/50 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 text-primary dark:text-secondary placeholder-gray-500 dark:placeholder-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              ></textarea>
            </div>

            <div>
              {/* Submit button with progress indicator */}
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] shadow-md hover:shadow-lg disabled:opacity-90 group/btn overflow-hidden"
                >
                  {isSubmitting && (
                    <div 
                      className="absolute bottom-0 left-0 h-1 bg-white/70" 
                      style={{ width: `${progressValue}%`, transition: 'width 0.2s ease-out' }}
                    ></div>
                  )}
                  
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span className="relative">
                        Sending...
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <span className="relative">
                        Send Message
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover/btn:w-full transition-all duration-300"></span>
                      </span>
                      <ArrowRight
                        size={16}
                        className="opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300"
                      />
                    </>
                  )}
                </button>
              </div>

              {/* Success notification */}
              {submitStatus === "success" && (
                <div 
                  className={`mt-6 rounded-xl overflow-hidden shadow-lg border border-green-200 dark:border-green-900/30 transform transition-all duration-300 ${
                    notificationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex items-stretch">
                    {/* Left accent color bar */}
                    <div className="w-2 bg-gradient-to-b from-green-400 to-green-600"></div>
                    
                    <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          {/* Icon with pulse effect */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping opacity-75"></div>
                            <div className="relative bg-green-100 dark:bg-green-800/70 rounded-full p-2 text-green-600 dark:text-green-400">
                              <CheckCheck size={20} className="animate-[bounceIn_0.5s_ease-out]" />
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-green-800 dark:text-green-400 flex items-center gap-1.5">
                              Message Sent Successfully
                              <span className="inline-block animate-[bounceIn_0.6s_ease-out]">🎉</span>
                            </h4>
                            <p className="text-sm text-green-700 dark:text-green-300 mt-1 max-w-xs">
                              Thanks for reaching out! I'll get back to you as soon as possible.
                            </p>
                          </div>
                        </div>
                        
                        {/* Close button */}
                        <button 
                          onClick={handleDismissNotification}
                          className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 transition-colors p-1 rounded-full hover:bg-green-200 dark:hover:bg-green-800/50"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full h-1 bg-green-200 dark:bg-green-800/50 rounded-full mt-3 overflow-hidden">
                        <div className="h-full bg-green-500 dark:bg-green-400 rounded-full w-full animate-[linearProgress_8s_linear_1]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Error notification */}
              {submitStatus === "error" && (
                <div 
                  className={`mt-6 rounded-xl overflow-hidden shadow-lg border border-red-200 dark:border-red-900/30 transform transition-all duration-300 ${
                    notificationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex items-stretch">
                    {/* Left accent color bar */}
                    <div className="w-2 bg-gradient-to-b from-red-400 to-red-600"></div>
                    
                    <div className="flex-1 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-3">
                          {/* Icon with shake effect */}
                          <div className="bg-red-100 dark:bg-red-800/70 rounded-full p-2 text-red-600 dark:text-red-400 animate-[shakeX_0.5s_ease-in-out]">
                            <AlertTriangle size={20} />
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-red-800 dark:text-red-400">Something went wrong</h4>
                            <p className="text-sm text-red-700 dark:text-red-300 mt-1 max-w-xs">
                              Please try submitting again or contact me directly via email.
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                              <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="text-xs px-3 py-1 bg-red-200 dark:bg-red-800/80 text-red-800 dark:text-red-200 rounded hover:bg-red-300 dark:hover:bg-red-700 transition-colors flex items-center gap-1"
                              >
                                <Clock size={12} />
                                Try Again
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Close button */}
                        <button 
                          onClick={handleDismissNotification}
                          className="text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors p-1 rounded-full hover:bg-red-200 dark:hover:bg-red-800/50"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full h-1 bg-red-200 dark:bg-red-800/50 rounded-full mt-3 overflow-hidden">
                        <div className="h-full bg-red-500 dark:bg-red-400 rounded-full w-full animate-[linearProgress_8s_linear_1]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CFrom;
