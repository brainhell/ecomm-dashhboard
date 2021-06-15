import React, { useEffect } from "react";

function PrestamosVivienda() {
  useEffect(() => {
    document.title = "Préstamos de Vehículos";
  }, []);
  return (
    <main className="flex flex-col pt-12 md:pt-24  h-auto  ">
      <div className="flex mt-2 flex-col w-3/4 justify-center p-8 mx-auto my-4 bg-gray-50 border-gray-200 shadow-lg">
        <p className="font-medium  pl-6 text-blue-600 text-3xl">
          Préstamos de Vehículos
        </p>
        <section className="flex items-center mx-auto  ">
          <div className=" w-full md:flex ">
            <div className="w-full  md:pl-6  p-8 ">
              <h4 className="mb-2 mt-3 font-bold">
                CAPRES otorgará préstamos a los Asociados que tengan más de:
              </h4>
              <ul>
                <li className="list-disc list-inside">
                  Seis (6) meses de antigüedad en el caso de Préstamos para
                  Vehículos
                </li>
                <li className="list-disc list-inside">
                  Seis (6) meses de antiguedad en el caso de Préstamos para
                  Rescate Vehicular.
                </li>
              </ul>
              <h4 className="mb-2 mt-3 font-bold">
                Préstamos para Adquisicion de Vehículos:
              </h4>
              <p className="mb-2">
                Estos préstamos se otorgan con reserva de dominio a favor de
                CAPRES sobre el vehículo adquirido, tienen un plazo para la
                cancelacion de cinco (5) años,a una tasa anual del 14%
                anual,descontando cuotas anuales especiales provenientesd de
                hasta dos meses y medio (2,5) de aguinaldo y mes y medio (1,5)
                de la doble remuneracion.
              </p>
              <h4 className="mb-2 mt-3 font-bold">
                Requisitos para solicitar Prestamos para Adquisicion de
                Vehículos:
              </h4>
              <ul>
                <li className="list-disc list-inside">
                  Solicitud debidamente sellada y firmada.
                </li>
                <li className="list-disc list-inside">
                  Fotocopia de la cédula de identidad.
                </li>
                <li className="list-disc list-inside">
                  Fotocopia de recibo de pago de la 2da. Quincena – Reciente.
                </li>
                <li className="list-disc list-inside">
                  Inscribirse en el libro de solicitudes que lleva el Delegado
                  de la Región a la cual pertenece el Asociado.
                </li>
              </ul>
              <h4 className="mb-2 mt-3 font-bold">
                Préstamos para Rescate Vehicular:
              </h4>
              <p className="mb-2">
                Estos préstamos se otorgan con reserva de dominio a favor de
                CAPRES sobre el vehículo adquirido, a una tasa anual del 14%
                anual,descontando cuotas anuales especiales provenientesd de
                hasta dos meses y medio (2,5) de aguinaldo y mes y medio (1,5)
                de la doble remuneracion.
              </p>
              <h4 className="mb-2 mt-3 font-bold">
                Requisitos para solicitar Prestamos para Rescate Vehícular:
              </h4>
              <ul className="list-disc list-inside">
                <li>Solicitud debidamente sellada y firmada.</li>
                <li>Fotocopia de la cedula de identidad.</li>
                <li>
                  Fotocopia de recibo de pago de la 2da. Quincena – Reciente.
                </li>
                <li>
                  Inscribirse en el libro de solicitudes que lleva el Delegado
                  de la Región a la cual pertenece el Asociado.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PrestamosVivienda;
