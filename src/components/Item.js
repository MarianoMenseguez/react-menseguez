import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Item.css";
import desafio from "../utils/Promesa";
import { data } from "../utils/ItemList";

const onAdd= (quantity) => {
	alert('Agregaste ' + quantity + ' elementos.')
}

const Item = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    desafio(data)
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    {products.map((item) => (

        <Card className="Card" bg="black" border="dark" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image}/>
        <Card.Body className="productBody">
          <Card.Title className="productTitle">{item.name}</Card.Title>
          {/* <Card.Text className="productDescription">{item.description}</Card.Text> */}
          <div className="price">
            <span>{item.price}</span>
            {/* <span>stock: {item.stock}</span> */}
          </div>
          <div className="Details">
            <span>{item.details}</span>
            {/* <span>stock: {item.stock}</span> */}
          </div>
          <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
        </Card.Body>
      </Card>
      
    ))}
  </>
  );
};
export default Item;
