'use client';

import AuthContextProvider, {
  useAuthContext,
} from '@/components/AuthContextProvider';
import { BTN_CLASSES, H1_CLASSES } from '@/constants';

const page = () => {
  return (
    <AuthContextProvider>
      <h1 className={H1_CLASSES}>
        Obtener usuario autenticado en cualquier componente
      </h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </AuthContextProvider>
  );
};

const LoginButton = () => {
  const { login, isUserLoading } = useAuthContext();

  return (
    <button
      onClick={login}
      className={`${BTN_CLASSES} w-[100px]`}
      disabled={isUserLoading}
    >
      {isUserLoading ? (
        <span className='loading loading-spinner loading-xs'></span>
      ) : (
        <span>Login</span>
      )}
    </button>
  );
};

const LogoutButton = () => {
  const { logout, isUserLoading } = useAuthContext();

  return (
    <button
      onClick={logout}
      className={`${BTN_CLASSES} w-[100px]`}
      disabled={isUserLoading}
    >
      {isUserLoading ? (
        <span className='loading loading-spinner loading-xs'></span>
      ) : (
        <span>Logout</span>
      )}
    </button>
  );
};

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <>
      {user !== null && (
        <>
          <img
            src={user.imageUrl}
            alt='User image'
            width={200}
            height={200}
            className='size-[100px] object-cover rounded-lg'
          />
          <span>
            <strong>Nombre</strong>: {user.name}
          </span>
          <span>
            <strong>Email</strong>: {user.email}
          </span>
        </>
      )}
    </>
  );
};

export default page;
