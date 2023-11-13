import { Box, Typography, useTheme } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { dineModalOnOpen } from "state";
import { onBackPage } from "state";

const Header = () => {
  const dispatch = useDispatch();
  const isTakeAway = useSelector((state) => state.isTakeAway);
  const { palette } = useTheme();
  const headerTitle = isTakeAway ? "Take Away" : "Dine In";
  const page = useSelector((state) => state.page);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding="0rem 6%"
    >
      {page === 1 ? null : (
        <Box
          onClick={() => {
            dispatch(onBackPage());
          }}
          position="absolute"
          left="12%"
          sx={{
            "&:hover": {
              color: palette.neutral.medium,
              cursor: "pointer",
            },
          }}
        >
          <ArrowBackIos />
        </Box>
      )}
      <Box
        onClick={() => dispatch(dineModalOnOpen())}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Typography variant="h5">{headerTitle}</Typography>
      </Box>
    </Box>
  );
};

export default Header;
