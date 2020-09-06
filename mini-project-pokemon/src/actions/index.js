export const catchemall = (item,region) => {
    return {
        type: 'CATCH_EM_ALL',
        payload: {
            item: item,
            region: region
        }
    }
};