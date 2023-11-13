import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setDish, onNextPage } from "state";

const MenuListCard = ({ name, image, data }) => {
  const dispatch = useDispatch();
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      onClick={() => {
        dispatch(setDish({ dish: data }));
        dispatch(onNextPage());
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MenuListCard;
