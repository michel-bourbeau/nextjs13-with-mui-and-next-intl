'use client';

import React from 'react';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <Grid
      container
      height="calc(100vh - 38px)"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Typography variant="h4" gutterBottom>
        (NextJS-13 {t('Index.with')} MUI {t('Index.and')} next-intl)
      </Typography>
      <Stack direction="row" columnGap={1}>
        <Button variant="text" href="/fr">
          {t('Index.fr')}
        </Button>
        <Button variant="contained" href="/en">
          {t('Index.en')}
        </Button>
        <Button variant="outlined" href="/es">
          {t('Index.es')}
        </Button>
      </Stack>
      <Stack direction="row" columnGap={5} mt={3}>
        <Button variant="text" href="/robots">
          {t('Robots.button')}
        </Button>
        <Button variant="contained" href="/counter">
          {t('Counter.button')}
        </Button>
      </Stack>
    </Grid>
  );
}
