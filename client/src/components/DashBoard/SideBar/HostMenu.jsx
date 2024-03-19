import ManuItem from "./ManuItem";
import { BsHouseAddFill } from "react-icons/bs";
import { MdMapsHomeWork } from "react-icons/md";

const HostMenu = () => {
    return (
        <>
            <ManuItem
                icon={BsHouseAddFill}
                label='Add Room'
                address='add-room'></ManuItem>

            <ManuItem
                icon={MdMapsHomeWork}
                label='My Listings'
                address='my-listings'></ManuItem>

        </>
    );
};

export default HostMenu;