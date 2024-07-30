import { prisma } from '@/app/lib/prisma'


export async function getProducts() {

    try {
        const data = await prisma.products.findMany(
            {
                where: {
                    active: true,
                },
                orderBy:
                    [
                        { categoryId: "asc" }
                    ]
            }
        );

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Products data.');
    }
}

export async function getProductsVersionByIdProduct(query: number) {

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

export async function getProductCategoriesById(params: number) {
    try {
        const data = await prisma.productsCategories.findFirst({
            where: {
                id: params
            },
            orderBy:
                [
                    { id: "asc" }
                ]
        })
        return data;
    } catch (error) {
        console.error('Database Error:', error)
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

export async function getDriverProducts() {
    try {
        const data = await prisma.productDrivers.findMany(
            {
                include: {
                    operatingSystems: {
                        select: {
                            name: true
                        }
                    },
                    productsCategories: {
                        select: {
                            name: true
                        }
                    },
                    products: {
                        select: {
                            model: true
                        }
                    },
                    driverTypes: {
                        select: {
                            name: true
                        }
                    },


                },
                where: {
                    active: true
                }
            }
        )

        return data;


    } catch (error) {
        console.error('Data Error', error)
    }
}
export async function getOperatingSystem() {
    try {
        const data = await prisma.operatingSystems.findMany(
            {

                where: {
                    active: true,

                }


            }
        )
        console.log(data)
        return data;


    } catch (error) {
        console.error('Data Error', error)
    }
}
export async function getTypeDriverByIdProdByIdOs(prodId: number, osId: number) {
    try {
        const data = await prisma.productDrivers.findMany(
            {
                include: {
                    operatingSystems: {
                        select: {
                            name: true
                        }
                    },
                    productsCategories: {
                        select: {
                            name: true
                        }
                    },
                    products: {
                        select: {
                            model: true
                        }
                    },
                    driverTypes: {
                        select: {
                            name: true
                        }
                    },


                },
                where: {
                    active: true,
                    prodId,
                    operatingSystemsId: osId

                }
            }
        )
        // console.log(data)
        return data;


    } catch (error) {
        console.error('Data Error', error)
    }
}

export async function getUsers() {

    try {
        const users = await prisma.users.findMany();
        return users;
    } catch (error) {
        console.error('Data Error', error)

    }

}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredUsers(query: string,
    currentPage: number,) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const user = await prisma.users.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                    {
                        email: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    }
                ]
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

export async function fetchUserPages(query: string) {
    
    try {
        const count = await prisma.users.count({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                    {
                        email: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    }
                ]
            },
         
            
        })

        const totalPages = Math.ceil(count / ITEMS_PER_PAGE) ;
        // console.log(totalPages)
        return totalPages;
    } catch (error) {
        console.error('Data Error', error)

    }
}





