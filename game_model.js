export let Model = class {
    constructor () {
        this.data = ""
    }
    resetData() {
        this.data = ""
    }
    async getData(choice){
        if (choice==1) {
            this.data = this.getCocktail();
        }
    }
    // Cocktails
    async getCocktail() {
        const result = await axios({
            method: 'get',
            url: 'https://thecatapi.com/v1/images',
            headers: {
            'api_key': '0c75101f-a8c7-47da-9073-624e3f6cc173',
            }
        })
        return result;
    }
}