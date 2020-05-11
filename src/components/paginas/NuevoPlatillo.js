import React from 'react';
import {useFormik} from "formik"
import * as Yup from "yup"

const NuevoPlatillo = props => {


    // validacion y leer los datos del formulario

    const formik = useFormik({
        initialValues:{
            nombre:"",
            precio:"",
            categoria:"",
            imagen:"",
            descripcion:""

        },
        validationSchema:Yup.object({
            nombre : Yup.string()
                        .min(3, "Los Platillos deben tener al menos 3 caracteres")
                        .required("El Nombre del platillo es obligarorio"),
            precio : Yup.number()
                        .min(1, "Debes agregar un numero ")
                        .required("El precio es obligarorio"),
            categoria : Yup.string()
                        .required("La categoria es obligatoria"),
            descripcion : Yup.string()
                        .min(10, "La descripcion debe tener al menos 10 caracteres")
                        .required("La descripcion es obligatoria"),


                    
        }),
        onSubmit: datos =>{
            console.log(datos)
        }
    })


    return (
        <>
            <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form onSubmit={formik.handleSubmit}>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Nombre Platillo"
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}

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
                                    value={formik.values.precio}
                                    onChange={formik.handleChange}

                                />

                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">Categoria</label>
                                <select
                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                     id="precio"
                                     name="categoria"
                                     value={formik.values.categoria}
                                     onChange={formik.handleChange}
                                >
                                    <option value="">-- Seleccione --</option>
                                    <option value="desayuno">Desayuno</option>
                                    <option value="comida">Comida</option>
                                    <option value="cena">Cena</option>
                                    <option value="bebidas">Bebidas</option>
                                    <option value="postre">Postre</option>
                                    <option value="ensalada">Ensalada</option>

                                </select>
                               
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Imagen</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="imagen"
                                    type="file"
                                    value={formik.values.imagen}
                                    onChange={formik.handleChange}

                                    

                                />

                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripcion</label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                                    id="descripcion"
                                    placeholder="Descripcion del platillo"
                                    value={formik.values.descripcion}
                                    onChange={formik.handleChange}

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