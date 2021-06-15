import React, { useEffect } from "react";

function FondoEspecial() {
  useEffect(() => {
    document.title = "FEP";
  }, []);
  return (
    <main className="flex flex-col pt-12 md:pt-24  h-auto  ">
      <div className="flex mt-2 flex-col w-3/4 justify-center p-8 mx-auto my-4 bg-gray-50 border-gray-200 shadow-lg">
        <div className="w-full  md:pl-6  p-8 ">
          <p className="font-medium  pl-6 text-blue-600 text-3xl">
            Fondo Especial para Programas
          </p>
          <section className="flex items-center mx-auto  ">
            <div className=" w-full md:flex ">
              <div className="w-full  md:pl-6  p-8 ">
                <h4 className="mb-2 mt-3 font-bold">
                  El Fondo Especial para la elaboración de programas se ha
                  constituido para financiar entre otros, los siguientes:
                </h4>
                <ul className="list-disc list-inside">
                  <li>Turismo y Recreación</li>
                  <li>Línea Blanca</li>
                  <li>Línea Marrón</li>
                  <li>Equipos de Computación</li>
                  <li>Utiles Escolares y Uniformes</li>
                  <li>Libros y Publicaciones</li>
                  <li>Matrícula escolar y universitaria</li>
                  <li>Artículos del Hogar</li>
                  <li>Programas de Salud</li>
                  <li>Cualquier otro programa en beneficio de los Asociados</li>
                </ul>
                <h4 className="mb-2 mt-3 font-bold">Requisitos:</h4>
                <ul className="list-disc list-inside">
                  <li>
                    Ser asociado con una antigüedad mínima ininterrumpida de un
                    (1) año en la misma.
                  </li>
                  <li>No tener deuda con la asociación.</li>
                  <li>
                    Llenar la planilla de solicitud de préstamo con todos los
                    datos exigidos en la misma y firmada por el solicitante.
                  </li>
                  <li>Copia de la cédula de identidad.</li>
                  <li>Copia del último recibo de pago.</li>
                  <li>
                    Original del presupuesto del bien por el cual se va a pedir
                    el préstamo.
                  </li>
                  <li>
                    Hacer llegar la planilla de solicitud al delegado
                    representante de CAPRES en la región donde se encuentre
                    ubicado, para que este asigne un número.
                  </li>
                  <li>
                    El asociado deberá firmar documentos que garanticen, la
                    deuda, hasta el total cumplimiento del préstamo.
                  </li>
                  <li>
                    El monto del crédito se otorgará tomando en cuenta la
                    disponibilidad de los haberes.
                  </li>
                  <li>
                    Si los haberes disponibles es igual o mayor a Bs. 6.000.000
                    el préstamo será por el doble de esa cantidad.
                  </li>
                  <li>
                    Si los haberes disponibles es menor a Bs. 6.000.000 el
                    préstamo será por el triple de esa cantidad.
                  </li>
                  <li>
                    El plazo máximo para cancelar tal préstamo será de 3 años
                    cuando el monto sea mayor de Bs. 10.000.000, cuando el monto
                    sea inferior a Bs.10.000.000 el plazo para cancelar será de
                    2 años.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default FondoEspecial;
