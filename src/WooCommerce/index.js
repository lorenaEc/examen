const url = process.env.NEXT_PUBLIC_WORDPRESS_URL
const key = process.env.NEXT_PUBLIC_CONSUMER_KEY
const secret = process.env.NEXT_PUBLIC_CONSUMER_SECRET

export default class Woocommerce {
    static async getCategories() {
        const data = await fetch(`${url}/wp-json/wc/v3/products/categories?consumer_key=${key}&consumer_secret=${secret}&per_page=6`)
        const dataJson = await data.json()

        return dataJson     
    }

    static async getProductBySlug(slug) {
        if(!slug) return
        const ProductBySlug = await fetch(`${url}/wp-json/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&slug=${slug}`)
        const ProductBySlugJson = await ProductBySlug.json()
        return ProductBySlugJson[0]
    }

    static async getProducts() {
        const data = await fetch(`${url}/wp-json/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&per_page=99`)
        const dataJson = await data.json()

        return dataJson     
    }

    static async getCategoryBySlug(slug){
        if(!slug) return
        const data = await fetch(`${url}/wp-json/wc/v3/products/categories?consumer_key=${key}&consumer_secret=${secret}&slug=${slug}`)
        const dataJson = await data.json()

        return dataJson
    }

    static async getProductsByCategory(category) {
        const data = await fetch(`${url}/wp-json/wc/v3/products?consumer_key=${key}&consumer_secret=${secret}&per_page=99&category=${category}`)
        const dataJson = await data.json()

        return dataJson     
    }

}