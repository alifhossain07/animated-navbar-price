
const Link = ({route}) => {
    return (
        <>
            <li className="text-xl" key={route.id}>

            <a href={route.path}>{route.name}</a>

            </li>
        </>
    );
};

export default Link;