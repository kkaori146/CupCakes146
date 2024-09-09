import { Tenant } from "../types/Tenant";

export const useApi = () => ({
    getTenant: (tenantSlug: string): boolean | Tenant => {
        switch(tenantSlug) {
            case 'cupcakes146':
                return {
                    slug: 'cupcakes146',
                    name: 'CupCakes146',
                    mainColor: '#9400d3',
                    secondColor: '#00FF00'
                }
                break;
            case 'pizzas146':
                return {
                    slug: 'pizza146',
                    name: 'Pizza146',
                    mainColor: '#0000FF',
                    secondColor: '#00FF00'
                }
                break;
            default: return false;
        }
    }
});