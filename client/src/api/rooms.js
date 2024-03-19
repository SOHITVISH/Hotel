import axiosSecure from "."

// fetch all room data from database
export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms')
    return data;
}

//  fetch single room data from database
export const getRoom = async (id) => {
    const { data } = await axiosSecure(`/room/${id}`)
    return data;
}

// fetch all rooms of a host
export const getHostRooms = async (email) => {
    const { data } = await axiosSecure(`/rooms/${email}`)
    return data;
}

// save a room data in database
export const addRoom = async roomData => {
    const { data } = await axiosSecure.post("/rooms", roomData);
    return data;
}

// get user role
export const getRole = async email => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data.role;
}