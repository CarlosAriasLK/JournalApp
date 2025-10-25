import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200} className='fade-in-up'>
      { images.map((image) => (
        <ImageListItem key={image} className='image-item'>
          <img
            srcSet={`${image}?w=400&h=300&fit=crop&auto=format&dpr=2 2x`}
            src={`${image}?w=400&h=300&fit=crop&auto=format`}
            alt='Imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};