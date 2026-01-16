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
  active = false,
}: {
  name: string;
  children: React.ReactNode;
  link?: string;
  active?: boolean;
}) {
  return (
    <div className="border rounded-lg w-full p-3 flex flex-col gap-4">
      {link ? (
        <a href={link} className={"w-full text-xl " + archivo.className}>
          {name} -{" "}
          <span
            className={"text-l " + (active ? "text-green-500" : "text-red-500")}
          >
            {active ? "Active" : "Inactive"}
          </span>
        </a>
      ) : (
        <div className={"w-full text-xl " + archivo.className}>
          {name} -{" "}
          <span
            className={"text-l " + (active ? "text-green-500" : "text-red-500")}
          >
            {active ? "Active" : "Inactive"}
          </span>
        </div>
      )}

      <div>{children}</div>
    </div>
  );
}
