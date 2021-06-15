import React, { useEffect } from "react";

function PrestamosVivienda() {
  useEffect(() => {
    document.title = "Préstamos de Vivienda";
  }, []);
  return (
    <main className="flex flex-col pt-12 md:pt-24  h-auto  ">
      <div className="flex mt-2 flex-col w-3/4 justify-center p-8 mx-auto my-4 bg-gray-50 border-gray-200 shadow-lg">
        <p className="font-medium  pl-6 text-blue-600 text-3xl">
          Préstamos de Vivienda
        </p>
        <section className="flex items-center mx-auto  ">
          <div className=" w-full md:flex ">
            <div className="w-full  md:pl-6  p-8 ">
              <h4 className="mb-2 mt-3 font-bold">
                CAPRES otorgará préstamos a los Asociados que tengan más de:
              </h4>
              <ul>
                <li className="list-disc list-inside">
                  Seis (6) meses de antigüedad en el caso de Préstamos
                  Hipotecarios
                </li>
                <li className="list-disc list-inside">
                  Seis (6) meses de antiguedad en el caso de Préstamos para
                  Remodelación de Vivienda Principal.
                </li>
              </ul>
              <h4 className="mb-2 mt-3 font-bold">
                Préstamos para Adquisición de Vivienda Principal:
              </h4>
              <p className="mb-2">
                Los prestamos especiales para adquisición de vivienda principal
                tienen un plazo para la cancelacion de Doce (12) años, a una
                tasa del 10% anual, descontando cuotas anuales especiales
                provenientesd de hasta tres (3) meses de aguinaldo y mes y medio
                (1,5) de la doble remuneracion.
              </p>
              <h4 className="mb-2 mt-3 font-bold">
                Requisitos para solicitar Prestamos para Adquisicion de
                Vivienda:
              </h4>
              <ul>
                <li className="list-disc list-inside">
                  Solicitud debidamente sellada y firmada.
                </li>
                <li className="list-disc list-inside">
                  Fotocopia de la cedula de identidad,
                </li>
                <li className="list-disc list-inside">
                  Fotocopia de recibo de pago de la 2da. Quincena – Reciente .
                </li>
                <li className="list-disc list-inside">
                  Inscribirse en el libro de solicitudes que lleva el Delegado
                  de la Región a la cual pertenece el Asociado.
                </li>
              </ul>
              <h4 className="mb-2 mt-3 font-bold">
                Préstamos para Remodelación de Vivienda Principal:
              </h4>
              <p className="mb-2">
                Los prestamos para Remodelación de vivienda principal tienen un
                plazo para la cancelacion de Seis (6) años, a una tasa del 12%
                anual, descontando cuotas anuales especiales provenientesd de
                hasta dos (2) meses de aguinaldo y Un mes (1) de la doble
                remuneracion.
              </p>
              <ul>
                <li className="list-disc list-inside">
                  De los aguinaldos en un máximo de cuatro (4) cuotas, dos (2)
                  por cada año.
                </li>
                <li className="list-disc list-inside">
                  De la Doble Remuneración, con un máximo de cuatro (4) cuotas,
                  una (1) por cada año.
                </li>
              </ul>
              <h4 className="mt-3 mb-2 font-bold">Préstamos a Largo Plazo:</h4>
              <p className="mb-2">
                Son aquellos préstamos que el asociado puede pagar, descontado
                por nómina, en un máximo de treinta y seis (36) cuotas al 12% de
                interés anual, además podrá incluir hasta tres (03) cuotas
                especiales a ser descontadas de los aguinaldos.
              </p>
              <h4 className="mt-3 mb-2 font-bold">
                Requisitos para solicitar Prestamos para la Remodelacion de
                Vivienda Principal:
              </h4>

              <li className="list-disc list-inside">
                Solicitud debidamente sellada y firmada.
              </li>
              <li className="list-disc list-inside">
                Fotocopia de la cedula de identidad.
              </li>
              <li className="list-disc list-inside">
                Fotocopia de recibo de pago de la 2da. Quincena – Reciente.
              </li>
              <li className="list-disc list-inside">
                Inscribirse en el libro de solicitudes que lleva el Delegado de
                la Región a la cual pertenece el Asociado.
              </li>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PrestamosVivienda;
