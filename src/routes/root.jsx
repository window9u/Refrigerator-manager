import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useEffect, useReducer, useMemo } from "react";
import {
  fetchIngredients,
  updateIngredients,
  deleteIngredient,
  createIngredient,
} from "../api";
import {
  IngredientContext,
  IngredientDispatchContext,
} from "../ingredientContext";
function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.ingredients.map((it) => ({
        ...it,
        edit: false,
        select: false,
      }));
    }
    case "CREATE": {
      return [...state, { ...action.new, edit: false, select: false }];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.ingredient.id
          ? { ...action.ingredient, edit: false }
          : it
      );
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.id ? { ...it, edit: !it.edit } : it
      );
    }
    case "SELECT": {
      return state.map((it) =>
        it.id === action.id ? { ...it, select: !it.select } : it
      );
    }
    default: {
      throw new Error("undefined type" + action.type);
    }
  }
}

export default function Root() {
  const [ingredients, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    fetchIngredients()
      .then((data) => {
        dispatch({
          ingredients: data,
          type: "INIT",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const ingredientActions = useMemo(
    () => ({
      handleCreate: (newData) => {
        createIngredient(newData)
          .then((data) => dispatch({ type: "CREATE", new: data }))
          .catch((err) => console.log(err));
      },
      handleDelete: (id) => {
        deleteIngredient(id)
          .then(() => dispatch({ type: "DELETE", id }))
          .catch((err) => console.log(err));
      },
      handleUpdate: (target) => {
        updateIngredients(target)
          .then((data) => dispatch({ type: "UPDATE", ingredient: data }))
          .catch((err) => console.log(err));
      },
      handleEdit: (id) => {
        dispatch({ type: "EDIT", id: id });
      },
      handleSelect: (id) => {
        dispatch({ type: "SELECT", id: id });
      },
    }),
    []
  );

  return (
    <div className="columns">
      <div className="column is-3">
        <SideBar />
      </div>
      <div className="column is-9">
        <IngredientContext.Provider value={ingredients}>
          <IngredientDispatchContext.Provider value={ingredientActions}>
            <Outlet />
          </IngredientDispatchContext.Provider>
        </IngredientContext.Provider>
      </div>
    </div>
  );
}
