import { useLoaderData, useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReserVation from "../../components/RoomDetails/RoomReserVation";


const RoomDetails = () => {
   const room = useLoaderData()

    return (

        <Container>
            <Helmet>
                <title>{room.title}</title>
            </Helmet>

            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    {/* header  */}
                    <Header room={room}></Header>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                    {/* room info */}
                    <RoomInfo room={room}></RoomInfo>
                    <div className="md:col-span-3 order-first md:order-last mb-10">
                        {/* roomReservation  */}
                        <RoomReserVation room={room}></RoomReserVation>
                    </div>


                </div>
            </div>

        </Container>


    );
};

export default RoomDetails;