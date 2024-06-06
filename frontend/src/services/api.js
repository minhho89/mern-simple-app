class API {
    static async getProducts() {
       const response = await fetch('http://localhost:5002/products');
       const data = await response.json();
       return data.products;
    }

    static async saveProduct(product) {
        const response = await fetch('http://localhost:5002/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        return await response.json();
    }
}

export default API;
