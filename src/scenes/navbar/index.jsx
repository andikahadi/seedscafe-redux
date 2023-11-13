import { Box, IconButton, styled, Badge } from "@mui/material";

import { Divider } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import { useSelector, useDispatch } from "react-redux";
import { orderModalOnOpen } from "state";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector((state) => state.order);
  return (
    <Box padding="1rem 6%">
      <FlexBetween>
        <FlexBetween>
          <Box
            onClick={() => navigate("/")}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <img src="../assets/headerseedslogo.png" alt="linkedin" />
          </Box>
        </FlexBetween>
        <FlexBetween>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={order.length} color="primary">
              <ShoppingCartOutlined
                onClick={() => dispatch(orderModalOnOpen())}
                sx={{ fontSize: "25px" }}
              />
            </StyledBadge>
          </IconButton>
        </FlexBetween>
      </FlexBetween>
      <Divider />
    </Box>
  );
};

export default Navbar;
