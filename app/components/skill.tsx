import { Archivo_Black } from "next/font/google";
import { JSX } from "react";
const archivo = Archivo_Black({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export default function Skill({
  name,
  icon,
  children,
}: {
  name: string;
  icon: JSX.Element;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-lg w-full p-3 lg:w-[45%] flex flex-col gap-4">
      <div
        className={
          "flex flex-row flex-nowrap justify-start gap-2 w-full align-center text-xl " +
          archivo.className
        }
      >
        <div className="relative w-8 h-8">{icon}</div>
        <div>{name}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
