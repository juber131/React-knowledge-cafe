
import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className="text-3xl font-bold text-green-500 ">
                Knowledge cafe
            </h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;