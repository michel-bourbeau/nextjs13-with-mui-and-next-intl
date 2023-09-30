'use client';

import React from 'react';
import { Grid, Button } from '@mui/material';
import { useGetUsersQuery } from '@/redux/api/userApi';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);
  const t = useTranslations();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Button variant="outlined" href="/" sx={{ margin: '16px 0' }}>
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
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                width={180}
                height={180}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </Grid>
  );
}
