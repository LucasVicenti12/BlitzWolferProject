import { Box, Button, Typography } from "@mui/joy";
import CustomPage from "../../../shared/utils/CustomPage";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../reducer/productReducer";

const ProductPage = () => {
  const count = useSelector((state) => state.product);
  const dispatch = useDispatch()

  console.log(count)

  return (
    <CustomPage>
      <Box>opa</Box>
      <Typography>{count.value}</Typography>
      <Typography onClick={() => dispatch(increment({opa: "teste"}))}>CLICK</Typography>
    </CustomPage>
  );
};

export default ProductPage;
