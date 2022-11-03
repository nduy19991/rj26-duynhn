import RenderListBarClass from "./RenderListBarClass";
import ad from "../../../images/ad.png"
import drb from "../../../images/drb.png"
import net from "../../../images/net.png"
import gg from "../../../images/gg.png";
import java from "../../../images/java.png";

interface IUser {
    logo: string;
    title: string;
    color: string;
    percent: string;
}



function ListBarClass() {

    const arr: Array<IUser> = [
        {
            logo: ad,
            title:"HTML",
            color: "#00FF00",
            percent: "70%",
        },
    
        {
            logo: gg,
            title:"CSS",
            color: "#dd4d3f",
            percent: "60%",
        },

        {
            logo: drb,
            title:"PHP",
            color: "#48D1CC",
            percent: "35%",
        },

        {
            logo: java,
            title:"Java",
            color: "#FFD700",
            percent: "80%",
        },
        {
            logo: net,
            title:".Net",
            color: "#FF00FF",
            percent: "45%",
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