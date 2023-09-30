'use client';

import React from 'react';
import { Grid, Button } from '@mui/material';
import { decrement, increment, reset } from '@/redux/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useTranslations } from 'next-intl';

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  const t = useTranslations();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <Button variant="outlined" href="/" sx={{ margin: '16px 0' }}>
          {t('Index.homepage')}
        </Button>

        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <Button
          variant="contained"
          sx={{ margin: '16px 8px' }}
          onClick={() => dispatch(increment())}
        >
          {t('Counter.increment')}
        </Button>
        <Button
          variant="contained"
          sx={{ margin: '16px 8px' }}
          onClick={() => dispatch(decrement())}
        >
          {t('Counter.decrement')}
        </Button>
        <br />
        <Button
          variant="text"
          sx={{ margin: '16px 8px' }}
          onClick={() => dispatch(reset())}
        >
          {t('Counter.reset')}
        </Button>
      </div>
    </Grid>
  );
}
