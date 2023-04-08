import { Link } from "react-router-dom"
import ImgLogo from '../assets/image-logo.png'
export const CategoryCard = ({item}) => {
    return (item ? <>
        <Link to={`/productos/categoria/${item.id}`}  params={{id: item.id}} ><button className="categoryCard">
        <img className={'categoryImg'}src={item.url} alt="" height={"200px"} />
        <h4 className="catName">{item.nombre}</h4>
        {/* <div className="catOcc">{cat.catOcc} {item.nombre}</div> */}
        <div className="catOcc">{item.productos} {item.nombre}</div>
    </button>
    </Link> 
    </>: <>
    <div><button className="categoryCard skeleton">
        <div alt="" className="img-skeleton"><img src={ImgLogo} alt="" /></div>
        <h4 className="catName"></h4>
        {/* <div className="catOcc">{cat.catOcc} {item.nombre}</div> */}
        <div className="catOcc"></div>
    </button>
    </div> 
    </>)
    
}