import ProductCard from './components/ProductCard.jsx';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 2499, category: 'Electronics', description: 'Comfortable over-ear headphones with clear audio and long battery life.', inStock: true },
  { id: 2, name: 'Mechanical Keyboard', price: 3299, category: 'Accessories', description: 'Compact keyboard with tactile switches for coding and everyday work.', inStock: true },
  { id: 3, name: 'USB-C Hub', price: 1499, category: 'Accessories', description: 'Multi-port USB-C hub with HDMI, USB, and card-reader connectivity.', inStock: false }
];

export default function App() {
  return (
    <main className="page">
      <header>
        <p className="eyebrow">Week 2 · React Fundamentals</p>
        <h1>Product Information Components</h1>
        <p>Reusable React components rendered from product data.</p>
      </header>
      <section className="grid">
        {products.map((product) => <ProductCard key={product.id} {...product} />)}
      </section>
    </main>
  );
}
