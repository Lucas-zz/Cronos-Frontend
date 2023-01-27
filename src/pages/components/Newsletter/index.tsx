import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function Newsletter() {
    const [formData, setFormData] = useState({
        email: '',
    });

    function handleInputChange(e: any) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className="flex-col w-full">
            <div className="w-full h-[1px] bg-gray-900 mb-36" />
            <div className="flex-col font-dm sm:pl-16 md:pl-24 pl-6 m-auto -translate-y-10 md:translate-y-0">
                <span className="font-bold text-xl max-[300px]:text-2xl sm:text-4xl md:text-3xl lg:text-4xl tracking-[0.01em]">Receive transmissions</span>
                <div className="md:flex h-8">
                    <div className="flex font-normal text-sm max-[300px]:text-base sm:text-xl md:text-base lg:text-xl tracking-[0.01em]">
                        <span>Unsubscribe at any time.</span>
                        <div className="flex pl-2 cursor-pointer underline">
                            <a href="#">Privacy policy</a>
                            <FiArrowUpRight />
                        </div>
                    </div>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                        className="lg:w-[50%] md:w-[40%] sm:w-[70%] w-[80%] m-auto py-4 translate-y-9 md:-translate-y-9 bg-[#191919] p-4 font-normal text-lg sm:text-xl placeholder-gray-500 mb-20 rounded-lg" />
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-900 mt-36" />
        </div>
    );
}