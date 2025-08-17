import React from "react";
import "./project.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Project() {
  return (
    <div className="projects-container">
      {/* Employee Management */}
      <div className="project-box left">
        <h2>Employee Management</h2>

        {/* Image Slider */}
        <div className="slider-container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src="/1.png" alt="Employee Dashboard" /></SwiperSlide>
            <SwiperSlide><img src="/2.png" alt="Employee List" /></SwiperSlide>
            <SwiperSlide><img src="/3.png" alt="Employee Charts" /></SwiperSlide>
            <SwiperSlide><img src="/4.png" alt="Employee Charts" /></SwiperSlide>
            <SwiperSlide><img src="/5.png" alt="Employee Charts" /></SwiperSlide>
            <SwiperSlide><img src="/6.png" alt="Employee Charts" /></SwiperSlide>
            <SwiperSlide><img src="/7.png" alt="Employee Charts" /></SwiperSlide>
            <SwiperSlide><img src="/8.png" alt="Employee Charts" /></SwiperSlide>
            <SwiperSlide><img src="/9.png" alt="Employee Charts" /></SwiperSlide>
          </Swiper>
        </div>

        <h3>Tech Stack:</h3>
        <ul>
          <li>Frontend: React</li>
          <li>Backend: Django, Django REST Framework</li>
          <li>Other: Chart.js, CSS</li>
        </ul>

        <h3>Features:</h3>
        <ul>
          <li>Role-based navbar restriction (Manager, Tester, Developer, HR, Team Lead)</li>
          <li>List of employees with feedback & ratings from Team Lead</li>
          <li>Leave approval forms and leave list</li>
          <li>Charts for leave records & employee ratings</li>
          <li>Bug list, bug tracker & bug history in chat-like view</li>
          <li>Pagination support for large lists</li>
        </ul>

        {/* Neon View Button */}
        <div className="btn-container">
          <button className="neon-btn">
            <a href="https://github.com/lathikavenkat17/Employee-Management" target="_blank" rel="noopener noreferrer" className="normal-btn">
                View
            </a>
          </button>
        </div>
      </div>

      {/* NutriNest */}
      <div className="project-box right">
        <h2>NutriNest</h2>

        {/* Image Slider */}
        <div className="slider-container">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide><img src="/06.png" alt="NutriNest Dashboard" /></SwiperSlide>
            <SwiperSlide><img src="/07.png" alt="Nutrition Tracker" /></SwiperSlide>
            <SwiperSlide><img src="/01.png" alt="Diet Chatbot" /></SwiperSlide>
            <SwiperSlide><img src="/02.png" alt="Diet Chatbot" /></SwiperSlide>
            <SwiperSlide><img src="/03.png" alt="Diet Chatbot" /></SwiperSlide>
            <SwiperSlide><img src="/04.png" alt="Diet Chatbot" /></SwiperSlide>
            <SwiperSlide><img src="/05.png" alt="Diet Chatbot" /></SwiperSlide>
          </Swiper>
        </div>

        <h3>Tech Stack:</h3>
        <ul>
          <li>Frontend: React</li>
          <li>Backend: Django, Django REST Framework</li>
          <li>Other: CSS</li>
        </ul>

        <h3>Features:</h3>
        <ul>
          <li>Authentication & session management</li>
          <li>AI-powered recipe generator</li>
          <li>Nutrition tracker (Carbs, Protein, Fat)</li>
          <li>Personalized diet tracking</li>
          <li>Chatbot suggesting food based on diet type</li>
          <li>Progress Bar</li>
          <li>Data filtering based on date.</li>
        </ul>

        {/* Neon View Button */}
        <div className="btn-container">
          <button className="neon-btn">
            <a href="https://github.com/lathikavenkat17/Nutrinest" target="_blank" rel="noopener noreferrer" className="normal-btn">
                View
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
