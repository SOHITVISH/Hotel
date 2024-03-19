import { FaUserCog } from "react-icons/fa";
import ManuItem from "./ManuItem";

const AdminMenu = () => {
    return (
        <>
             <ManuItem
                icon={FaUserCog}
                label='Manage-users'
                address='manage-users'></ManuItem>
        </>
    );
};

export default AdminMenu;