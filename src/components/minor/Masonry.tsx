import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Masonry} from '@mui/lab';
import { styled } from '@mui/material/styles';
import { ItemData } from '../../utils/Types';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#584033' : '#34261e',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: '#eeeded',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));


interface ImageMasonryProps {
  data: ItemData; 
}

const ImageMasonry: React.FC<ImageMasonryProps> = ({ data }) => {

  return (
    <Box sx={{ minHeight: 829 }} className='w-11/12' >
      <Masonry columns={3} spacing={2}>
        {data.map((item, index) => (
          <div key={index}>
            <Label className='text-anti-flash_white'>{index + 1}</Label>
            <img
              srcSet={`${item.url}?w=${item.width}&auto=format&dpr=2 2x`}
              src={`${item.url}?w=${item.width}&auto=format`}
              alt={item.id}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

export default ImageMasonry;

//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
//     title: 'Snacks',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
//     title: 'Tower',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
//     title: 'Tree',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
//     title: 'Camping Car',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
//     title: 'Mountain',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];