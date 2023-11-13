import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setCategory, onNextPage } from "state";

const MenuCategoryCard = ({ category, image }) => {
  const dispatch = useDispatch();
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      onClick={() => {
        dispatch(setCategory({ category: category }));
        dispatch(onNextPage());
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MenuCategoryCard;
