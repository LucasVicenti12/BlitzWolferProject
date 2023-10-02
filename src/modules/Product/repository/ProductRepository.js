import http from "../../../shared/api/HttpHelper";

export class ProductRepository{
    async getProducts(){
        return await http.get("/city");
    }
}