'use client';

import React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useGetUsersQuery } from '@/redux/services/userApi';
import { decrement, increment, reset } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Home() {
  const t = useTranslations('Index');
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    <Grid
      container
      height="calc(100vh - 38px)"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Typography variant="h4" gutterBottom>
        (NextJS-13 {t('with')} MUI {t('and')} next-intl)
      </Typography>
      <Stack direction="row" columnGap={1}>
        <Button variant="text" href="/fr">
          {t('fr')}
        </Button>
        <Button variant="contained" href="/en">
          {t('en')}
        </Button>
        <Button variant="outlined" href="/es">
          {t('es')}
        </Button>
      </Stack>
      <Stack direction="row" columnGap={5} mt={3}>
        <Button variant="text" href="/robots">
          Robots
        </Button>
        <Button variant="contained" href="/counter">
          Counter Redux
        </Button>
      </Stack>
    </Grid>
  );
}
