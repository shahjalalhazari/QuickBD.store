import { BiSearch } from "react-icons/bi";

const HeroSection = () => {
  return (
    <section className="hero-section">

        <h1 className="hero-heading">
          আপনার সব প্রয়োজন,
          <br />
          <span className="">
            এখন এক ঠিকানায়!
          </span>
        </h1>

        <form className="search-box">
          <div className="search-input-wrapper">
            <span>
              <BiSearch className="search-icon"/>
            </span>
            <input 
              name="search" id="search" 
              placeholder="Find Your Needs" 
              className="search-input" 
            />
          </div>
          <button type="submit" className="search-btn quickbd-transition">Search</button>
        </form>

    </section>
  );
};

export default HeroSection;