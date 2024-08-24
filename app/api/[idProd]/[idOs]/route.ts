import { prisma } from '@/app/lib/prisma'

export async function GET(request: Request,  { params }: { params: { idProd: string, idOs: string } }) {
    

    try {
        const data = await prisma.productDrivers.findMany({
            include: {
             
                driverTypes: {
                    select: {
                        name: true
                    }
                },


            },
            where: {
                prodId: params.idProd,
                operatingSystemsId: params.idOs
            },
        })
        // const data = await res.json()
        // console.log(data)
        return Response.json({ data })
    } catch (error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch Products data.');
    }


}