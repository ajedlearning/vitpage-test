import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>Bienvenidos a detalles del productos {params.id}</div>
  )
}

export default page