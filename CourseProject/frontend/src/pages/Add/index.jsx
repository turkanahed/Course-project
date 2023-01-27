import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { loginformSchema } from "../../schema/FormSchema";
import "./style.scss";
const Add = () => {
  const [state, setState] = useState({
    name: "",
    content: "",
    description: "",
    category: "",
    url: "",
    authorUrl: "",
    price: 0,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginformSchema) });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addData = () => {
    if (
      !state.name ||
      !state.content ||
      !state.description ||
      !state.category ||
      !state.url ||
      !state.authorUrl ||
      !state.price
    )
      return;

    axios.post("http://localhost:3333/course", state);
    console.log(state);

    setState({
      name: "",
      content: "",
      description: "",
      category: "",
      url: "",
      authorUrl: "",
      price: 0,
    });
  };

  // const formSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div id="add">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(addData)}>
        <input
          {...register("url")}
          value={state.url}
          type="text"
          name="url"
          id="url"
          placeholder="image url.."
          onChange={(e) => handleChange(e)}
        />
        {errors.url ? (
          <span style={{ color: "red" }}>{errors.url.message}</span>
        ) : (
          <></>
        )}
        <input
          {...register("content")}
          value={state.content}
          type="text"
          name="content"
          id="content"
          placeholder="content.."
          onChange={(e) => handleChange(e)}
        />
        {errors.content ? (
          <span style={{ color: "red" }}>{errors.content.message}</span>
        ) : (
          <></>
        )}
        <input
          {...register("description")}
          value={state.description}
          type="text"
          name="description"
          id="description"
          placeholder="description.."
          onChange={(e) => handleChange(e)}
        />
        {errors.description ? (
          <span style={{ color: "red" }}>{errors.description.message}</span>
        ) : (
          <></>
        )}
        <input
          {...register("authorUrl")}
          value={state.authorUrl}
          type="text"
          name="authorUrl"
          id="authorUrl"
          placeholder="authorUrl.."
          onChange={(e) => handleChange(e)}
        />
        {errors.authorUrl ? (
          <span style={{ color: "red" }}>{errors.authorUrl.message}</span>
        ) : (
          <></>
        )}
        <input
          {...register("name")}
          value={state.name}
          type="text"
          name="name"
          id="name"
          placeholder="name.."
          onChange={(e) => handleChange(e)}
        />
        {errors.name ? (
          <span style={{ color: "red" }}>{errors.name.message}</span>
        ) : (
          <></>
        )}
        <input
          {...register("category")}
          value={state.category}
          type="text"
          name="category"
          id="category"
          placeholder="category.."
          onChange={(e) => handleChange(e)}
        />
        {errors.category ? (
          <span style={{ color: "red" }}>{errors.category.message}</span>
        ) : (
          <></>
        )}
        <input
          {...register("price")}
          value={state.price}
          type="number"
          name="price"
          id="price"
          placeholder="price.."
          onChange={(e) => handleChange(e)}
        />
        {errors.price ? (
          <span style={{ color: "red" }}>{errors.price.message}</span>
        ) : (
          <></>
        )}
        <button>Add</button>
      </form>
    </div>
  );
};

export default Add;
