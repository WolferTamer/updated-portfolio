import Profile from "./components/profile";

export default function Home() {
  return (
    <div
      className="page-wrapper p-20"
      style={{ backgroundImage: "url(/background-gradient.png)" }}
    >
      <div className="z-index-2 w-full">
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          <Profile />
          <div className="flex flex-col w-full md:w-[50%] lg: w-[60%]">
            <div className="bg-neutral-100 dark:bg-neutral-900 text-amber-950 dark:text-amber-100 rounded rounded-md p-5 shadow-lg/10">
              Test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
