import Image from 'next/image'
import React from 'react'

const soporte = () => {
  return (
    <section>
      <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center ">SOPORTE TÉCNICO</h2>
      <hr className='w-[3%] mt-3 mx-auto h-2 bg-blue-700' />
      <article className='w-[80%]  mx-auto '>
        <Image src={`/images/soporte-tecnico.png`} width={2000} height={1414} alt='Imagen de soporte técnico' />
      </article>
      <section className=''>
        <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center mt-8">POLÍTICAS DE GARANTÍA</h2>
        <article className='lg:flex-row flex flex-col w-[90%] mx-auto'>
          <div className='lg:p-8 px-4 lg:w-[50%]  mx-auto'>
            <h2 className='text-center p-0 font-bold lg:text-3xl text-xl mt-4  border-l-4 border-blue-700 mb-4'>COBERTURA DE LA GARANTÍA:</h2>
            <p className='text-justify lg:text-base text-sm'>Esta Garantía es válida en la República Bolivariana de Venezuela para las Computadoras marca VIT. Puede aplicarse en cualquier lugar donde VIT o quien éste autorice ofrezca servicios de garantía sujetos a los plazos y condiciones establecidas en este Certificado, pudiendo variar el tiempo de respuesta y la disponibilidad del servicio de garantía. Esta Garantía es valida únicamente si es presentada y/o activada por la persona titular que compra el equipo a través de los centros de distribución autorizados por VIT, debiendo presentar su factura original. La información relativa a restricciones y tiempo de garantía respecto al producto de Hardware específico adquirido por usted, se encuentra en la Tabla de Garantía de este Certificado.</p></div>
          <div className='lg:p-8 px-4 lg:w-[50%]  mx-auto'>
            <h2 className='text-center p-0 font-bold  lg:text-3xl text-xl mt-4  border-l-4 border-blue-700 mb-4'>CONDICIONES DE LA GARANTÍA:</h2>
            <p className='text-justify lg:text-base text-sm'>
              Venezolana de Industria Tecnológica garantiza que el producto de hardware que usted ha adquirido de VIT o de algún distribuidor autorizado de VIT, no tiene ningún defecto en el material ni en la mano de obra, bajo circunstancias de uso normales conforme a lo especificado dentro del instructivo de uso para su producto durante el período de garantía, la cual comenzará a regir desde la fecha en la cual adquirió el equipo. Durante el período de garantía, VIT a su criterio, sin cargo adicional, reparará o reemplazará, con previo consentimiento del cliente, las partes defectuosas por partes nuevas o por partes usadas reusables que tengan un rendimiento equivalente o superior al de las partes nuevas. Todas las partes cambiadas y productos reemplazados conforme a esta garantía serán propiedad de VIT.
            </p>
          </div>
        </article>

        <article className='flex lg:flex-row flex-col w-[90%] mx-auto'>
          <div className='lg:p-8 px-4 lg:w-[50%]  mx-auto'><h2 className='text-center p-0 font-bold lg:text-3xl text-xl mt-4  border-l-4 border-blue-700 mb-4'>NO SERÁ VÁLIDA ESTA GARANTÍA EN LOS SIGUIENTES CASOS:</h2>

            <p className='text-justify lg:text-base text-sm'>
              1.- Cuando la etiqueta “SELLO DE GARANTIA” sea violentado o removido por personas no autorizadas por VIT.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              2.- Que el producto no haya sido operado conforme al manual de usuario que se acompaña y no se observen las recomendaciones y advertencias que se indican.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              3.- Que el producto sea modificado o desarmado parcial o totalmente; o manipulado negligentemente y como consecuencia haya sufrido daños atribuibles al cliente, persona o talleres no autorizados por VIT, así como por daños causados por el uso o conservación fuera de los parámetros normales del producto y por la modificación e incorporación de otros productos ó componentes.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              4.- Que los datos del certificado y del producto no coincidan o hayan sido alterados o removidos de su lugar.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              5.- Que el equipo haya sufrido daños ó averías por fallas del suministro eléctrico.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              6.- No poseer sistema de protección de voltaje, como reguladores, UPS, entre otros.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              7.- Cuando el equipo haya sido comprado a un distribuidor o revendedor no autorizado.
            </p>

          </div>
          <div className='lg:p-8 px-4 lg:w-[50%]  mx-auto'><h2 className='text-center p-0 font-bold lg:text-3xl text-xl mt-4  border-l-4 border-blue-700 mb-4'>ESTA GARANTÍA NO CUBRE:</h2>
            <p className='text-justify lg:text-base text-sm'>
              1.- Daños resultantes de siniestros (ej. incendios) o fenómenos naturales (ej. inundaciones, temblores, descargas eléctricas, etc.)

            </p>
            <p className='text-justify lg:text-base text-sm'>
              2.- Partes o componentes desgastables como baterías no recargables, estuches, maletines, etc.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              3.- Reinstalación del Sistema Operativo.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              4.- Productos de software de terceros (programas de utilidad diversa que se adicionan a los programas originalmente cargados por el fabricante en el producto) que interfieran con el adecuado funcionamiento del equipo.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              5.- Servicios regulares de limpieza ó desgaste mecánico.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              6.- Daños causados por el uso de partes no fabricadas o vendidas por VIT

            </p>

            <p className='text-justify lg:text-base text-sm'>
              7.- Daño o pérdida de programa de datos almacenados en medios removibles tales como disquetes, CD, DVD, pendrive, unidades de cintas, etc.

            </p>

            <p className='text-justify lg:text-base text-sm'>
              8.- Manipulación inadecuada por parte del usuario, donde se observe daños ocasionados por impacto, derrame de líquidos sobre el equipo ó daños causados a los cables de los componentes periféricos que afecte el normal funcionamiento de los mismos.

            </p>
            <p className='text-justify lg:text-base text-sm'>
              9.- Defectos menores en las pantallas de monitores. Se considerará que el defecto de la pantalla es menor a condición de que el número de pixeles defectuosos por millón sea inferior a cuatro ( 4 ) y a condición de que el número de pixeles defectuosos en el área central sea como máximo uno (1). Se entiende como área central el rectángulo situado en el centro al dividir imaginariamente la pantalla en nueve rectángulos iguales mediante dos (2) líneas verticales y dos (2) líneas horizontales. VIT recomienda hacer copias de respaldo periódicas de los datos almacenados en su disco duro u otras unidades de almacenamiento fijo, como prevención a posibles fallas, alteraciones o pérdida de datos o antes de ser manipulado por el servicio autorizado de VIT para reparación. VIT no se hace responsable por la restauración de programas o datos diferentes al software instalado al momento de la fabricación del producto.
            </p>
          </div>
        </article>
        <article className='w-[90%] mx-auto mb-4 lg:p-8 px-4'>
          <h2 className='text-left indent-1 lg:indent-4 p-0 font-bold lg:text-3xl text-xl mt-4  border-l-4 border-blue-700 mb-4'>GARANTÍA POR SOFTWARE:</h2>
          <p className='text-justify lg:text-base text-sm'>
            Solo en caso que el disco duro presente daño o defecto de fabrica y sea necesario el reemplazo del mismo, el software instalado en el equipo será nuevamente configurado o instalado a su configuración original de fabrica, utilizando el disco (CD) de recuperación del cliente, por lo tanto es responsabilidad del cliente proporcionar los CD de recuperación que son entregados dentro del equipo al momento de su adquisición.
            VIT en ningún momento y bajo ninguna circunstancia se hace responsable directa ó indirectamente por la pérdida de información.
            Una vez transcurrido el Período de Garantía del Software La Unidad de Soporte Técnico cobrarán por el servicio de reinstalación de dicho Software y la re-configuración del equipo.
          </p>
        </article>
      </section>
    </section>
  )
}

export default soporte