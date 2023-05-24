export default function TestimonialCard(props) {
  return (
    <artical class="testimonial">
      <img class="testimonial-img" src={props.image} alt={props.name} />
      <blockquote class="testimonial-text">{props.description}</blockquote>
      <p class="testimonial-name">&mdash; {props.name}</p>
    </artical>
  );
}
