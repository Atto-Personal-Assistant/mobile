import { Home, Train, Use } from "../pages";

const routes = [
  {
    name: "Home",
    component: Home,
    options: {
      title: "Início",
      // headerShown: false,
    },
  },
  {
    name: "Train",
    component: Train,
    options: {
      title: "Treino",
    },
  },
  {
    name: "Use",
    component: Use,
    options: {
      title: "Usar",
    },
  },
];

export { routes };
