import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/postsSlice";
import {
  addCardWeather,
  deleteCardWeather,
  updateCardWeather,
} from "../Redux/counterSlice";
import InfoCardWeather from "./InfoCardWeather";

const CardWeather = ({ nameCity, temp, id, status }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const post = useSelector((state) => state.post.post);
  const update = () => {
    dispatch(getPost(nameCity));
  };

  useEffect(() => {
    if (post.id !== undefined) {
      const temprich = post.main.temp;
      const idTest = post.id;
      dispatch(updateCardWeather({ idTest, temprich }));
    }
  }, [post]);

  const add = () => {
    dispatch(addCardWeather({ nameCity, temp, id }));
  };
  const deleteCard = (id) => {
    dispatch(deleteCardWeather({ id }));
  };
  const change = () => {
    setOpen(true);
  };
  return (
    <>
      <Card sx={{ maxWidth: 275 }}>
        <CardActionArea onClick={change}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {nameCity}
            </Typography>
            <Typography variant="body2">{temp}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" onClick={update}>
            Update
          </Button>
          {status ? (
            <Button size="small" onClick={add}>
              Add
            </Button>
          ) : (
            <Button size="small" onClick={() => deleteCard(id)}>
              Delete
            </Button>
          )}
        </CardActions>
        {open ? (
          <InfoCardWeather open={open} setOpen={setOpen} nameCity={nameCity} />
        ) : (
          <div></div>
        )}
      </Card>
    </>
  );
};

export default CardWeather;
