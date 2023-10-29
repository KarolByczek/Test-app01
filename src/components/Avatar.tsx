import avatarImage from "../assets/Avatar.jpg";


export const Avatar = () => {
    
    return (
        <div className="avatar">
            <img className="avatar__image" src={avatarImage} alt="Avatar" />
        </div>
    )
};