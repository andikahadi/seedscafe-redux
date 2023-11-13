import { Modal, Box, Typography, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { dineModalOnClose, setTakeAway, setDineIn } from "state";
import { useState } from "react";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const DineModal = () => {
  const dispatch = useDispatch();
  const isDineModalOpen = useSelector((state) => state.isDineModalOpen);
  const { palette } = useTheme();

  const [open, setOpen] = useState(isDineModalOpen);
  useEffect(() => {
    setOpen(isDineModalOpen);
  }, [isDineModalOpen]);

  const handleClose = () => {
    setOpen(false);
    dispatch(dineModalOnClose());
  };

  if (!open) return null;
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <WidgetWrapper display="flex" flexDirection="column" gap="2rem">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={palette.background.alt}
            height="100px"
            borderRadius="0.5rem"
            onClick={() => {
              dispatch(setDineIn());
              handleClose();
            }}
          >
            <Typography variant="h3">Dine In</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={palette.background.alt}
            height="100px"
            borderRadius="0.5rem"
            onClick={() => {
              dispatch(setTakeAway());
              handleClose();
            }}
          >
            <Typography variant="h3">Take Away</Typography>
          </Box>
        </WidgetWrapper>
      </Box>
    </Modal>
  );
};

export default DineModal;
