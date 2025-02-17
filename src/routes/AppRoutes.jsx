import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Draw } from "../pages/Home/Draw/Draw"

const AppRoutes = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Navigate to="/"/>} />
                <Route path="/draw" element={<Draw />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes