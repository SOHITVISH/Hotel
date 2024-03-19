import ManuItem from "./ManuItem";
import { BsFingerprint } from "react-icons/bs";

const GuestMenu = () => {
    return (
        <>
            <ManuItem
                icon={BsFingerprint}
                label='My Bookings'
                address='my-bookings'></ManuItem>
        </>
    );
};

export default GuestMenu;