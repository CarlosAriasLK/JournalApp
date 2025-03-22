import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { savingNewNote, startNewNote } from '../../store/journal';

export const JournalPage = () => {

  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal );

  console.log(active)

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }



  return (
    <JournalLayout>

        {/* <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nostrum molestiae, illo assumenda ipsam consectetur rem! Aliquam culpa nihil illo harum voluptates laudantium veniam quia, totam doloremque ratione unde. Iste.</Typography> */}

        { 
          active !== null 
            ? <NoteView />
            : <NothingSelectedView />
        }

        <IconButton 
          disabled={ isSaving }
          onClick={ onClickNewNote }
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
    </JournalLayout>
  )
}
