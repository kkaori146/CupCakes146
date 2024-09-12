import { Tenant } from "../types/Tenant";
import { Product } from "../types/Product";

const TEMPORARYoneProduct: Product={
    id:1,
    image:'/tmp/cupcake_amarelo.png', 
    categoryName: "Festa", 
    name: 'Yellow Dream', 
    price: 12.00,
    description: "Cupcake de limão com recheio de baunilha com confeito de açúcar amarelo e massa branca de iogurte"
}

export const useApi = (tenantSlug: string) => ({
    getTenant: async () => {
        switch(tenantSlug) {
            case 'cupcakes146':
                return {
                    slug: 'cupcakes146',
                    name: 'CupCakes146',
                    mainColor: '#8B008B',
                    secondColor: '#FFF'
                }
                break;
            case 'pizzas146':
                return {
                    slug: 'pizza146',
                    name: 'Pizza146',
                    mainColor: '#8B008B',
                    secondColor: '#FFF'
                }
                break;
            default: return false;
        }
    },
    getAllProducts: async () => {
        let products = [];
        for (let q =0; q <6; q++) {
            products.push(TEMPORARYoneProduct);
        }
        return products;
    },

    getProducts: async (id: string) => {
        return TEMPORARYoneProduct;
    }
});