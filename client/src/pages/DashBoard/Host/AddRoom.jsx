import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utils";
import { addRoom } from "../../../api/rooms";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const AddRoom = () => {
    const{user} = useAuth()
    const navigate = useNavigate()
    const[loading,setLoading] = useState(false);
    const[uploadButtonText,setUploadButtonText] = useState('Upload Image')

    const[dates,setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault();

        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guest = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0];
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        const image_url = await imageUpload(image);

        const roomData = {
            location,
            category,
            title,
            to,
            from,
            price,
            guest,
            bathrooms,
            host,
            description,
            bedrooms,
            image: image_url?.data?.display_url
        }

        try{
            const data = await addRoom(roomData)
            console.log(data);
            setUploadButtonText("Uploaded")
            toast.success("Room Added!");
            navigate("/dashboard/my-listings")

        }catch(err){
              toast.error(err.message);
              
        } finally{
            setLoading(false)
        }

        console.table(roomData);
       

    }

    // handle date change from react-date-range calender
    const handleDates = ranges => {
        setDates(ranges.selection)
    }

    // handle image upload button text 
    const handleImageChange = image => {
        setUploadButtonText(image.name)
    }
    return (
        <div>
            <Helmet>
                <title>Add Room | DashBoard</title>
            </Helmet>

            {/* form */}
            <AddRoomForm
             handleSubmit={handleSubmit} 
             handleDates={handleDates} 
             dates={dates}
             handleImageChange={handleImageChange}
             loading={loading}
             uploadButtonText={uploadButtonText}></AddRoomForm>

        </div>
    );
};

export default AddRoom;