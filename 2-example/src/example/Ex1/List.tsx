import  nd1  from "../../images/1.png";
import  nd2  from "../../images/1.png";
import  nd3  from "../../images/g.png";
import  nd4  from "../../images/tw.png";



interface IUser {
    image: string;

}



function List() {

    const arr: Array<IUser> = [
        {
            image: nd1,
        },
    
        {
            image: nd2,
        },

        {
            image: nd3,
        },

        {
            image: nd4,
        },

    ];

    return (
        <div>
            {/* {arr?.map((user: IUser) => (
            <RenderListBarClass key={user?.title} userProps={user} />
            ))} */}
        </div>
    )
}
export default List;