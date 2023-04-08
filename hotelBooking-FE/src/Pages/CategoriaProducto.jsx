import React,{useEffect, useState} from 'react'
import Card from '../Components/Card'
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
export const CategoriaProducto = () => {

    const [productos,setProductos] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        fetch('http://localhost:8080/productos/categorias/'+id)
        .then(result=>result.json())
        .then(items=>{
            setProductos(items)
        })
      },[]);

  return (
    <div>
        <Outlet/>
        <h2 className='titulo'></h2>
        <div className='grid'>
            {productos?.map(item => (
                <Card key={item.id} item={item}/>
            ))}
        </div>
        </div>
    )
}