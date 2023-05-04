import "./styles.css";
import Data from "./data.json";
export default function ProductList() {
  console.log(Data);
  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((el) => {
            return (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.pname}</td>
                <td>{el.qty}</td>
                <td>{`Rs. ${el.price}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
