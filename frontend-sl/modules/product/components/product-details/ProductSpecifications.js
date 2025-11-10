"use client";
export default function ProductSpecifications({ specs = [] }) {
  if (!specs.length) return null;
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Specifications</h3>
      <ul className="divide-y divide-border bg-white rounded-xl border border-border">
        {specs.map((s, i) => (
          <li key={i} className="flex justify-between p-3 text-sm">
            <span className="font-medium text-foreground">{s.key}</span>
            <span className="text-muted-foreground">{s.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
