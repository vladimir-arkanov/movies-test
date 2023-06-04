/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MovieItem } from '../MovieItem/MovieItem';
import './FavoriteMovies.scss';

export const FavoriteMovies: React.FC = () => {
  const favoriteShows = useSelector((state: RootState) => state.favorite.favoriteShow);

  return (
    <div className="favorite-list">
      {favoriteShows.map(show => (
        <div key={show.show.id} className="favorite-list__shows">
          <MovieItem show={show} />
        </div>

      ))}
    </div>
  );
};
