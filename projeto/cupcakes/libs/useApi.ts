import { Tenant } from "../types/Tenant";
import { Product } from "../types/Product";
import { User } from "../types/User";
import { CartItem } from "../types/CartItem";
import { Address } from "../types/Address";

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
                    mainColor: '#2E8B57',
                    secondColor: '#FFF'
                }
                break;
            default: return false;
        }
    },
    getAllProducts: async () => {
        let products = [];
        for (let q =0; q <6; q++) {
            products.push({
                ...TEMPORARYoneProduct,
                id: q + 1
            });
        }
        return products;
    },

    getProducts: async (id: number) => {
        return {...TEMPORARYoneProduct, id};
    },

    authorizeToken: async(token: string): Promise<User | false> => {
        if(!token) return false;

        return {
            name: "Fulano",
            email: 'fulano@gmail.com'
        }
    },
    getCartProducts: async (cartCookie: string) => {
        let cart: CartItem[] = [];
        if(!cartCookie) return cart;

        const cartJson = JSON.parse(cartCookie);
        for (let i in cartJson) {
            if (cartJson[i].id && cartJson[i].qt) {
                const product ={
                    ...TEMPORARYoneProduct,
                    id: cartJson[i].id
                };
                cart.push({
                    qt: cartJson[i].qt,
                    product
                });
            }
        }
        return cart;
    },
    getUserAddresses: async (email: string) => {
        const addresses: Address[] = [];
        for (let i = 0; i < 4; i++) {
            addresses.push({
                id: i + 1,
                street: 'Rua das Margaridas',
                number: `${i + 1}00`,
                cep:'999999999',
                city: 'São Paulo',
                neighborhood: 'Santana',
                state: 'SP',
            });
        }
        return addresses;
    },
    getShippingPrice: async (address: Address) => {
        return 9.16;
    }


});