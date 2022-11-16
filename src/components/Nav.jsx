import { Link } from "react-router-dom";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <LoginOutlinedIcon className="nav-icon" />
          <Link to="/">Sign In</Link>
        </li>
        <li>
          <HomeOutlinedIcon className="nav-icon" />
          <Link to="/home">Home</Link>
        </li>
        <li>
          <SupportAgentOutlinedIcon className="nav-icon" />
          <Link to="/customers">Employees</Link>
        </li>
        <li>
          <LocalShippingOutlinedIcon className="nav-icon" />
          <Link to="/providers">Providers</Link>
        </li>
        <li>
          <ShoppingCartOutlinedIcon className="nav-icon" />
          <Link to="/sales">Sales</Link>
        </li>
        <li>
          <AutoStoriesIcon className="nav-icon" />
          <Link to="/inventory">Inventory</Link>
        </li>
      </ul>
    </div>
  );
};
