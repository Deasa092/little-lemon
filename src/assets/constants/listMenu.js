import { bruchettas, cheesecakeLemon, greekSalads } from "./listImage";

export const specialMenus = [
  {
    name: "Greek Salad",
    price: "$12.99",
    desc: "A refreshing mix of crispy lettuce, peppers, kalamata olives, and feta cheese, tossed in our signature lemon-olive dressing.",
    image : greekSalads
  },
  {
    name: "Bruschetta al Pomodoro",
    price: "$6.99",
    desc: "Toasted rustic bread topped with ripe cherry tomatoes, garlic, basil, and a drizzle of extra virgin olive oil.",
    image: bruchettas
  },
  {
    name: "Lemon Ricotta Cheesecake",
    price: "$7.50",
    desc: "A creamy ricotta cheesecake infused with fresh lemon zest and drizzled with a light honey glaze.",
    image: cheesecakeLemon
  },
];
