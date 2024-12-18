import aboutImg from "../images/aboutImg.jpg";

const About = () => {
  return (
    <div className="about-us">
      <section className="about-section">
        <h1 className="about-title">Little Lemon</h1>
        <h4>Chicago</h4>
        <p className="about-subtext">
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people of Chicago. The two
          brothers continue to oversee the Little Lemon restaurant, nearly
          thirty years later.
        </p>
        <div>
          <img className="about-img" src={aboutImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
