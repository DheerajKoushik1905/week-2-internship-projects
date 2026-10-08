export default function ProductCard({ name, price, category, description, inStock }) {
  return (
    <article className="product-card">
      <span className="category">{category}</span>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="product-footer">
        <strong>₹{price.toLocaleString('en-IN')}</strong>
        <span className={inStock ? 'stock available' : 'stock unavailable'}>
          {inStock ? 'In stock' : 'Out of stock'}
        </span>
      </div>
    </article>
  );
}
