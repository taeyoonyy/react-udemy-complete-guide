import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: "My First book",
    description: "The first book i ever"
  },
  {
    id: 'p2',
    price: 5,
    title: "My second book",
    description: "The second book i ever"
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => <ProductItem
          id={item.id}
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
