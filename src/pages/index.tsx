import { NextPage } from 'next';
import KodamForm from '../components/Form';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <KodamForm />
    </div>
  );
};

export default Home;