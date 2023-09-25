import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const data = useLoaderData();

  const handleSearch = () => {
    setIsSearch(true);
    const searchResult = data.filter((item) =>
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(searchResult);
  };

  useEffect(() => {
    if (!searchQuery) {
      setSearchResult([]);
      setIsSearch(false);
    }
  }, [searchQuery]);

  return (
    <>
      <div className=" h-80 sm:h-[478px] bg-[url('https://i.ibb.co/CBP7p28/Rectangle-4281.png')] w-full  bg-cover ">
        <div className="flex justify-center items-center h-full w-full bg-[#ffffffeb] ">
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="font-bold text-lg sm:text-4xl lg:text-5xl">
              I Grow By Helping People In Need
            </h1>
            <div className="flex justify-start items-center mt-8 rounded-lg overflow-hidden ">
              <input
                type="text"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => {
                  setIsSearch(false);
                  return setSearchQuery(e.target.value);
                }}
                className="text-lg outline-none p-1 sm:p-2 w-52 sm:w-full border-[1px] border-gray-200 border-r-0 rounded-l-lg placeholder:text-xs"
              />
              <button
                onClick={handleSearch}
                className="p-1 sm:p-2 bg-red-500 text-lg text-white px-3 sm:px-5  border-[1px] border-red-500">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* hero section  */}

      <div className="container mx-auto px-5 sm:px-10">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-12 ">
          {searchResult?.length > 0
            ? searchResult.map((donate) => (
                <Card key={donate.id} donate={donate} />
              ))
            : !isSearch &&
              data?.map((donate) => <Card key={donate.id} donate={donate} />)}
        </div>
        {!(searchResult?.length > 0) && isSearch && (
          <h1 className=" font-bold text-center text-red-400 text-6xl w-full ">
            Not Found
          </h1>
        )}
      </div>
    </>
  );
};

export default Home;

{
  /* <div className="absolute top-32 sm:top-52 left-0 right-0 w-full flex flex-col justify-center items-center z-10">
  <h1 className="font-bold text-lg sm:text-4xl lg:text-5xl	">
    I Grow By Helping People In Need
  </h1>
  <div className="flex justify-start items-center mt-8 rounded-lg overflow-hidden ">
    <input
      type="text"
      placeholder="Search here..."
      className="text-lg outline-none p-1 sm:p-2 w-52 sm:w-full border-[1px] border-gray-200 border-r-0 rounded-l-lg placeholder:text-xs"
    />
    <button className="p-1 sm:p-2 bg-red-500 text-lg text-white px-3 sm:px-5  border-[1px] border-red-500">
      Search
    </button>
  </div>
</div>; */
}
