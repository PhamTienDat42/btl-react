import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERs } from "./utils/router";

const RenderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERs.USERS.HOME,
            component: <HomePage />,
        },
    ];
    return (
        <Routes>
            {userRouters.map((item, key) => (
                <Route key={key} path={item.path} element={item.component} />
            )
            )}
        </Routes>
    );
};

const RouterCustom = () => {
    return RenderUserRouter();
};

export default RouterCustom;