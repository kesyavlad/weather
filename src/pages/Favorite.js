import React from "react";
import { useSelector } from "react-redux";
import CardWeather from "../components/CardWeather";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
const Favorite = () => {
  const cards = useSelector((state) => state.card.value);

  return (
    <div>
      {cards.length > 0 ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 16 }}
            style={{ marginTop: "10px" }}
          >
            {cards.map((card) => (
              <Grid item xs={2} sm={4} md={4} key={card.id}>
                <CardWeather
                  key={card.id}
                  nameCity={card.city}
                  id={card.id}
                  temp={card.temp}
                  status={false}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <div>Вибачте але пока нема збережених карток</div>
      )}
    </div>
  );
};

export default Favorite;
