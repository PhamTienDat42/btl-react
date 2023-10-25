import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import { ROUTERs } from "./utils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";

const RenderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERs.USERS.HOME,
            component: <HomePage />,
        },
        {
            path: ROUTERs.USERS.PROFILE,
            component: <ProfilePage />,
        },
    ];
    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                )
                )}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return RenderUserRouter();
};

export default RouterCustom;