'use client';

import React from 'react';
import { Grid, Button } from '@mui/material';
import { decrement, increment, reset } from '@/redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      height="calc(100vh - 38px)"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <Button variant="outlined" href="/">
        Homepage
      </Button>
    </Grid>
  );
}
