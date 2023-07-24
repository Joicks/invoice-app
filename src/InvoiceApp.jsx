/* eslint-disable react/jsx-key */
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListProductView } from "./components/ListProductView";
import { TotalView } from "./components/TotalView";
import { useEffect, useState } from "react";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
  id: 0,
  name: "",
  Client: {
    firstname: "",
    lastname: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: "",
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

export const InvoiceApp = () => {

  const [activeForm, setActiveForm] = useState(false);

  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4);

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);

  const { id, name, Client, company } = invoice;

  useEffect(() => {
    const data = getInvoice();
    console.log(data);
    setInvoice(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    setTotal(calculateTotal(items));
    // console.log("cambio el items!");
  }, [items]);

  const handlesAddItems = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        id: counter,
        product: product.trim(),
        price: +price.trim(),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);

    setCounter(counter + 1);
  }

  const handlerDeleteItem = (id) =>{
    setItems(items.filter( item => item.id !== id ))
  }

  const onActiveForm = () => {
    setActiveForm(!activeForm);
  }

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Ejemplo factura</div>
          <div className="card-body">
            <InvoiceView id={id} name={name} />

            <div className="row my-3">
              <div className="col">
                <ClientView title="Datos Del Cliente" Client={Client} />
              </div>

              <div className="col">
                <CompanyView title="Datos de la Empresa" company={company} />
              </div>
            </div>

            <ListProductView title="Productos de la factura" items={items} handlerDeleteItem={ id => handlerDeleteItem (id) } />
            <TotalView total={total} />
            <button className="btn btn-secondary"
            onClick={onActiveForm}>{ !activeForm ? 'Agregar Item' : 'Cerrar Form'}</button>
            { !activeForm || <FormItemsView handler={handlesAddItems} />}
          </div>
        </div>
      </div>
    </>
  );
};
