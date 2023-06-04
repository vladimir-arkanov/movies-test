/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  TextField, IconButton, InputAdornment, Typography, CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { receiveShowList } from '../../reducers/ShowList';
import { MovieItem } from '../MovieItem/MovieItem';
import './MovieList.scss';

export const MovieList: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const { shows, showsError, showsLoading } = useSelector((state: RootState) => state.shows);

  console.log(shows);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(receiveShowList(value));
  };

  return (
    <main className="shows-list">
      <form action="/" onSubmit={handleSubmit} className="shows-list__search">
        <TextField
          type="text"
          sx={{ width: '100%' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Type the show's name"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  disabled={value.length < 2}
                  onClick={handleSubmit}
                  color="primary"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>

      {showsLoading ? (
        <div className="loader">
          <CircularProgress color="primary" size={30} />
        </div>
      ) : (
        !shows ? (
          <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            style={{
              fontWeight: 'bold',
              fontSize: '1.5rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: '20px 0',
              color: '',
            }}
          >
            Find your show
          </Typography>
        ) : shows.length === 0 ? (
          <Typography variant="subtitle1" color="error" gutterBottom>
            <ErrorIcon fontSize="small" />
            Sorry, nothing found with this search
          </Typography>
        ) : (
          <div className="shows-list__shows">
            {shows.map((show) => (
              <div key={show.show.id} className="shows-list__item">
                <MovieItem show={show} />
              </div>
            ))}
          </div>
        )
      )}
    </main>
  );
};
