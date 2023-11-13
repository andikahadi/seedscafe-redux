import {
  Modal,
  Box,
  Typography,
  useTheme,
  Divider,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { orderModalOnClose, setOrder, setPage } from "state";
import { useState } from "react";
import { useEffect } from "react";
import FlexBetween from "components/FlexBetween";
import OrderCard from "./OrderCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const OrderModal = () => {
  const dispatch = useDispatch();
  const isOrderModalOpen = useSelector((state) => state.isOrderModalOpen);
  const isTakeAway = useSelector((state) => state.isTakeAway);
  const order = useSelector((state) => state.order);
  const { palette } = useTheme();

  const [open, setOpen] = useState(isOrderModalOpen);
  useEffect(() => {
    setOpen(isOrderModalOpen);
  }, [isOrderModalOpen]);

  const handleClose = () => {
    setOpen(false);
    dispatch(orderModalOnClose());
  };

  const handlePost = async () => {
    //Order Array formatted
    let formattedOrder = order.map((d, i) => {
      return {
        name: d.name,
        price: d.price.toFixed(2),
        quantity: d.quantity,
        specialRequest: d.specialRequest,
      };
    });
    console.log(formattedOrder);
    //Request
    let formData = {
      mode: isTakeAway ? "Take Away" : "Dine In",
      number: "1",
      dishes: formattedOrder,
      paid: false,
      fulfilled: false,
    };
    console.log(formData);
    const response = await fetch(`https://seedscafe.store/order/create/`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
    }); //send the post info to the backend

    const data = await response.json(); // backend will return our list of updated posts
    console.log(data);
    dispatch(setOrder({ order: [] }));
    handleClose();
    dispatch(setPage(1));
  };

  let totalPrice = 0;
  for (let i = 0; i < order.length; i++) {
    totalPrice = totalPrice + order[i].price * order[i].quantity;
  }

  if (!open) return null;
  console.log(order);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} width="100%">
        <Box
          display="flex"
          flexDirection="column"
          gap="2rem"
          height="70vh"
          alignItems="center"
          justifyContent="flex-start"
          width="100%"
          overflow="scroll"
        >
          <Typography variant="h4">Your Order List</Typography>
          <Box width="100%" display="flex" flexDirection="column" gap="1rem">
            {order.length === 0 ? (
              <Typography>You haven't select any item</Typography>
            ) : (
              order.map((data, index) => {
                return <OrderCard data={data} index={index} />;
              })
            )}
          </Box>
          <Divider style={{ width: "100%" }} />
          <FlexBetween width="100%" gap="2rem">
            <Typography variant="h4">Total</Typography>
            <Typography variant="h4">${totalPrice.toFixed(2)}</Typography>
          </FlexBetween>
          <Button
            onClick={handlePost}
            fullWidth
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              "&:hover": { backgroundColor: palette.primary.light },
            }}
          >
            Submit Order List
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default OrderModal;
