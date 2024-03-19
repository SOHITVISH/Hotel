import { Helmet } from "react-helmet-async";
import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>StayVista | Vacation Homes & Condo Rentals</title>
            </Helmet>
            {/* category section  */}
            <Categories></Categories>
            
            {/* rooms section  */}
            <Rooms></Rooms>
        </div>
    );
};

export default Home;