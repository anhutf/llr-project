import MealCard from "./components/MealCard";
import GreekSalad from "../../../assets/greek-salad.webp";
import Bruschetta from "../../../assets/bruschetta.jpeg";
import LemonDessert from "../../../assets/lemon-dessert.webp";

export default function Meals() {
  return (
    <section className="section-meals">
      <MealCard
        image={GreekSalad}
        title="Greek Salad"
        description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."
      />
      <MealCard
        image={Bruschetta}
        title="Bruschetta"
        description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."
      />
      <MealCard
        image={LemonDessert}
        title="Lemon Dessert"
        description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."
      />
    </section>
  );
}
