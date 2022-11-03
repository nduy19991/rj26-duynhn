import RenderListBarClass from "./RenderListBarClass";

interface IUser {
    title: string;
    number: string;
}



function ListBarClass() {

    const arr: Array<IUser> = [
        {
            title: "TODAY'S VISITORS",
            number: "24,599",
        },
    
        {
            title: "YESTERDAY'S VISITORS",
            number: "15,699",
        },

        {
            title: "TOTAL DOWNLOADS",
            number: "1,24,599",
        },

        {
            title: "CURERENT INCOME",
            number: "$54,599",
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