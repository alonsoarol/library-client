import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

export const InventoryTh = ({ title, onClick, isTarget, isAsc }) => {
  if (isTarget) {
    return (
      <th>
        <button onClick={onClick}>
          {title}
          {isAsc ? <TiArrowSortedDown /> : <TiArrowSortedUp />}
        </button>
      </th>
    );
  }
  return (
    <th>
      <button onClick={onClick}>{title}</button>
    </th>
  );
};
