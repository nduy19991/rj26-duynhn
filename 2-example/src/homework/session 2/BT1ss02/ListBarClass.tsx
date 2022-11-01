import RenderListBarClass from "./RenderListBarClass";

interface IUser {
    title: string;
    percent: string;
    color1: string;
    color2: string;
}



function ListBarClass() {

    const arr: Array<IUser> = [
        {
            title: "BANDWITH",
            percent: "20%",
            color1: "#DC143C",
            color2: "#CD5C5C",
        },
    
        {
            title: "STORAGE",
            percent: "50%",
            color1: "#48D1CC",
            color2: "#7FFFD4",
        },

        {
            title: "USERS",
            percent: "70%",
            color1: "#32CD32",
            color2: "#00FF00",
        },

        {
            title: "VISITORS",
            percent: "30%",
            color1: "#FFD700",
            color2: "#FFFF00",
        },

        {
            title: "EMAILS",
            percent: "45%",
            color1: "#FF00FF",
            color2: "#DA70D6",
        },

        {
            title: "BASIC",
            percent: "80%",
            color1: "#4169E1",
            color2: "#1E90FF",
        },

        {
            title: "OTHERS",
            percent: "37%",
            color1: "#808080",
            color2: "#A9A9A9",
        },
    ];

    return (
        <div>
            {arr?.map((user: IUser) => (
            <RenderListBarClass key={user?.title} userProps={user} />
            ))}
        </div>
    )
}
export default ListBarClass;