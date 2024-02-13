import Table from "../components/Table";
import {
  getIngredients,
  postEditIngredients,
  postDeleteIngredients,
  postCreateIngredients,
} from "../api";
import { useEffect, useState } from "react";

export default function Home() {
  const [ingredients, setIngredients] = useState({});
  useEffect(() => {
    getIngredients()
      .then((arrayData) => {
        const categorizedIngredients = arrayData.reduce((dict, cur) => {
          if (!dict[cur.category]) {
            dict[cur.category] = [];
          }
          dict[cur.category].push(cur);
          return dict;
        }, {});
        setIngredients(categorizedIngredients);
      })
      .catch((err) => console.log(err));
  }, []);

  const onDelete = async (data) => {
    await postDeleteIngredients(data).then(() => {
      const category = data.category;
      const newData = ingredients[category].filter((it) => it.id !== data.id);
      setIngredients({ ...ingredients, [category]: newData });
    });
  };

  const onCreate = async (data) => {
    await postCreateIngredients(data).then((ingredient) => {
      const category = ingredient.category;
      const prevIngredients = JSON.parse(JSON.stringify(ingredients[category]));
      console.log(prevIngredients);
      const newData = [...prevIngredients, ingredient];
      setIngredients({ ...ingredients, [category]: newData });
    });
  };

  const onEdit = async (data) => {
    const category = data.category;
    await postEditIngredients(data).then(() => {
      const newData = ingredients[category].map((it) => {
        if (it.id === data.id) {
          return data;
        } else {
          return it;
        }
      });
      setIngredients({ ...ingredients, [category]: newData });
    });
  };

  return (
    <div>
      {Object.entries(ingredients).map(([category, val]) => (
        <Table
          key={category}
          category={category}
          ingredients={val}
          onDelete={onDelete}
          onCreate={onCreate}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
