import React, { useEffect } from "react";
import { Grid, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../Redux/postsSlice";

const InfoCardWeather = ({ open, setOpen, nameCity }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const post = useSelector((state) => state.post.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(nameCity));
  }, [open]);

  const handleClose = () => setOpen(false);

  return (
    <div>
      {post.id !== undefined ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {post.name} {post.main.temp}
              {"\u00b0"}C
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Відчувается як : {post.main.feels_like}
              {"\u00b0"}C
            </Typography>
            <Grid
              container
              spacing={2}
              columns={16}
              style={{ marginLeft: "0px" }}
            >
              <Grid xs={8}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Min : {post.main.temp_min}
                  {"\u00b0"}C
                </Typography>
              </Grid>
              <Grid xs={8}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Max : {post.main.temp_max}
                  {"\u00b0"}C
                </Typography>
              </Grid>
            </Grid>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Погода: {post.weather[0].description}
            </Typography>
          </Box>
        </Modal>
      ) : null}
    </div>
  );
};

export default InfoCardWeather;
