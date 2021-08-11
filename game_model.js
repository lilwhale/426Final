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
    // Cocktails
    async getCocktail() {
        const result = await axios({
            method: 'get',
            url: 'https://the-cocktail-db.p.rapidapi.com/random.php',
            headers: {
            'x-rapidapi-key': '{x-rapidapi-key}',
            'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
            }
        })
        return result;
    }
}