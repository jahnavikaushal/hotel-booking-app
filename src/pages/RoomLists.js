import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setRooms } from "../features/rooms/roomSlice";
import { roomList } from "../data/roomList";
import '../assets/styles/roomListStyles.css';

const RoomList = () => {
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms);
    

    useEffect(() => {
        async function fetchData() {
            try {
                // const response = await fetch("url")
                // dispatch(setRooms(response.data))
                dispatch(setRooms(roomList))
            }
            catch (error) {
                console.log("Error fetching rooms", error)
            }
        } 
        fetchData();
    },[])
    
    return(
        <div>
            <h2>Rooms</h2>
            {rooms?.hotels?.map((room, index) => (
                <div className = "roomsName" key={room.id}>
                    {console.log("rooms", room.name)}
                    {room.name}
                </div>
            ))}
        </div>
    )
}

export default RoomList;