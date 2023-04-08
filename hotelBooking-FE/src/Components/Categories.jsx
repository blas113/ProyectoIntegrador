import { useEffect, useState } from 'react'
import { CategoryCard } from "./CategoryCard";
import '../css/categories.css';


export const Categories = ({url_base}) => {

    const [data, setData] = useState()
    const [failedToRetrieve, setFailedToRetrieve] = useState(false);
    const categorias = "/categorias"

    useEffect(() => {
        fetch(url_base + categorias)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
        return response.json();
      })
        .then((data) => setData(data))
        .catch((err) => setFailedToRetrieve(true));
    }, [])

    return <section className="categories">
    <h2 className="catTitle">Buscar por tipo de Alojamiento</h2>
    <div className="cardsContainer">
      {failedToRetrieve ? "Hubo un problema al buscar las categorias :(" : 
        data ? data.map(item => (<CategoryCard key={item.id} item={item} />)) :
        <>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </>
      }
    </div>
    </section>
}