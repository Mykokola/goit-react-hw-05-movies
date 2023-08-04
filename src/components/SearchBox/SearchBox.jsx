export const SearchBox = (submitSearch,handSetState,searchForm) => {
  return (
    <>
      <form onSubmit={submitSearch}>
        <input onChange={handSetState} value={searchForm} type="text" />
        <button  type="button">Search</button>
      </form>
    </>
  );
};
