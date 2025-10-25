import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch( setActiveNote({ title, body, id, date, imageUrls }) );
    };

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring(0,16) + '...'
            : title;
    }, [ title ] );

    const bodyPreview = useMemo( () => {
        return body.length > 17
            ? body.substring(0,20) + '...'
            : body;
    }, [ body ] );

    return (
        <ListItem disablePadding >
            <ListItemButton onClick={ onClickNote } >
                <ListItemIcon>
                    <LabelImportantRoundedIcon sx={{ color: 'primary.main' }} />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } primaryTypographyProps={{ title }} />
                    <ListItemText secondary={ bodyPreview } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
};
