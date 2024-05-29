import { hasCookie } from 'cookies-next';

const useAuth = () => hasCookie('access_token');

export default useAuth;
