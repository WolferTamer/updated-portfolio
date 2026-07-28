import { Archivo_Black } from "next/font/google";
const archivo = Archivo_Black({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Project({
  name,
  children,
  link,
  stack,
}: {
  name: string;
  children: React.ReactNode;
  stack: string;
  link?: string;
}) {
  return (
    <div className="border rounded-lg w-full p-3 flex flex-col gap-4">
      {link ? (
        <a href={link} className={"w-full text-xl " + archivo.className}>
          {name} - <span className={"text-l text-green-500"}>{stack}</span>
        </a>
      ) : (
        <div className={"w-full text-xl " + archivo.className}>
          {name} - <span className={"text-l text-green-500"}>{stack}</span>
        </div>
      )}

      <div>{children}</div>
    </div>
  );
}
