import { TableRow } from "@mui/material";
import CustomContentTableCell from "../../../shared/components/table/CustomContentTableCell";
import CustomTable from "../../../shared/components/table/CustomTable";
import { Column } from "../../../shared/entity/Column";
import {useEffect} from "react";
import {ProductUseCase} from "../usecase/ProductUseCase";

const columns = [
    new Column("Code", "code", "10%", "number", false, false),
    new Column("Product", "name", "40%", "string", false, false),
    new Column("Category", "category", "20%", "string", false, false),
    new Column("Description", "description", "20%", "string", false, false),
    new Column(
        "Validate period",
        "validityPeriod",
        "10%",
        "number",
        false,
        false
    ),
];

const ProductsTable = ({style}) => {
    const content = [
        {
            code: "12",
            name: "teste",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
        {
            code: "13",
            name: "testeUm",
        },
    ];
    const productUseCase = new ProductUseCase();

    useEffect(() => {
        var cities = productUseCase.getProducts()
        console.log(cities)
    }, []);

    return (
        <CustomTable
            columns={columns}
            name={"Products"}
            config={{
                maxHeight: style?.height ?? "100%",
                minWidth: style?.minWidth ?? "900px",
                overflowY: "scroll"
            }}
            content={content.map((value, index) => (
                <TableRow key={index}>
                    <CustomContentTableCell
                        align={"left"}
                        content={value.code}
                        width={"2"}
                    />
                    <CustomContentTableCell
                        align={"left"}
                        content={value.name}
                        width={"2"}
                    />
                </TableRow>
            ))}
        />
    );
};

export default ProductsTable;