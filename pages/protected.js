import withAuth from '../withAuth';

const ProtectedPage = () => {
  return <div>Protected Content</div>;
};

export default withAuth(ProtectedPage);