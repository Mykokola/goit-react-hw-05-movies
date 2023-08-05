import { PropTypes  } from "react";
export const SearchBox = ({submitSearch,handSetState,searchForm}) => {
  return (
    <>
      <form onSubmit={submitSearch}>
        <input onChange={handSetState} value={searchForm} type="text" />
        <button  type="button">Search</button>
      </form>
    </>
  );
};
SearchBox.PropTypes = {
  submitSearch: PropTypes.func.isRequired,
  handSetState: PropTypes.func.isRequired,
  searchForm: PropTypes.string.isRequired
}