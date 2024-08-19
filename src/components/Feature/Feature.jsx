import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div className="text-left mb-2 mt-6">
        
            <h3 className="flex gap-2"><span><FaCheckCircle  className="mt-1"/></span>{feature}</h3>
        </div>
    );
};

export default Feature;