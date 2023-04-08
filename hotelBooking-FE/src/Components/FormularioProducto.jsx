import React from 'react'
import '../Css/formulario-producto.css'
import { FaPlus, FaTruckLoading } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { url_base } from '../utils/index.js'
import axios from 'axios'

const FormularioProducto = () => {

  const navigate = useNavigate()
  const inputRef = useRef()
  const imageRef = useRef();

  const [categorias, setCategorias] = useState(null)
  const [ciudad, setCiudad] = useState(null)
  const [atributo, setAtributo] = useState(null)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    fetch(`${url_base}/categorias`)
      .then((response) => {
        return response.json()
      })
      .then((data) => setCategorias(data))
      .catch((err) => console.log(err))

    fetch(`${url_base}/ciudades`)
      .then((response) => {
        return response.json()
      })
      .then((data) => setCiudad(data))
      .catch((err) => console.log(err))

    fetch(`${url_base}/caracteristicas`)
      .then((response) => {
        return response.json()
      })
      .then((data) => setAtributo(data))
      .catch((err) => console.log(err))
  }, [])

  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    imagenes: [],
    categoria_id: null,
    direccion_calle: '',
    direccion_nroPuerta: '',
    ciudad_id: null,
    caracteristicas_id: []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token");
    const config = {
      method: 'post',
      url: `${url_base}/productos`,
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      data : JSON.stringify(product)
    }
    axios.request(config)
    .then((response) => {
      if (response.status === 201) {
        navigate('/creacion-exitosa')}
    })
    .catch((error) => {
      setErrorMsg(error.response.data)
    })
  }

  const handleChange = (name, value) => {
    setProduct({
      ...product,
      [name]: value.trim(),
    })
  }

  const handleCheckbox = (e) => {
    const { value } = e.target
    if (e.target.checked) {
      product.caracteristicas_id.push(value)
    } else {
      product.caracteristicas_id.pop(value)
    }
  }

  const addImage = (e) => {
    e.preventDefault()
    const formData = new FormData()
    if (!inputRef.current.files[0]) return;
    formData.append('file', inputRef.current.files[0])
    axios.post(`${url_base}/files/upload`, formData,
      { headers: {
        'Content-Type': 'multipart/form-data'}})
    .then((res) => {
      setProduct({...product, imagenes: [...product.imagenes, res.data]})
    })
  }

  const deleteImage = (imgUrl) => {
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${url_base}/files/delete`,
      headers: { 
        'Content-Type': 'text/plain'
      },
      data : imgUrl
    }
    axios.request(config)
    .then((res) => {
      setProduct({...product, imagenes: product.imagenes.filter(image => image !== imgUrl)})
  })
  }
  return (
    <div>
      <form className="formRes-1" onSubmit={handleSubmit}>
        <div>
          <section>
            <section className="name-section-1">
              <div>
                <label>Nombre de la propiedad </label>
                <input
                  type="text"
                  name="nombre"
                  required="Campo obligatorio"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </div>
              <div>
                <label>Categoria</label>
                <select
                  className={`${
                    product.categoria_id === '' || product.categoria_id === 'NaN'
                      ? 'invalid'
                      : ''
                  }`}
                  name="categoria_id"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <option value="NaN">Selecciona una categoria</option>
                  {categorias?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </div>
              <section className="direc-num">
                <div className='calle'>
                  <label>Calle</label>
                  <input
                    type="text"
                    name="direccion_calle"
                    required="Campo obligatorio"
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                </div>
                <div className='numero-calle'>
                  <label>Numero</label>
                  <input
                    type="text"
                    name="direccion_nroPuerta"
                    required="Campo obligatorio"
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                </div>
              </section>
              <div>
                <label>Ciudad</label>
                <select
                  className={`${
                    product.ciudad_id === '' || product.ciudad_id === 'NaN'
                      ? 'invalid'
                      : ''
                  }`}
                  name="ciudad_id"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <option value="NaN">Selecciona una ciudad</option>
                  {ciudad?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </section>
            <div className="descrip">
              <label>Descripcion</label>
              <textarea
                placeholder="Escribir aquí"
                type="textarea"
                name="descripcion"
                required="Campo obligatorio"
                rows="4"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
          </section>

          <h3>Agregar atributos</h3>

          <section className="section-check">
            {atributo?.map((item) => (
              <div>
                <input
                  type="checkbox"
                  name="caracteristicas_id"
                  value={item.id}
                  onChange={handleCheckbox}
                />{' '}
                {item.titulo}
              </div>
            ))}
          </section>

          <h3>Cargar imágenes</h3>

          <div className="section-4">
            <div className='productImages'>
              {product.imagenes.map((imgUrl) => (
                <div>
                  <img src={imgUrl} alt=""
                    ref={imageRef}/>
                  <FaPlus className='deleteImg'
                    onClick={() => deleteImage(imgUrl)}/>
                </div>
              ))}
            </div>
            <div className='newImage'>
              <input
                type="file"
                name="cargarImg"
                accept="image/*"
                ref={inputRef}
                // required="Campo obligatorio"
              />
              <FaPlus className="icono-add second"
                onClick={addImage}/>
            </div>
          </div>

          <h3>Políticas del producto</h3>

          <section className="section-3">
            <section>
              <h3>Normas de la casa</h3>
              <label>Descripción</label>
              <textarea
                placeholder="Escribir aquí"
                name="descripcion1"
                // required="Campo obligatorio"
                rows="4"
              />
            </section>
            <section>
              <h3>Salud y seguridad</h3>
              <label>Descripción</label>
              <textarea
                placeholder="Escribir aquí"
                name="descripcion2"
                // required="Campo obligatorio"
                rows="4"
              />
            </section>
            <section>
              <h3>Políticas de cancelación</h3>
              <label>Descripción</label>
              <textarea
                placeholder="Escribir aquí"
                name="descripcion3"
                // required="Campo obligatorio"
                rows="4"
                style={{ width: '100%' }}
              />
            </section>
          </section>
        </div>
        {errorMsg &&
          <p className="errorMsg"
            style={{
              color: 'red',
              textAlign: 'center',
              fontSize: '.8rem',
            }}>{errorMsg}</p>}
        <div className="button-crear">
          <button type="submit">Crear</button>
        </div>

      </form>
    </div>
  )
}

export default FormularioProducto