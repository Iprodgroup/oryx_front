const passToken = (context: any) => ({
  headers: {
    Authorization: `Bearer ${context.req.cookies.access_token}`,
  },
});

export default passToken;
