import { ButtonProps } from "@/interfaces";
export default function Button({ title, styles }: ButtonProps) {
  return (
    <button className={`px-4 py-2 font-semibold ${styles}`}>{title}</button>
  );
}
