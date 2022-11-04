import Format from "./Format";
import nd from "../../images/1.png"
interface IUser {
    no: string;
    image: string;
    song: string;
    singer: string;
    time: string;
}



function List() {

    const arr: Array<IUser> = [
        {
            no: "01",
            image: nd,
            song: "My Stress",
            singer: "NF Real music",
            time: "3:22",
        },

        {
            no: "02",
            image: nd,
            song: "Mỉage",
            singer: "Else Twin",
            time: "4:23",
        },

        {
            no: "03",
            image: nd,
            song: "My Stress",
            singer: "NF Real music",
            time: "3:58",
        },

        {
            no: "04",
            image: nd,
            song: "The Hills",
            singer: "The Weekend",
            time: "5:33",
        },

        {
            no: "05",
            image: nd,
            song: "Paralyzed",
            singer: "NF Real music",
            time: "5:08",
        },

        {
            no: "06",
            image: nd,
            song: "Timeless",
            singer: "Lucidious",
            time: "3:50",
        },



    ];

    return (
        <div>
            {arr?.map((user: IUser) => (
                <Format key={user?.no} userProps={user} />
            ))}
        </div>
    )
}
export default List;