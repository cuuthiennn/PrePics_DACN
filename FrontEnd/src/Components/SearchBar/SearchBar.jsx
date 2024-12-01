function SearchBar(){
    return (
        <>
          <div className="flex items-center space-x-2  mt-4">
            <input type="text" placeholder="Tìm kiếm hình ảnh,video,.." className="flex-1 p-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring focus:ring-primary" />
            <button className="bg-green-700 text-white hover:bg-green-750 active:bg-green-800 px-4 py-2 rounded-lg border border-transparent transition duration-200 transform active:scale-95">Tìm Kiếm</button>

          </div>


        </>
    );
}
export default SearchBar