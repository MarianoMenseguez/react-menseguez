import {useEffect, useState} from "react";
import desafio from "../utils/Promesa";
import ItemDetail from "./ItemDetail";
import {data} from "../utils/ItemList";

export default function ItemDetailContainer() {

  const [oneProduct, setOneProduct] = useState();

  useEffect(() => {
    desafio(data[2])
      .then(result => setOneProduct(result))
      .catch(err => console.log(err))
  }, [])

  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
      <div className="flex justify-center items-center min-h-[70vh] w-screen">
        <div className="spin"></div>
        <p className="mt-6 text-xl">Cargando</p>
      </div>
  )
}