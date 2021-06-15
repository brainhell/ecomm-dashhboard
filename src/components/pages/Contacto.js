import React from "react";

function Contacto() {
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md px-10 py-12 bg-white w-5/6 rounded-lg shadow-lg">
          <h1 className="text-gray-900 text-2xl font-bold mb-2 leading-snug">
            Contáctanos
          </h1>
          <form action="submit" method="POST" className="mb-0 space-y-6">
            <div>
              <label htmlFor="username">Nombre completo</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  placeholder="Juan de la ciudad"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <label htmlFor="ed">Nombre completo</label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="juan@mail.com"
                  className="w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
