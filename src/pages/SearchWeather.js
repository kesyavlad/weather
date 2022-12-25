import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/postsSlice";
import CardWeather from "../components/CardWeather";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const SearchWeather = () => {
  const [input, setInput] = useState("");
  const [displaying, setDisplaying] = useState(false);
  const [status, setStatus] = useState(true);
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.card.value);
  const post = useSelector((state) => state.post.post);
  const search = () => {
    if (input.trim().length > 1) {
      dispatch(getPost(input));
      setDisplaying(true);
    } else {
      setDisplaying(false);
    }
  };
  useEffect(() => {
    if (post.id !== undefined) {
      const dublicate = cards.filter((card) => card.id === post.id);
      if (dublicate.length > 0) {
        setStatus(false);
      } else {
        setStatus(true);
      }
    }
  }, [search]);
  return (
    <>
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <TextField
          id="outlined-basic"
          label="Введіть місто"
          variant="outlined"
          onChange={(event) => setInput(event.target.value)}
        />
        <Button onClick={search}>Search</Button>
        {displaying && post.id !== undefined ? (
          <CardWeather
            nameCity={post.name}
            temp={post.main.temp}
            id={post.id}
            status={status}
          />
        ) : (
          <div>Не знайшли такого міста</div>
        )}
      </div>
    </>
  );
};

export default SearchWeather;
