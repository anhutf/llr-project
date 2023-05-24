import { Link } from "react-router-dom";
export default function CallToAction() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading">Little Lemon Chicago</h1>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <Link className="action-button" to="/booking">
            Reserve a table
          </Link>
        </div>
        <div className="hero-img-box">
          <img
            className="hero-img"
            src={require("../../../assets/food2.jpeg")}
            alt="Little Lemon Restaurant"
          ></img>
        </div>
      </div>
    </section>
  );
}
