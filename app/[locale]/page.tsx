"use client";

import { Button, Grid, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <Grid container height="calc(100vh - 38px)" alignItems="center" justifyContent="center" direction="column">
      <Typography variant="h4" gutterBottom>
        (NextJS-13 {t("with")} MUI {t("and")} next-intl)
      </Typography>
      <Stack direction="row" columnGap={1}>
        <Button variant="text" href="/fr">
          {t("fr")}
        </Button>
        <Button variant="contained" href="/en">
          {t("en")}
        </Button>
        <Button variant="outlined" href="/es">
          {t("es")}
        </Button>
      </Stack>
    </Grid>
  );
}
