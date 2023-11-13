import Navbar from "scenes/navbar";
import { Box, Divider } from "@mui/material";
import Header from "components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setFullMenu } from "state";
import { useState, useEffect } from "react";
import DineModal from "scenes/widgets/DineModal";
import WidgetWrapper from "components/WidgetWrapper";
import MenuCategory from "scenes/widgets/MenuCategory";
import MenuList from "scenes/widgets/MenuList";
import MenuItem from "scenes/widgets/MenuItem";
import OrderModal from "scenes/widgets/OrderModal";

const HomePage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  const [step, setStep] = useState(page);

  const getFullMenu = async () => {
    const response = await fetch("https://seedscafe.store/menu/allmenuitems", {
      method: "GET",
    });
    const data = await response.json();
    dispatch(setFullMenu({ fullMenu: data }));
  };

  useEffect(() => {
    getFullMenu();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setStep(page);
  }, [page]);

  let bodyContent = (
    <WidgetWrapper>
      <MenuCategory />
    </WidgetWrapper>
  );

  if (step === 2) {
    bodyContent = (
      <WidgetWrapper>
        <MenuList />
      </WidgetWrapper>
    );
  }

  if (step === 3) {
    bodyContent = (
      <WidgetWrapper>
        <MenuItem />
      </WidgetWrapper>
    );
  }
  return (
    <Box>
      <Navbar />
      <Box width="100%" padding="0rem 6%" display="block" gap="0.5rem">
        <Header />
        <Box height="1rem"></Box>
        <Divider />
      </Box>
      <DineModal />
      <OrderModal />
      <Box width="100%" padding="0rem 6%" display="block" gap="0.5rem">
        {bodyContent}
      </Box>
    </Box>
  );
};

export default HomePage;
