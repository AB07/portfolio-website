// src/theme/theme.d.ts

// We disable the empty interface rule only for this file because this is
// the standard way to augment MUI's Palette when no custom colors are added yet
/* eslint-disable @typescript-eslint/no-empty-object-type */

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    // You can add custom colors here in the future, example:
    // customBlue: string;
    // successAlt: string;
  }

  interface PaletteOptions {
    // Mirror any custom colors added above
    // customBlue?: string;
    // successAlt?: string;
  }

  // Optional: more precise text color overrides if needed later
  interface TypeText {
    hint?: string;
  }
}