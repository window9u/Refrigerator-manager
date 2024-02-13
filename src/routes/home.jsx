import Table from "../components/Table";
import { getIngredients } from "../api";
import { useEffect, useState } from "react";

export default function Home() {
  const [ingredients, setIngredients] = useState({});
  useEffect(() => {
    const getData = async () => {
      const arrayData = await getIngredients();
      const categorizedIngredients = arrayData.reduce((dict, cur) => {
        if (!dict[cur.category]) {
          dict[cur.category] = [];
        }
        dict[cur.category].push(cur);
        return dict;
      }, {});
      setIngredients(categorizedIngredients);
    };
    getData();
  }, []);

  const onDelete = (data) => {
    const category = data.category;
    const newData = ingredients[category].filter((it) => it.id !== data.id);
    setIngredients({ ...ingredients, [category]: newData });
  };
  const onCreate = (data) => {
    const category = data.category;
    const newData = ingredients[category].push(data);
    setIngredients({ ...ingredients, [category]: newData });
  };
  const onEdit = (data) => {
    const category = data.category;
    const newData = ingredients[category].map((it) => {
      if (it.id === data.id) {
        return data;
      } else {
        return it;
      }
    });
    setIngredients({ ...ingredients, [category]: newData });
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
