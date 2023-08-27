import { Avatar, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ImgModifier from "./ImgModifier";

const ImgProfile = ({userName, imagePath, setImagePath}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [outPut, setOutPut] = useState(userName);

    useEffect(() => {
        setOutPut(userName)
    }, [userName, isEditing])

    return (
        <>
            {
                !isEditing ? 
                (
                    <>
                        <Avatar
                            size="xl"
                            src={imagePath ? (URL.createObjectURL(imagePath)) : ("")}
                            name={imagePath ? ("") : (outPut)}
                            onMouseEnter={
                                ()=>setOutPut("+")
                            }
                            onMouseLeave={
                                (e)=>setOutPut(userName)
                            }
                            onClick={()=>setIsEditing(true)}
                            transition={"all 500ms"}
                            _hover={{bg: "gray"}}
                            >
                        </Avatar>
                    </>
                ) : 
                (<ImgModifier setImagePath={setImagePath} setIsEditing={setIsEditing} />)
            }
        </>
    )
};

export default ImgProfile;