"use client";
import BeforFoter from "@/components/AboveFot";
import { useState } from "react";
import {  FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject:"",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or save data)
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#072343]">Get In Touch With Us</h1>
      <p className="text-center text-[#9F9F9F] mb-12 text-[16px] leading-[24px] lg:mx-44 mx-4 md:mx-20 flex justify-center">
      For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!      </p>

      <div className="grid md:grid-cols-2 gap-12">
       

        

        {/* Contact Info */}
        <div className="flex flex-col pl-[10px]  space-y-8">



        <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#072343] text-3xl" />
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-400">Address</p>
              <p className="text-gray-500">123 TechTales Street, Tech City, TC 12345</p>
            </div>
          </div>


          <div className="flex items-center space-x-4">
            <FaPhone className="text-[#072343] text-3xl" />
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-400">Phone</p>
              <p className="text-gray-500">+123 456 7890</p>
            </div>
          </div>

          <div className="flex  space-x-4">
            <IoTime className="text-[#072343] text-3xl" />
            <div>
              <p className="font-semibold text-[#073243]">Working Time</p>
              <p className="text-gray-500">Monday-Friday: 9:00 <br /> - 22:00 <br />
              Saturday-Sunday: 9:00  <br />- 21:00</p>
            </div>
          </div>


        </div>

         {/* Contact Form */}
         <form
          className=" p-8  rounded-lg  "
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full p-3 border rounded-[10px]  focus:outline-none  focus:ring focus:ring-cyan-300"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-300"
              placeholder="Enter your email"
              required
            />
          </div>


          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Subject
            </label>
            <input
              type="subject"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-2 w-full p-3 borderrounded-[10px] focus:outline-none focus:ring focus:ring-cyan-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full p-3 border rounded-[10px] focus:outline-none focus:ring focus:ring-cyan-300"
              placeholder="Type your message here"
              rows={5}
              required
            />
          </div>
          <div className="">
       <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 h-[55px] lg:w-[237px]  rounded-[5px] hover:bg-cyan-700 transition-all duration-300"
          >
            Send Message
          </button>
       </div>
        </form>
      
      </div>
      <BeforFoter/>
    </div>
  );
};

export default ContactPage;
