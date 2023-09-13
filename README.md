# Using Material UI with Next.js 13 and next-intl

Next.js 13 has been officially released to the public on October 25th, 2022. Many new features will make writing Next.js applications simpler. One of these is the introduction of the `app` folder and a new way of defining routes. This change will impact the integration of Material UI with Next.js. This article will present one approach for the integration of Material UI with Nest.js 13. I will present the details of each step and also integrate react-intl with MUI and Next.js.

## Prerequisites

To follow along with the code example here, you should have Node.js 14.6.0 or later installed in your system. You should also have some basic working knowledge of React, Next.js, and Material UI. Some basic understanding of react-intl would also be helpful.

```
yarn
```

```
yarn dev
```

With your browser pointing to the above URL (http://localhost:3000/), you should see the app.

## Some Final Thoughts

The new `app` folder introduced in Next.js 13 is still in beta. Even though some features are not finalized yet, many features are already functional. The sample application here focuses on a client-side library (Material UI) and requires the `use client` annotation.
