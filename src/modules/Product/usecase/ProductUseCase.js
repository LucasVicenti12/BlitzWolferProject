import {ProductRepository} from "../repository/ProductRepository";

export class ProductUseCase {
    productRepository = new ProductRepository();

    getProducts() {
        return this.productRepository.getProducts().then((response) => {
            return response
        }).catch((error) => {
            console.log(error)
            return []
        })
    }
}