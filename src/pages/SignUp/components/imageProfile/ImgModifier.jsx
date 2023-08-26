import { Button, Input, Stack } from "@chakra-ui/react";

const ImgModifier = ({setImagePath, setIsEditing}) => {
    const handlerFileChange = (e) => {
        setImagePath(e.target.files[0]);
    };

    return (
    <Stack
        flexDir={"row"}
        alignItems={"center"}>
        <Input type="file" accept="image/*" minH={"15vh"} onChange={handlerFileChange}></Input>
        <Button onClick={()=>setIsEditing(false)}>Save</Button>
    </Stack>
    )
};

export default ImgModifier;