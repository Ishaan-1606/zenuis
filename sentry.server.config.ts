// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://299d9a22d6e520653d2af015d445a0dd@o4509445542445056.ingest.us.sentry.io/4509451543314432",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
