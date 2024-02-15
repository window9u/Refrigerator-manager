import Table from "../components/Table";
import { useContext } from "react";
import { IngredientContext } from "../ingredientContext";

export default function Home() {
  const arrayData = useContext(IngredientContext);
  return (
    <div>
      <Table
        category="protein"
        ingredients={arrayData.filter((it) => it.category === "protein")}
      />
      <Table
        category="carbohydrate"
        ingredients={arrayData.filter((it) => it.category === "carbohydrate")}
      />
      <Table
        category="vegetable"
        ingredients={arrayData.filter((it) => it.category === "vegetable")}
      />
      <Table
        category="source"
        ingredients={arrayData.filter((it) => it.category === "source")}
      />
      <Table
        category="etc"
        ingredients={arrayData.filter((it) => it.category === "etc")}
      />
    </div>
  );
}
