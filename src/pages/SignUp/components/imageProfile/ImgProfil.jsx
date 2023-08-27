import { Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ImgModifier from "./ImgModifier";

const ImgProfile = ({userName, imagePath, setImagePath}) => {
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {}, [userName])

    return (
        <>
            {
                !isEditing ? 
                (<Avatar
                    size="xl"
                    src={imagePath ? (URL.createObjectURL(imagePath)) : ("")}
                    name={imagePath ? ("") : (userName)}
                    onClick={()=>setIsEditing(true)}
                    >
                </Avatar>) : 
                (<ImgModifier setImagePath={setImagePath} setIsEditing={setIsEditing} />)
            }
        </>
    )
};

export default ImgProfile;