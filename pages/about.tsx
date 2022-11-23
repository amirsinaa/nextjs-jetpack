import useTranslation from 'next-translate/useTranslation'
import { Box } from "@chakra-ui/react";
import { NextPage } from 'next'

const AboutPage: NextPage = () => {
  const { t, lang } = useTranslation('about')
  return (
    <>
      <Box bg="nextjp.100" color="white" p={3} borderTopEndRadius={10}>
        {t('about-app')}
      </Box>
    </>
  );
};

export default AboutPage;
