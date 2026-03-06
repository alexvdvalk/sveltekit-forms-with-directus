import { createDirectus, staticToken, rest } from '@directus/sdk';

export const directus = createDirectus('http://localhost:8055')
    .with(staticToken('YOUR DIRECTUS STATIC TOKEN'))
    .with(rest());