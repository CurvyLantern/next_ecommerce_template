import { TbSearch, TbShoppingCartPlus } from 'react-icons/tb';
import Container from '../containers/Container';

const Header = () => {
  return (
    <Container className='bg-white flex items-center py-4 gap-5 text-black font-semibold text-lg'>
      <div className='bg-gray-500 w-40 text-3xl'>placeholder</div>
      <div className='ml-auto'>
        <TbSearch />
      </div>
      <p className=''>Sign in</p>
      <div>
        <TbShoppingCartPlus />
      </div>
    </Container>
  );
};

export default Header;
