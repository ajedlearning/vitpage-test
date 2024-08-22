import { prisma } from '@/app/lib/prisma';


export async function fetchProducts(query: string,
    currentPage: number,) {
    try {
        const products = await prisma.products.findMany(
            {
                include: {
                    category: {
                        select: {
                            name: true,
                        }
                    }
                }
            }
        );

        return products
    } catch (error) {
        console.log('Data Error', error)
    }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredProducts(query: string,
    currentPage: number,) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const user = await prisma.products.findMany({
            where: {
                OR: [
                    {
                        model: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },

                ]
            },
            include: {
                category: {
                    select: {
                        name: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc', // Ordenar de manera descendente
            },
            skip: offset,
            take: ITEMS_PER_PAGE,

        })
        return user;
    } catch (error) {
        console.error('Data Error', error)

    }
}

export async function fetchFilteredVersions(query: string,
    currentPage: number,) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const user = await prisma.productsVersions.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },

                ]
            },
            include: {
                product: {
                    select: {
                        model: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc', // Ordenar de manera descendente
            },
            skip: offset,
            take: ITEMS_PER_PAGE,

        })
        return user;
    } catch (error) {
        console.error('Data Error', error)

    }
}

export async function fetchProductsPages(query: string) {

    try {
        const count = await prisma.products.count({
            where: {
                OR: [
                    {
                        model: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },

                ]
            },


        })

        const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
        // console.log(totalPages)
        return totalPages;
    } catch (error) {
        console.error('Data Error', error)

    }
}
export async function fetchVersionsPages(query: string) {

    try {
        const count = await prisma.productsVersions.count({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },

                ]
            },


        })

        const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
        // console.log(totalPages)
        return totalPages;
    } catch (error) {
        console.error('Data Error', error)

    }
}


export async function fetchCategories() {
    try {
        const categories = await prisma.productsCategories.findMany({
            where: {
                active: true
            }
        });

        return categories;
    } catch (error) {
        console.error('Data Error', error)
    }
}

