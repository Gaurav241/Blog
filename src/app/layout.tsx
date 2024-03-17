import { Analytics } from "@vercel/analytics/react";
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';

import Header from '@/components/header/header';
import Provider from '@/components/provider';
import ScrollUpButton from '@/components/scroll-up-button';
import Footer from '@/components/footer';
import '@/styles/globals.css';
import '@/styles/paginate.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-primary bg-primary relative mx-auto mb-20 flex w-full max-w-screen-xl flex-col px-[10vw] md:px-[5vw]">
        <Provider>
          <Header />
          <main>{children}</main>
          <div className="fixed bottom-12 right-10">
            <ScrollUpButton />
          </div>
          <div className='mt-[4rem] md:mt[6rem]'>
            <Footer />
          </div>
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
