function Metric({ value, label }) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-white">{value}</h3>
      <p className="text-sm text-gray-500 uppercase tracking-wide">{label}</p>
    </div>
  );
}
export default Metric;