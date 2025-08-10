import CafeCard from "@/components/cafe/CafeCard";
import Ad from "@/components/cafe/Ad";
import Finder from "@/components/cafe/Finder";
import SearchBar from "@/components/cafe/SearchBar";
export default function Home() {
  return (

  <div className="min-h-screen w-full text-[#EAEAEA] px-6 py-8 flex flex-col gap-[15px] text-[#A7A7A7]">
    <SearchBar/>
    <Ad/>
    <Finder/>
    </div>
 
  );
}
