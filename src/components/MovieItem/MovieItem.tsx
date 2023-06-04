/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Typography, IconButton } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { blue } from '@mui/material/colors';
import { Shows } from '../../types/Shows';
import { addToFavorite, deleteFromFavorite } from '../../reducers/addToFavorite';
import { AppDispatch, RootState } from '../../store/store';
import { buttonFavorite, buttonDelete } from '../../reducers/ButtonSelect';
import './MovieItem.scss';

type Props = {
  show: Shows
};

export const MovieItem: React.FC<Props> = ({ show }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isFavorite = useSelector((state: RootState) => state.button[show.show.id]?.isFavorite);

  const handlerAddToFavorite = () => {
    dispatch(buttonFavorite({ id: show.show.id, isFavorite: true }));
    dispatch(addToFavorite(show));
  };

  const hadleDelete = () => {
    dispatch(buttonDelete({ id: show.show.id, isFavorite: false }));
    dispatch(deleteFromFavorite(show));
  };

  return (
    <Card
      className="show-card"
      sx={{
        width: '240px',
        backgroundColor: '#e1e1e1',
        border: '1px solid #ddd',
        padding: '15px 5px',
        transition: '0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        },
      }}
      elevation={0}
    >
      <Link to={`/shows/${show.show.id}`} className="show-card__image-wrapper">
        {show.show.image ? (
          <img
            className="show-card__image"
            src={show.show.image.medium}
            alt="show_poster"
          />
        ) : (
          <img
            className="show-card__image"
            src="https://www.xtrafondos.com/thumbs/vertical/1_9486.jpg"
            alt="default_poster"
          />
        )}
      </Link>
      <div className="show-card__container">
        <div className="show-card__content">
          <Typography variant="h6" className="show-card__title">{show.show.name}</Typography>
        </div>

        <div className="show-card__buttons">
          {isFavorite
            ? (
              <IconButton onClick={hadleDelete}>
                <Favorite sx={{ color: blue[500], fontSize: 25 }} />
              </IconButton>
            )
            : (
              <IconButton onClick={handlerAddToFavorite}>
                <FavoriteBorderIcon sx={{ color: blue[500], fontSize: 25 }} />
              </IconButton>
            )}

          <Typography variant="h6" color="#4e4d4c" className="show-details__rating">{!show.show.rating.average ? ('Under review') : (`${show?.show.rating.average} / 10`)}</Typography>
        </div>
      </div>
    </Card>
  );
};
