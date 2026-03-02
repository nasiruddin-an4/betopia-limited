type Props = {
  label: string;
  value: string;
  onRemove: () => void;
};

export default function ActiveFilterChip({ label, value, onRemove }: Props) {
  return (
    <div className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-full text-sm">
      <span>
        {label}: {value}
      </span>
      <button onClick={onRemove} className="font-bold">×</button>
    </div>
  );
}
