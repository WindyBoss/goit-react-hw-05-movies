import SectionContainer from "components/SectionContainer";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function NoFoundRoute() {

    const navigate = useNavigate();

    return <SectionContainer>
        <p>Sorry, there is no such way</p>
        <Button sx={btnStyles} variant="outlined" onClick={() => navigate('/goit-react-hw-05-movies/')}>Go to Home</Button>
    </SectionContainer>
};

const btnStyles = {
    color: 'black',
    border: '1px solid black',
}