import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MainLayout from '@/layouts/main-layout/main-layout';
import { PageProps, ExtendedAppProps } from '@/types/next';
import appWithI18n from 'next-translate/appWithI18n'
import { RtlProvider } from '@/modules/core/rtl-provider';
import { AnimatePresence } from 'framer-motion';
import { Hydrate } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import i18nConfig from '../i18n.json';
import NProgress from 'nprogress';
import { NextPage } from 'next';
import '../styles/app.scss';


const APP = ({ Component, pageProps }: ExtendedAppProps<PageProps>) => {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      NProgress.start()
    }
    const handleRouteChangeStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeStop)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeStop)
    }
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <MainLayout>
          <RtlProvider>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </RtlProvider>
        </MainLayout>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default appWithI18n(APP as NextPage<ExtendedAppProps>, {
  ...i18nConfig,
  skipInitialProps: true,
});