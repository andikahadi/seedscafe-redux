import { Box, Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";

const OrderCard = ({ data }) => {
  return (
    <FlexBetween width="100%" gap="2rem">
      <FlexBetween gap="1rem">
        <img src={data.img} height="100px" alt="food" />
        <Box
          display="flex"
          flexDirection="column"
          gap="0.5rem"
          alignItems="flex-start"
          justifyContent="flex-start"
          height="100%"
        >
          <Typography variant="h6">{data.name}</Typography>
          <Typography>Qty: {data.quantity}</Typography>
          <Typography>Special Request: {data.specialRequest}</Typography>
        </Box>
      </FlexBetween>
      <Typography>${(data.price * data.quantity).toFixed(2)}</Typography>
    </FlexBetween>
  );
};

export default OrderCard;
