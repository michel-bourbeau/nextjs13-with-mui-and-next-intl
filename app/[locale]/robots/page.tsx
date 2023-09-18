'use client';

import React from 'react';
import { Grid, Button } from '@mui/material';
import { useGetUsersQuery } from '@/redux/services/userApi';
import { useTranslations } from 'next-intl';

export default function Home() {
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  const t = useTranslations();

  return (
    <Grid
      container
      height="calc(100vh - 38px)"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Button variant="outlined" href="/">
        {t('Index.homepage')}
      </Button>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 20,
          }}
        >
          {data.map((user) => (
            <div
              key={user.id}
              style={{ border: '1px solid #ccc', textAlign: 'center' }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </Grid>
  );
}
