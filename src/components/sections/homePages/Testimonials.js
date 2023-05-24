import TestimonialCard from "./components/TestimonialCard";
import Customer1 from "../../../assets/avatar/customer-1.jpg";
import Customer2 from "../../../assets/avatar/customer-2.jpg";
import Customer3 from "../../../assets/avatar/customer-3.jpg";
import Customer4 from "../../../assets/avatar/customer-4.jpg";

export default function Testimonials() {
  return (
    <section className="section-testimonials">
      <h1 className="section-heading">Testimonials</h1>
      <div className="testimonial-content">
        <TestimonialCard
          image={Customer1}
          name="Micheal Caldwell"
          description="This is the best Mediterranean food that I've ever had! I will comeback"
        />
        <TestimonialCard
          image={Customer2}
          name="Alan Chen"
          description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."
        />
        <TestimonialCard
          image={Customer3}
          name="Casey Lau"
          description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."
        />
        <TestimonialCard
          image={Customer4}
          name="John Rosenblum"
          description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."
        />
      </div>
    </section>
  );
}
