import React from "react";
import { IExercise } from "../ts/IExercise";
import { useForm } from "react-hook-form";
import InputExercise from "./UPI/InputExercise";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { exerciseApi } from "../services/exerciseService";
import { userApi } from "../services/userService";

const AddExercise = () => {
  const [group, setGroup] = React.useState<string[]>([]);
  const { register, handleSubmit } = useForm<IExercise>({
    defaultValues: {
      id: String(Date.now()),
      name: "",
      group: "",
      complexity: "",
    },
  });

  const submit = (data: IExercise) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("group", data.group);
    formData.append("complexity", data.complexity);
    // createExercise(formData);
  };
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div className="inputBlock">
        <div>
          Name:
          <input
            id="standard-basic"
            className="inputForm"
            type="text"
            {...register("name")}
          />
        </div>
        <InputExercise
          {...register("group")}
          group={group}
          setGroup={setGroup}
          names={["breast", "back", "legs"]}
          chip={"group"}
        />
        <div>
          <InputLabel id="demo-simple-select-label">Complexity:</InputLabel>
          <Select
            defaultValue={"Easy"}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            {...register("complexity")}
            label="Complexity"
          >
            <MenuItem value={"Easy"}>Easy</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Hard"}>Hard</MenuItem>
          </Select>
        </div>
      </div>
      <button>Add</button>
    </form>
  );
};

export default AddExercise;
