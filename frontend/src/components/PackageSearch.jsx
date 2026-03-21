function PackageSearchBar() {
  return (

    <div className="w-[70%] mx-auto -mt-12 z-20 relative">

      <div className="flex shadow-xl rounded-lg overflow-hidden">

        <input
          type="text"
          placeholder="Where are you going?"
          className="flex-1 px-6 py-4 outline-none text-lg"
        />

        <input
          type="text"
          placeholder="ENTER DP CODE"
          className="w-[220px] px-6 py-4 border-l outline-none"
        />

        <button className="bg-teal-500 text-white px-10 font-semibold">
          SEARCH
        </button>

      </div>

    </div>
  )
}

export default PackageSearchBar