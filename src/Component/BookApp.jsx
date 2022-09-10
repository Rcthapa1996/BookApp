import { Grid, Container, Paper, Stack } from '@mui/material';
import { Box } from '@mui/system';

import SplitButton from './Common/SplitButton';
import Checkboxes from './Common/Checkboxes';
import ColorCheckboxes from './Common/ColorCheckboxes';
import IconCheckboxes from './Common/IconCheckboxes';
import IndeterminateCheckbox from './Common/IndeterminateCheckbox';
import FloatingActionButtons from './Common/FloatingActionButtons';
import ImageAvatars from './Common/ImageAvatars';
import PrimarySearchAppBar from './Common/PrimarySearchAppBar';
import RecipeReviewCard from './Common/RecipeReviewCard';
import SimplePaper from './Common/SimplePaper';
import Elevation from './Common/Elevation';
import FixedBottomNavigation from './Common/FixedBottomNavigation';
import BasicSpeedDial from './Common/BasicSpeedDial';
import StandardImageList from './Common/StandardImageList';
import FullWidthGrid from './Common/FullWidthGrid';
import BookCard from './Book/BookCard';
import { cardDetails } from './Data/cardDetails';

export default function BookApp() {
    // const cardDetails = [{ bookName: "hello" }];
    console.log(cardDetails);
    return (<div style={{ background: "#CCC" }}>
        <Stack>

            <PrimarySearchAppBar />
            <Container maxWidth="lg" height="40px" fixed style={{ background: "#EEE" }}>

                {/* <Paper elevation={6} >
                <h1>Hello</h1>
            </Paper> */}
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={6}>
                        {cardDetails.map((value, index) => (
                            <Grid key={index} item>
                                <BookCard cardDetails={value} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    </div >);
}