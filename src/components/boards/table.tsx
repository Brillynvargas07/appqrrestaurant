export default function Table(){
    const data = [
        { numero: 1, estadoPedido: 'Tomado', estadoMesa: 'Ocupada', precio: '$46.000' },
        { numero: 2, estadoPedido: 'No tomado', estadoMesa: 'No ocupada', precio: '$0' },
        { numero: 3, estadoPedido: 'No tomado', estadoMesa: 'Ocupada', precio: '$0' },
        { numero: 4, estadoPedido: 'En proceso', estadoMesa: 'Ocupada', precio: '$120.000' },
        { numero: 5, estadoPedido: 'Entregado', estadoMesa: 'Ocupada', precio: '$70.000' },
        { numero: 6, estadoPedido: 'No tomado', estadoMesa: 'Ocupada', precio: '$0' },
      ];
    return (
        <div className="table-container">
          <table className="table">
            <thead className="table-body" id="table-head">
              <tr className="row" >
                <th className="column">Numero</th>
                <th className="column">Estado del pedido</th>
                <th className="column">Estado de la mesa</th>
                <th className="column">Precio</th>
              </tr>
            </thead>
            <tbody className="table-body">
                {data.map((row, index) => (
                    <tr className="row" key={index}>
                        <td className="cell">{row.numero}</td>
                        <td className="cell">{row.estadoPedido}</td>
                        <td className="cell">{row.estadoMesa}</td>
                        <td className="cell">{row.precio}</td>
                    </tr>
                ))}
              <tr>
                <td colSpan={4}>
                  <div className="icon">
                    <div className="circle"><h1 className="circle__text">+</h1></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
  
}