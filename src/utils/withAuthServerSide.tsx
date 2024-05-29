import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const withAuthServerSide =
  (redirectPath: string) => (getServerSidePropsFunc: GetServerSideProps) => {
    return async (context: GetServerSidePropsContext) => {
      const token = context.req.cookies.access_token;

      if (token) {
        return {
          redirect: {
            destination: redirectPath,
            permanent: false,
          },
        };
      }

      const props = getServerSidePropsFunc
        ? await getServerSidePropsFunc(context)
        : { props: {} };

      return props;
    };
  };

export default withAuthServerSide;
