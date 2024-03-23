import ItemContent from "./ItemContent";
import Sidebar from "./Sidebar";

export default function Container() {
  return (
    <div className="flex wrapper">
      <Sidebar />
      <ItemContent />
    </div>
  );
}
