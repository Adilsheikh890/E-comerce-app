import React from "react";

const Wrapper = ({ children, className } :any) => {
    return (
        <div
            className={`w-full max-w-[1380px] px-20 md:py-10  mx-auto ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
};

export default Wrapper;