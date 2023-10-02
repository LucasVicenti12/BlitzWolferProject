import {Box} from "@mui/joy";
import CustomPage from "../../../shared/utils/CustomPage";
import ProductTable from "../components/ProductTable";
import {Paper} from "@mui/material";

const ProductPage = () => {
    return (
        <CustomPage>
            <ProductTable style={{
                height: "100%",
                minWidth: "900px"
            }}/>
        </CustomPage>
    );
};

export default ProductPage;
