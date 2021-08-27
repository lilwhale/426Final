export let Model = class {
    constructor () {
        this.data = ""
    }
    resetData() {
        this.data = ""
    }
    async getData(choice){
        if (choice==1) {
            this.data = await this.getCat();
            return this.data;
        }
        if(choice==2) {
            this.data = await this.getDog();
            return this.data;
        }
        if(choice==3) {
            this.data = await this.getFace();
            return this.data;
        }
        if(choice==4) {
            this.data = await this.getRandom();
            return this.data;
        }
    }
    async getCat() {
        const result = await axios({
            method: 'get',
            url: 'https://api.thecatapi.com/v1/images/search',
            params: {
                limit: 1,
                size: "full"
            },
            headers: {
                ['x-api-key']: '0c75101f-a8c7-47da-9073-624e3f6cc173'
            }
        })
        return result.data[0].url;
    }
    async getDog() {
        const result = await axios({
            method: 'get',
            url: 'https://dog.ceo/api/breeds/image/random',
        })
        return result.data.message;
    }
    async getFace() {
        const result = await axios({
            method: 'get',
            url: 'https://uifaces.co/api',
            params: {
                limit: 1,
                size: "full"
            },
            headers: {
                ['x-api-key']: 'CA7FE8C2-76794465-846283E8-DC4D26E9',
                'Accept': 'application/json',
	            'Cache-Control': 'no-cache'
            }
        })
        return result.data[0].photo;
    }
    async getRandom() {
        const result = await axios({
            method: 'get',
            url: 'https://pixabay.com/api/?key=23119407-8f204666f0adb48ae056a84de',
            params: {
                limit: 1
            }
        })
        var number = Math.round(Math.random()*20);
        return result.data.hits[number].webformatURL;
    }
}