import logo from '../assets/logo.png'
const Header = () => {
    // date generator
    const todayDate = new Date();
    const formatteDate = todayDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <div className='container mx-auto py-5 p-2'> 
            <div className='flex flex-col items-center gap-2'>
                <img src={logo} alt="" className='h-[40px]' />
                <h4 className='text-md text-[#706F6F] font-semibold'>Journalism Without Fear or Favour</h4>
                <p className='text-[#3a3a3a]'>{formatteDate}</p>
            </div>
        </div>
    );
};

export default Header;