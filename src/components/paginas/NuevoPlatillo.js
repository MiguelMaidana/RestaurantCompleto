import React from 'react';

const NuevoPlatillo = props => {
    return (
        <>
            <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Nombre Platillo"

                                />

                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="precio"
                                    type="number"
                                    placeholder="$"
                                    min="0"

                                />

                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Categoria</label>
                                <select
                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                     id="precio"
                                     name="categoria"
                                >
                                    <option value="">-- Seleccione --</option>
                                    <option value="desayuno">-- Desayuno --</option>
                                    <option value="comida">-- Comida --</option>
                                    <option value="cena">-- Cena --</option>
                                    <option value="bebidas">-- Bebidas --</option>
                                    <option value="postre">-- Postre --</option>
                                    <option value="ensalada">-- Ensalada --</option>

                                </select>
                               
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Imagen</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="imagen"
                                    type="file"
                                    

                                />

                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripcion</label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                                    id="descripcion"
                                    placeholder="Descripcion del platillo"

                                ></textarea>

                            </div>

                            <input
                                type="submit"
                                className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="agregar platillo"
                            />
                            

                    </form>
                </div>
            </div>
        </>
    );
};



export default NuevoPlatillo;