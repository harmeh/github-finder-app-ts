import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
import Alert from '../components/layout/Alert';

export default function Home(): JSX.Element {
  return (
    <>
      <Alert />
      <UserSearch />
      <UserResults />
    </>
  );
}
