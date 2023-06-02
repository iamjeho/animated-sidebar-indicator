import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../sidebar/Sidebar";
import "./appLayout.scss";
import { useState, useEffect } from "react";
import { CATEGORY_MAP } from "../../constants";

const AppLayout = () => {
    const [category, setCategory] = useState("관리자 생성");
    const location = useLocation();

    useEffect(() => {
        setCategory(CATEGORY_MAP[location.pathname]);
    }, [location]);

    return (
        <div className="layout_container">
            <Sidebar category={category} setCategory={setCategory} />
            <div>
                <Header category={category} />
                <div style={{ padding: "2rem" }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AppLayout;
