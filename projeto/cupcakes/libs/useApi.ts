export type getTenantResponse = {
    name: string;
    mainColor: string;
    secondColor: string;
}

export const useApi = () => ({
    getTenant: (tenantSlug: string): boolean | getTenantResponse => {
        switch(tenantSlug) {
            case 'cupcakes146':
                return {
                    name: 'CupCakes146',
                    mainColor: '#9400d3',
                    secondColor: '#00FF00'
                }
                break;
            case 'cupcakes147':
                return {
                    name: 'CupCakes146',
                    mainColor: '#0000FF',
                    secondColor: '#00FF00'
                }
                break;
            default: return false;
        }
    }
});