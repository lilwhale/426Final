export let Model = class {
    constructor () {
        this.data = ""
    }
    resetData() {
        this.data = ""
    }
    async getData(choice){
        if (choice==1) {
            this.data = await this.getCocktail();
        }
    }
    // Cats atm to see if the cocktail api i was pulling was just bad
    async getCocktail() {
        const result = await axios({
            // still having issues with this. what exactly am i doing?
            method: 'get',
            url: 'https://thecatapi.com/v1/images/search',
            params: {
                limit: 1
            },
            headers: {
                ['x-api-key']: '0c75101f-a8c7-47da-9073-624e3f6cc173'
            }
        })
        return result.data[0];
    }
}