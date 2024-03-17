import Image from "next/image"

const About = () => {
    return (
        <section className="flex w-full pt-24 md:pt-0">
            <article className="w-[100%] md:w-[100%] pl-9 pt-4 pr-6 md:pl-20 md:pt-6 md:pr-6 pb-6 text-justify bg-white">

                <h2 className="mb-6 text-2xl md:text-4xl lg:text-5xl font-bold p-2 text-center border-l-8 border-red-700">RESEÑA HISTÓRICA</h2>

                <p className="text-sm md:text-base">Para materializar la transferencia tecnológica y democratizar el acceso del pueblo venezolano a herramientas informáticas fabricadas en el país, el 04 de octubre de 2005 nace Venezolana de Industria Tecnológica (VIT), como resultado de un convenio suscrito con la República Popular China, que permitió el 01 de diciembre de 2006 iniciar su proceso productivo.</p>
                <br />
                <p className="text-sm md:text-base">Ésta fábrica adscrita al Ministerio del Poder Popular para Industrias y Producción Nacional, impulsa el desarrollo tecnológico y socio-productivo para consolidar la seguridad y soberanía nacional, llevando a cada rincón de Venezuela equipos de computación elaborados con altos estándares de calidad y tecnología de avanzada a nivel mundial, toda vez que canaliza aportes sociales destinados a respaldar la gestión de instituciones educativas, culturales, deportivas y de salud.</p><br />

                <p className="text-sm md:text-base">
                    En 2013 VIT inició la producción y comercialización de servidores, equipos de alta gama, de amplia utilidad en industrias, instituciones públicas y de gobierno, lo cual, aunado a sus dos líneas de producción y al Laboratorio de Investigación, Desarrollo, Pruebas y Certificación de Productos VIT, evidencian el crecimiento de nuestra industria que luego de once años de trabajo indetenible orienta sus esfuerzos a la incorporación de materia prima nacional que contribuya progresivamente a la sustitución de importaciones.</p>
                    <br />
                    <p className="text-sm md:text-base">¡Seguimos innovando e impulsando el desarrollo tecnológico nacional!</p>
            </article>
            <article className="md:w-[100%] hidden md:inline p-0 "><Image src='/images/resena.jpg' height={1000} width={1000} alt="Imagen de nosotros" /></article>
        </section>
    )
}

export default About;
