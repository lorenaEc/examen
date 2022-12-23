const url = process.env.NEXT_PUBLIC_WORDPRESS_URL

export default class Wordpress {
    static async getPages() {
        const data = await fetch(`${url}/wp-json/wp/v2/pages?per_page=99`)
        const dataJson = await data.json()

        return dataJson     
    }

    static async getPageBySlug(slug) {
        if(!slug) return
        const page = await fetch(`${url}/wp-json/wp/v2/pages?slug=${slug}`)
        const pageJson = await page.json()
        // if (typeof window !== 'undefined')

        return pageJson[0]
    }
}