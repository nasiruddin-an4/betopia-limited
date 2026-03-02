type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function FilterSelect({
  label,
  options,
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border-0 
    outline-0 
    ring-0 
    bg-transparent
    pr-4 py-2 
    text-sm
    lg:text-lg
    focus:ring-0
    focus:outline-none"
    >
      <option value="">{label}</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

// type Props = {
//   label: string;
//   options: string[];
//   value: string;
//   onChange: (value: string) => void;
// };

// export default function FilterSelect({ label, options, value, onChange }: Props) {
//   return (
//     <select
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       className="border-0
//     outline-0
//     ring-0
//     bg-transparent
//     px-4 py-2
//     text-sm
//     lg:text-lg
//     focus:ring-0
//     focus:outline-none"
//     >
//       <option value="">{label}</option>
//       {options.map((item) => (
//         <option key={item} value={item}>
//           {item}
//         </option>
//       ))}
//     </select>
//   );
// }
