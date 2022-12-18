import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title={"FAQ"} subtitle="Frequently Asked Questions page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An impotant Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Amet, modi incidunt ipsam praesentium autem debitis assumend.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Second impotant Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Amet, modi incidunt ipsam praesentium autem debitis assumend.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Third impotant Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Amet, modi incidunt ipsam praesentium autem debitis assumend.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Forth impotant Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Amet, modi incidunt ipsam praesentium autem debitis assumend.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Fifth impotant Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Amet, modi incidunt ipsam praesentium autem debitis assumend.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Final impotant Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Amet, modi incidunt ipsam praesentium autem debitis assumend.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;