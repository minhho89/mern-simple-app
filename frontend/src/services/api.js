const BASE_URL = 'http://localhost:5002'

class API {
    static async getProducts() {
        try {
            const response = await fetch(`${BASE_URL}/products`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data.products;
        } catch (error) {
            console.error('Fetching products failed', error);
            throw error;
        }
    }

    static async saveProduct(product) {
        try {
            const response = await fetch(`${BASE_URL}/product`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        }catch (error) {
            console.error('Saving product failed', error);
            throw error;
        }
    }
}

export default API;
