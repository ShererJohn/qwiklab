import { QwikAuth$ } from "@auth/qwik";

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [],
  }),
);
