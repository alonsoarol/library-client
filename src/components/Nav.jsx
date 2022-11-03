import { Link } from "react-router-dom";
import { BsBook } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";

export const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <FiLogIn className="nav-icon" />
          <Link to="/">Sign In</Link>
        </li>
        <li>
          <RiCustomerService2Line className="nav-icon" />
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <BsTruck className="nav-icon" />
          <Link to="/providers">Providers</Link>
        </li>
        <li>
          <BsCart3 className="nav-icon" />
          <Link to="/sales">Sales</Link>
        </li>
        <li>
          <BsBook className="nav-icon" />
          <Link to="/inventory">Inventory</Link>
        </li>
      </ul>
    </div>
  );
};
