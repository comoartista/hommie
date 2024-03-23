import { BiSearch } from "react-icons/bi";

export default function SearchForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      action="#"
      className="relative w-[464px] h-16 rounded-lg primary-color--light flex ">
      <input
      onChange={(e) => console.log(e.target.value)}
        className="h-full ml-4 mr-16 primary-color--light rounded-lg outline-none"
        type="text"
        placeholder="Start search"
      />
      <button className="absolute top-1/2 -translate-y-1/2 right-4 h-9 w-9 primary-color rounded-full flex items-center justify-center">
        {" "}
        <BiSearch className=" " color="#fff" size={16} />{" "}
      </button>
    </form>
  );
}
