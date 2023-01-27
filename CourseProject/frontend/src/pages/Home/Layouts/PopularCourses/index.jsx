import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../../../components/Card";
import "./style.scss";
import { FiChevronDown } from "react-icons/fi";
import { TfiSearch } from "react-icons/tfi";

const PopularCourses = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [sorted, setSorted] = useState({
    sorted:"price",
    reversed:false,
  })


  //! get all
  const getData = async () => {
    const res = await axios.get("http://localhost:3333/course");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  //! Delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3333/course/${id}`);
    getData();
  };

  //!Sort
  const sortData = () => {
    setSorted({ sorted: "price", reversed: !sorted.reversed });

    data.sort((a, b) => {
      if (sorted.reversed) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setData(data);
  };

  //!Search
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div id="courses">
      <span id="line"></span>
      <h1>Popular Courses</h1>
      <div onClick={sortData} className="sort">
        Sort by price
        <span>
          <FiChevronDown />
        </span>
      </div>
      <form>
        <input onChange={handleChange} type="text" placeholder="Search.." />
        <span>
          <TfiSearch />
        </span>
      </form>
      <div className="container">
        <div className="row">
          {data &&
            data
            ?.filter((data)=>{
              return value.trim().toLowerCase() === ""
                ? data
                : data.name.toLowerCase().includes(value.toLowerCase());
            })
            .map((item) => (
              <Card
                key={item._id}
                name={item.name}
                price={item.price}
                url={item.url}
                authorUrl={item.authorUrl}
                category={item.category}
                description={item.description}
                content={item.content}
                id={item._id}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
