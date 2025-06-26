const ProductStats = ({
  stats,
}: {
  stats: { icon: string; label: string; value: string }[];
}) => (
  <div className="space-y-4">
    {stats.map((item, idx) => (
      <div key={idx} className="flex gap-3">
        <img src={item.icon} alt={item.label} />
        {item.label}: <strong>{item.value}</strong>
      </div>
    ))}
  </div>
);

export default ProductStats;
