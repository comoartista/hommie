import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <div className="shadow-xl">
      <header className="flex justify-between items-center wrapper h-32">
        <div className="flex items-center justify-between gap-4 ">
          <Logo />
          <SearchForm />
        </div>
        <BookmarksButton />
      </header>
    </div>
  );
}
