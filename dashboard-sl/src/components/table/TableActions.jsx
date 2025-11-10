import IconButton from "../ui/IconButton";
import { RiFileEditLine } from "react-icons/ri";
import { CiTrash } from "react-icons/ci";

const TableActions = () => (
  <div className="flex justify-center items-center gap-2 md:gap-3">
    <IconButton
      icon={RiFileEditLine}
      bgColor="bg-main"
      hoverBgColor="bg-mainHover"
    />
    <IconButton icon={CiTrash} bgColor="bg-red" hoverBgColor="bg-deepRed" />
  </div>
);
export default TableActions;
