import '@/app/ui/global.css';
import React, { PropsWithChildren } from 'react';
import { inter } from '@/app/ui/font';

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="fr">
    <body className={`${inter.className} antialiased`}>{children}</body>
  </html>
);

export default RootLayout;
