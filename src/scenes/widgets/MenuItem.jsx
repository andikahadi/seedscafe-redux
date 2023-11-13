import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Button, InputBase, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import { useState } from "react";
import { setOrder, setPage } from "state";

const MenuItem = () => {
  const dispatch = useDispatch();
  const dish = useSelector((state) => state.dish);
  const order = useSelector((state) => state.order);
  const [quantity, setQuantity] = useState(1);
  const [request, setRequest] = useState();
  const { palette } = useTheme();

  const handlePlusQuantityChange = () => {
    setQuantity(quantity + 1);
  };
  const handleMinusQuantityChange = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOrderClick = () => {
    const newOrder = {
      name: dish.name,
      price: dish.price,
      img: dish.img,
      description: dish.description,
      quantity: parseInt(quantity),
      specialRequest: request,
    };
    let updatedOrder = [];
    if (order) {
      updatedOrder = [...order, newOrder];
    } else {
      updatedOrder = [newOrder];
    }
    dispatch(setOrder({ order: updatedOrder }));
    dispatch(setPage({ page: 2 }));
    setQuantity(1);
    setRequest("");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="2rem"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Typography variant="h4">{dish.name}</Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="center"
        gap="2rem"
        width="100%"
      >
        <img width="40%" src={dish.img} alt="food" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          gap="1rem"
          width="100%"
        >
          <Box textAlign="left" width="100%">
            {dish.description}
          </Box>
          <FlexBetween gap="2rem" width="100%">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="156px"
            >
              <Button onClick={handleMinusQuantityChange}>-</Button>
              <Typography>{quantity}</Typography>
              <Button onClick={handlePlusQuantityChange}>+</Button>
            </Box>
            <Box>$ {dish.price}</Box>
          </FlexBetween>
          <InputBase
            placeholder="Type request here"
            onChange={(e) => setRequest(e.target.value)}
            value={request}
            sx={{
              width: "100%",
              border: "1px solid",
              borderRadius: "0.5rem",
              padding: "1rem 2rem",
            }}
          />
          <Button
            onClick={handleOrderClick}
            fullWidth
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              "&:hover": { backgroundColor: palette.primary.light },
            }}
          >
            {" "}
            Add to Order List
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuItem;
