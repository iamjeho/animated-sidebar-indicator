import { SIDEBAR_NAV_ITEMS } from "../../constants";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = ({ category, setCategory }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">증명서 통합관리시스템</div>

            <div className="sidebar__menu">
                <div></div>
                {SIDEBAR_NAV_ITEMS.map((item, index) => (
                    <Link
                        to={item.to}
                        key={index}
                        onClick={() => setCategory(item.display)}
                    >
                        <div
                            className={`sidebar_menu_wrapper ${
                                category === item.display ? "selected" : ""
                            }`}
                        >
                            <div className="sidebar__menu__item__icon">
                                <i className={item.icon} />
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
