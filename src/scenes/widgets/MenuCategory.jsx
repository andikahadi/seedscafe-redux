import { useSelector } from "react-redux";
import { Box, Typography, Grid } from "@mui/material";

import MenuCategoryCard from "./MenuCategoryCard";

const MenuCategory = () => {
  const fullMenu = useSelector((state) => state.fullMenu);

  const menuCategoryData = fullMenu.reduce((finalArray, current) => {
    let obj = finalArray.find((item) => item.category === current.category);
    if (obj) {
      return finalArray;
    } else {
      return finalArray.concat([current]);
    }
  }, []);

  console.log(menuCategoryData);
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="2rem"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4">Menu Category</Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {menuCategoryData.map((data) => {
            return (
              <MenuCategoryCard
                key={data._id}
                category={data.category}
                image={data.img}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default MenuCategory;
