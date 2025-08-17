import ComputersCanvas from "./Computer"; // adjust path if needed
import "./home.css";

const Home = () => {
  return (
    <section className="home-section">
      {/* Main content in row: model left, text right */}
      <div className="main-wrapper">
        {/* 3D Model on left */}
        <div className="model-wrapper">
          <ComputersCanvas />
        </div>

        {/* Text content on right */}
        <div className="text-content">
          <h1 className="name fadeInUp">
            Hi, I'm <span className="highlight">Lathika Venkat</span>
          </h1>
          <p className="about fadeInUp" style={{ animationDelay: "0.3s" }}>
            Passionate developer crafting modern <br className="sm:block hidden" />
            web applications with React, Django, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
