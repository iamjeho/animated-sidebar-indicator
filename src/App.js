import "./App.scss";
import "boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/Homepage";
import CreateAdmin from "./pages/CreateAdmin";
import CreateSchema from "./pages/CreateSchema";
import CertForm from "./pages/CertForm";
import ConnectUser from "./pages/ConnectUser";
import IssueCert from "./pages/IssueCert";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/createadmin" element={<CreateAdmin />} />
                    <Route path="/createschema" element={<CreateSchema />} />
                    <Route path="/certform" element={<CertForm />} />
                    <Route path="/connectuser" element={<ConnectUser />} />
                    <Route path="/issuecert" element={<IssueCert />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
