import Description from "./components/description";
import Profile from "./components/profile";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="z-index-2 w-full pt-20 max-w-[32rem] md:max-w-[48rem] lg:max-w-[64rem]">
        <div className="flex flex-row flex-wrap gap-10 justify-center items-stretch pb-5">
          <Profile />
          <Description />
        </div>
      </div>
    </div>
  );
}
