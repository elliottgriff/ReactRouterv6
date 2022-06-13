import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">one</Link>
        </li>
        <li>
          <Link to="/products/p2">two</Link>
        </li>
        <li>
          <Link to="/products/p3">three</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
