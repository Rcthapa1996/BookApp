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
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

export default function MyApp() {
    return (<>
        <PrimarySearchAppBar />
        <Container maxWidth="lg">
            <FullWidthGrid />
            <StandardImageList />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <RecipeReviewCard />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <RecipeReviewCard />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <RecipeReviewCard />
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <RecipeReviewCard />
                    </Grid>
                </Grid>
            </Box>

            <Checkboxes />
            <ColorCheckboxes />
            <IconCheckboxes />
            <IndeterminateCheckbox />
            <FloatingActionButtons />
            <ImageAvatars />
            <BasicSpeedDial />

        </Container>
    </>);
}