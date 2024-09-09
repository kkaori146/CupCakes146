import { Tenant } from "../types/Tenant";

export const useApi = () => ({
    getTenant: (tenantSlug: string): boolean | Tenant => {
        switch(tenantSlug) {
            case 'cupcakes146':
                return {
                    slug: 'cupcakes146',
                    name: 'CupCakes146',
                    mainColor: '#8B008B',
                    secondColor: '#8B008B'
                }
                break;
            case 'pizzas146':
                return {
                    slug: 'pizza146',
                    name: 'Pizza146',
                    mainColor: '#8B008B',
                    secondColor: '#8B008B'
                }
                break;
            default: return false;
        }
    }
});