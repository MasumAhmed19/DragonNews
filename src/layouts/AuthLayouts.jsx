import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const AuthLayouts = () => {
    return (
        <div className='font-poppins bg-[#f3f3f3]'>
            <div className='container mx-auto'>
                <NavBar />
                {/* Dynamic part */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayouts;