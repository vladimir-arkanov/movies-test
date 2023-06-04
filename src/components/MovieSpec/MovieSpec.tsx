import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Typography, Link, Card,
} from '@mui/material';
import { receiveOneShow } from '../../reducers/GetOneShow';
import { RootState, AppDispatch } from '../../store/store';
import './MovieSpec.scss';

export const MovieSpec: React.FC = () => {
  const { id = '' } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const show = useSelector((state: RootState) => state.show.show);

  const preparedSummary = show?.summary
    ? show.summary.replace(/(<p>|<\/p>|<br>|<\/br>|<i>|<\/i>|<b>|<\/b>)/g, '')
    : '';

  useEffect(() => {
    dispatch(receiveOneShow(id));
  }, [dispatch, id]);

  return (
    <Box p={1}>
      <Typography variant="h4" mb={2}>
        {show?.name}
      </Typography>

      <Box mb={1}>
        {show?.image ? (
          <img
            className="show-spec__image"
            alt="show_poster"
            src={show?.image?.original}
          />
        ) : (
          <img
            className="show-spec__image"
            src="https://www.xtrafondos.com/thumbs/vertical/1_9486.jpg"
            alt="default_poster"
          />
        )}
      </Box>

      <Box mb={1}>
        <Typography variant="body1">{preparedSummary}</Typography>
      </Box>

      <Box mb={1}>
        <Typography variant="h6">Genres:</Typography>
        <Box display="flex" flexWrap="wrap">
          {show?.genres.map((genre) => (
            <Card key={genre} variant="outlined" sx={{ m: 1, p: 1 }}>
              {genre}
            </Card>
          ))}
        </Box>
      </Box>

      <Typography variant="h6" mb={2}>
        Rating:
        <Typography variant="body1" mb={1}>
          {show?.rating.average ? `${show.rating.average} / 10` : 'Under review'}
        </Typography>
      </Typography>

      <Typography variant="h6" mb={2}>
        Status:
        <Typography variant="body1" mb={1}>
          {show?.status}
        </Typography>
      </Typography>

      <Box mb={1}>
        <Typography variant="h6">Schedule:</Typography>
        <Box display="flex" flexWrap="wrap">
          {show?.schedule.days.map((day) => (
            <Card key={day} variant="outlined" sx={{ m: 1, p: 1 }}>
              {`${day} at  ${show.schedule.time ? `${show.schedule.time}` : 'Soon'}`}
            </Card>
          ))}
        </Box>
      </Box>

      <Box mb={2}>
        <Link href={show?.url} variant="body1" mb={2}>
          Watch Show
        </Link>
        <Typography variant="body1">Don&apos;t miss out on this captivating series!</Typography>
      </Box>
    </Box>
  );
};
