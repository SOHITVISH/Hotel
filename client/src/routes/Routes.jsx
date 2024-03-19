import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import { getRoom } from "../api/rooms";
import DashBoardLayout from "../layouts/DashBoardLayout";
import AddRoom from "../pages/DashBoard/Host/AddRoom";
import MyListings from "../pages/DashBoard/Host/MyListings";
import HostRoute from "./HostRoute";
import AdminRoute from "./AdminRoute";
import ManageUsers from "../pages/DashBoard/Admin/ManageUsers";
import Profile from "../pages/DashBoard/Common/Profile";
import MyBookings from "../pages/DashBoard/Guest/MyBookings";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/room/:id",
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
                loader: ({ params }) => getRoom(params.id)
            },

        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: "add-room",
                element: <PrivateRoute>
                    <HostRoute>
                        <AddRoom></AddRoom>
                    </HostRoute>
                </PrivateRoute>
            },
            {
                path: "my-listings",
                element:
                    <PrivateRoute>
                        <HostRoute>
                            <MyListings></MyListings>
                        </HostRoute>
                    </PrivateRoute>
            },
            {
                path:"profile",
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:"my-bookings",
                element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: "manage-users",
                element:
                    <PrivateRoute>
                        <AdminRoute>
                            <ManageUsers></ManageUsers>
                        </AdminRoute>
                    </PrivateRoute>
            }
        ]
    }
])

export default routes;