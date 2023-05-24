import { Link } from "react-router-dom";

export default function MealCard(props) {
  return (
    <article class="meal">
      <img src={props.image} class="meal-img" alt={props.title} />
      <div class="meal-content">
        <h3 class="meal-title">{props.title}</h3>
        <p className="meal-description">{props.description}</p>
        <Link className="order-button" to="/booking">
          Order
        </Link>
      </div>
    </article>
  );
}
