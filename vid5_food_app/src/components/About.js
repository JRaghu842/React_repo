const About = () => {
  return (
    <div>
      <section>
        <h1>This is About page for Foodvilla company pvt LTD.</h1>
        <p>Hello! wellcome to the world of food, Just EAT and repEAT 😋</p>
      </section>
      <section>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality products/services that meet the
          needs of our customers while maintaining a commitment to
          sustainability and social responsibility.
        </p>
      </section>
      <section>
        <h2>Our Values</h2>
        <ul>
          <li>Customer Satisfaction</li>
          <li>Integrity and Transparency</li>
          <li>Innovation</li>
          <li>Community Engagement</li>
        </ul>
      </section>
      <div>
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="john-doe.jpg" alt="John Doe - CEO" />
          <h3>John Doe</h3>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="jane-smith.jpg" alt="Jane Smith - CTO" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </div>
        <div className="team-member">
          <img src="alice-johnson.jpg" alt="Alice Johnson - CFO" />
          <h3>Alice Johnson</h3>
          <p>CFO</p>
        </div>
      </div>
    </div>
  );
};

export default About;
