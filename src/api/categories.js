export default function getCategories(allProducts) {
    return allProducts.reduce((categories, product) => {
        return categories.some(category => category === product.category) ? categories : [...categories, product.category]
    }, []);
}