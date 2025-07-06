import Categories from "./Categories/Categories";
import HeroStats from "./Hero/HeroStats";
import AllJobs from "./Jobs/AllJobs";
import SearchJobs from "./SearchJob/SearchJobs";

export default function Careers() {

  return (
    <>
      {/* Search job */}
      <SearchJobs />

      {/* Categories */}
      <Categories />

      {/* Show Jobs Section */}
      <AllJobs />

      {/* Stats */}
      <HeroStats />
    </>
  );
}
