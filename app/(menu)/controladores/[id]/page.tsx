
const page = ({ params }: { params: { id: string } }) => {
    return (
        <div>Controladores de {params.id}</div>
    )
}

export default page