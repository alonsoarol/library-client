import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { VscHome } from "react-icons/vsc";

export const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <VscHome />
          <Link to="/">Home</Link>
        </li>
        <li>
          <RiCustomerService2Line />
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <BsTruck />
          <Link to="/providers">Providers</Link>
        </li>
        <li>
          <BsCart3 />
          <Link to="/sales">Sales</Link>
        </li>
        <li>
          <BsBook />
          <Link to="/inventory">Inventory</Link>
        </li>
      </ul>
    </div>
  );
};
