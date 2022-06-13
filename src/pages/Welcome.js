import { Link, Outlet } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Link to="user">hello user</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
