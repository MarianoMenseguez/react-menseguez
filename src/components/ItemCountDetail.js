import {useEffect, useState} from "react";

export default function ItemCountDetail(props) {

  const [countDetail, setCountDetail] = useState(0);

  useEffect(() => {
    setCountDetail(props.min)
  }, [props.min])

  function decrement() {
    if (countDetail !== props.min) {
      setCountDetail(countDetail - 1)
    } else {
      alert(`¡No puedes agregar menos de ${props.min} unidad!`);
    }
  }

  function increment() {
    if (countDetail !== props.stock) {
      setCountDetail(countDetail + 1)
    } else {
      alert(`¡No puedes agregar más de ${props.stock} unidades!`);
    }
  }

  function addToCart() {
    alert(`¡Se agregaron al carrito ${countDetail} unidades!`);
  }

  return (
    <div className="flex items-center gap-8 w-full">
      <div
        className="flex justify-between items-center px-4 py-1 border-indigo-600 border-2 rounded-md w-1/3 hover:bg-gray-50">
        <button className="mr-5 px-4 py-1.5 hover:bg-indigo-100" onClick={decrement}>-</button>
        {countDetail}
        <button className="ml-5 px-4 py-1.5 hover:bg-indigo-100" onClick={increment}>+</button>
      </div>
      <button
        type="submit"
        className="w-full w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={addToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
}