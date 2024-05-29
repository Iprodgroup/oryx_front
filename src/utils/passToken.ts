import { GetServerSidePropsContext } from 'next';

const passToken = (context: GetServerSidePropsContext) => ({
  headers: {
    Authorization: `Bearer ${context.req.cookies.access_token}`,
  },
});

export default passToken;
