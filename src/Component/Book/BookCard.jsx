import { Button, Checkbox, Paper } from '@mui/material';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconCheckboxes from '../Common/IconCheckboxes';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function BookCard({ cardDetails }) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <Paper elevation={6}>
                <Card sx={{ maxWidth: 345 }} onClick={() => console.log("I get clicked from ", cardDetails.bookName)}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: "#564b4b" }} aria-label="recipe" src={`https://picsum.photos/20${cardDetails.id}`} />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={cardDetails.uploadedBy}
                        subheader={cardDetails.uploadedDate}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        // image={`https://pos.booksmandala.com/images/2539${cardDetails.bookName + 1}`}
                        // alt={`https://picsum.photos/20${cardDetails.bookName}`}
                        image={`https://picsum.photos/20${cardDetails.id}`}
                        alt="Image Not found"
                    />
                    <CardContent>
                        {/* <h2>Book Name</h2> */}
                        <Typography variant="subtitle1" color="text.secondary">
                            {cardDetails.bookName}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                            By {cardDetails.authorName}
                        </Typography>
                        {/* <h5>By Author Name</h5> */}
                        <h5>NPR. {cardDetails.price}.00</h5>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        <Checkbox icon={<ShareIcon />} checkedIcon={<ShareIcon />} />
                        <Checkbox icon={<ShoppingCartOutlinedIcon />} checkedIcon={<ShoppingCartOutlinedIcon />} />

                        {/* <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton> */}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>


        </>
    );
}