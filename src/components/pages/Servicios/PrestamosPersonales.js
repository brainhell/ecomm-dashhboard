import React, { useEffect } from "react";

function PrestamosPersonales() {
  useEffect(() => {
    document.title = "Retiro de Haberes";
  }, []);
  return (
    <main className="flex flex-col pt-12 md:pt-24  h-auto  ">
      <div className="flex mt-2 flex-col w-3/4 justify-center p-8 mx-auto my-4 bg-gray-50 border-gray-200 shadow-lg">
        <p className="font-medium  pl-6 text-blue-600 text-3xl">
          Préstamos Personales
        </p>
        <section className="flex items-center mx-auto  ">
          <div className=" w-full md:flex ">
            <div className="w-full  md:pl-6  p-8 ">
              <p className="mb-2">
                CAPRES podrá conceder a los asociados que tengan una antigüedad
                superior a seis (6) meses las siguientes clases de préstamos:
              </p>
              <h4 className="mb-2 mt-3 font-bold">Préstamos a Corto Plazo:</h4>
              <p className="mb-2">
                Se refiere a aquellos préstamos que el asociado puede pagar,
                descontado por nómina en un máximo de doce (12) cuotas al 8% de
                interés anual, además podrá incluir una cuota especial a ser
                descontada de los aguinaldos.
              </p>
              <h4 className="mb-2 mt-3 font-bold">
                Préstamos a Mediano Plazo:
              </h4>

              <p className="mb-2">
                Son aquellos préstamos que el asociado puede pagar, descontado
                por nómina en un máximo de venticuatro (24) cuotas al 10% de
                interés anual, además podrá incluir hasta dos (02) cuotas
                especiales a ser descontadas de los aguinaldos.
              </p>
              <h4 className="mt-3 mb-2 font-bold">Préstamos a Largo Plazo:</h4>
              <p className="mb-2">
                Son aquellos préstamos que el asociado puede pagar, descontado
                por nómina, en un máximo de treinta y seis (36) cuotas al 12% de
                interés anual, además podrá incluir hasta tres (03) cuotas
                especiales a ser descontadas de los aguinaldos.
              </p>
              <h4 className="mt-3 mb-2 font-bold">
                Condiciones para otorgar estos Préstamos:
              </h4>
              <p className="mb-2">
                El monto máximo deberá ser el 80% de los haberes que mantenga el
                Asociado en CAPRES, una vez deducido el monto afianzado y la
                reserva legal la cual es del 20% de los haberes.
              </p>
              <li className="list-disc list-inside">
                El saldo del Préstamo anterior deberá ser menor o igual al 50%
                del monto otorgado.
              </li>
              <li className="list-disc list-inside">
                El monto máximo a prestar deberá ser el 80% de los haberes que
                mantenga en CAPRES, una vez deducido el monto afianzado, el
                saldo del préstamo anterior y la reserva legal la cual es del
                20% de los haberes.
              </li>
              <p className="mb-2">
                Si el asociado solicita un préstamo mayor a su disponibilidad de
                haberes en CAPRES, deberá presentar fianza de uno hasta tres
                asociados, que mantengan disponibilidad suficiente para
                responder por el monto afianzado.
              </p>
              <h4 className="mt-3 mb-2 font-bold">
                Requisitos para solicitar Préstamos:
              </h4>
              <ul>
                <li className="list-disc list-inside">
                  Solicitud debidamente llenada y firmada
                </li>
                <li className="list-disc list-inside">
                  Fotocopia de la cédula de identidad.
                </li>
                <li className="list-disc list-inside">
                  Fotocopia de recibo de pago reciente de la 2da. quincena.
                </li>
              </ul>
              <h4 className="mt-3 mb-2 font-bold">
                En caso de emergencia, deberá anexar a su solicitud:
              </h4>
              <li className="list-disc list-inside">
                Declaración de herederos universales Autorización del tribunal
                para la emisión del cheque en caso de beneficiarios menores de
                edad.
              </li>
              <h4 className="mt-3 mb-2 font-bold">
                En caso de solicitar préstamo con fiadores deberá consignar:
              </h4>
              <li>Fotocopia de la cedula de identidad de los fiadores.</li>
              <li>
                Fotocopia de recibo de pago reciente de la 2da. Quincena de los
                fiadores.
              </li>
              <h4 className="mt-3 mb-2 font-bold">
                En caso del Personal Contratado:
              </h4>
              <li>
                No aplican prestamos afianzados, solo podran solicitar prestamos
                por el monto maximo disponible de sus haberes.
              </li>
              <h4 className="mt-3 mb-2 font-bold">
                NOTA: El número máximo de fiadores deberá ser de (4) cuatro
                asociados por solicitante
              </h4>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PrestamosPersonales;
