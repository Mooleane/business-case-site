export default function Feature({ name, description }) {
  return (
    <li className="feature btn btn-small">
      <h2>{name}</h2>
      <p>{description}</p>
    </li>
  );
}
