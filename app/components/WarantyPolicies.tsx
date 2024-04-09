import React from 'react'

const WarantyPolicies = () => {
    return (
        <>
            <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center mt-8">POLÍTICAS DE GARANTÍA</h2>

            <article className='lg:flex-row flex flex-col w-[90%] mx-auto'>
                <div className='lg:p-8 px-4 lg:w-[50%]  mx-auto'>
                    <h2 className='text-left pl-2 p-0 font-bold lg:text-3xl text-xl mt-4  border-l-4 border-blue-700 mb-4'>COBERTURA DE LA GARANTÍA:</h2>
                    <p className='text-justify lg:text-base text-sm'>Esta Garantía es válida en la República Bolivariana de Venezuela para las Computadoras marca VIT. Puede aplicarse en cualquier lugar donde VIT o quien éste autorice ofrezca servicios de garantía sujetos a los plazos y condiciones establecidas en este Certificado, pudiendo variar el tiempo de respuesta y la disponibilidad del servicio de garantía. Esta Garantía es valida únicamente si es presentada y/o activada por la persona titular que compra el equipo a través de los centros de distribución autorizados por VIT, debiendo presentar su factura original. La información relativa a restricciones y tiempo de garantía respecto al producto de Hardware específico adquirido por usted, se encuentra en la Tabla de Garantía de este Certificado.</p></div>
                <div className='lg:p-8 px-4 lg:w-[50%]  mx-auto'>
                    <h2 className='text-left pl-2 p-0 font-bold  lg:text-3xl text-xl mt-4  border-l-4 border-blue-700 mb-4'>CONDICIONES DE LA GARANTÍA:</h2>
                    <p className='text-justify lg:text-base text-sm'>
                        Venezolana de Industria Tecnológica garantiza que el producto de hardware que usted ha adquirido de VIT o de algún distribuidor autorizado de VIT, no tiene ningún defecto en el material ni en la mano de obra, bajo circunstancias de uso normales conforme a lo especificado dentro del instructivo de uso para su producto durante el período de garantía, la cual comenzará a regir desde la fecha en la cual adquirió el equipo. Durante el período de garantía, VIT a su criterio, sin cargo adicional, reparará o reemplazará, con previo consentimiento del cliente, las partes defectuosas por partes nuevas o por partes usadas reusables que tengan un rendimiento equivalente o superior al de las partes nuevas. Todas las partes cambiadas y productos reemplazados conforme a esta garantía serán propiedad de VIT.
                    </p>
                </div>
            </article>

        </>
    )
}

export default WarantyPolicies