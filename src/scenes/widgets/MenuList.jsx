import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";

import MenuListCard from "./MenuListCard";

const MenuList = () => {
  const category = useSelector((state) => state.category);
  const fullMenu = useSelector((state) => state.fullMenu);
  const menuItems = fullMenu.filter((menuItem) => {
    return menuItem.category === category;
  });

  console.log(menuItems);
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="2rem"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Typography variant="h4">{category}</Typography>
      <Box sx={{ flexGrow: 1 }} width="100%">
        <Grid container spacing={2}>
          {menuItems.map((data) => {
            return (
              <MenuListCard
                key={data._id}
                name={data.name}
                image={data.img}
                data={data}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default MenuList;
