import { prisma } from '@/app/lib/prisma'




export async function getProducts() {

    try {
        const data = await prisma.products.findMany();

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Products data.');
    }
}

export async function getProductsVersionById(query: number) {

    try {

        const data = await prisma.productsVersions.findMany({
            where: {
                productId: query,
            },
        })

        return data;

    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Versiones')
    }
}


export async function getProductsByCategory(query: number) {
    try {
        const data = await prisma.products.findMany({
            where: {
                categoryId: query,
            }
        })

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Products')
    }
}


export async function getProductCategories() {
    try {
        const data = await prisma.productsCategories.findMany({
            where: {
                active: true
            }
        });
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Categories')
    }
}


