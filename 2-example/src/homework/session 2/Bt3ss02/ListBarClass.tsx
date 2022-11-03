import RenderListBarClass from "./RenderListBarClass";
import fb from "../../../images/fb.png";
import tw from "../../../images/tw.png";
import pin from "../../../images/pin.png";
import g from "../../../images/g.png";

interface IUser {
    title: string;
    number: string;
    color: string;
    logo: string;
}



function ListBarClass() {

    const arr: Array<IUser> = [
        {
            title: "Facebook",
            number: "5.000.000 Likes",
            color: "#1977f3",
            logo: fb,
        },
    
        {
            title: "Twitter",
            number: "40.000 Tweets",
            color: "#1DA1F2",
            logo: tw,
        },

        {
            title: "Google +",
            number: "460.000 Plus",
            color: "#dd4d3f",
            logo: g,
        },

        {
            title: "Pinterset",
            number: "34.000 Pins",
            color: "#cd2129",
            logo: pin,
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