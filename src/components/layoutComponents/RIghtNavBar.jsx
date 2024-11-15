import FindUs from "../FindUs";
import Social from "../Social";

const RIghtNavBar = () => {
    return (
        <div>
            <h4 className="text-base font-semibold">Login with</h4>
            <Social />
            <h4 className="text-base font-semibold mt-8">Find Us on</h4>
            <FindUs />
        </div>
    );
};

export default RIghtNavBar;