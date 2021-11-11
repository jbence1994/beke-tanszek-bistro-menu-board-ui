import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "./common/button";

import { deleteMeals } from "../services/mealService";

const DeleteMealsForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      deleteMeals();
      toast.success(`Sikeresen törölte a teljes napi menüt!`, {
        position: "top-left",
      });
      setInterval(() => window.location.reload(), 1000);
    } catch (e) {
      toast.error("Napi menü teljes törlése sikertelen!", {
        position: "top-left",
      });
    }
  };

  return (
    <React.Fragment>
      <form noValidate>
        <Button
          classes="btn btn-danger"
          onSubmit={handleSubmit}
          text="Teljes napi menü törlése"
        />
      </form>
    </React.Fragment>
  );
};

export default DeleteMealsForm;
