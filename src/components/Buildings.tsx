'use client';

import React from "react";

interface BuildingsProps {
}
  


const Buildings: React.FC<BuildingsProps> = () => {
    const [state1, setState1] = React.useState("20%");
    const [state2, setState2] = React.useState("20%");
    const [state3, setState3] = React.useState("20%");
    const [state4, setState4] = React.useState("20%");
    const [state5, setState5] = React.useState("40%");
    const [state6, setState6] = React.useState("40%");
    const [state7, setState7] = React.useState("40%");
    const [state8, setState8] = React.useState("60%");
    
    React.useEffect(() => {
        for (let i = 1; i <= 5; i++) {
            const randomValue = Math.floor(Math.random() * 41) + 50;
            const stateSetter = eval(`setState${i}`);
            stateSetter(`${randomValue}%`);
        }
        setState6("60%")
        setState7("30%")
        setState8("69%")
        // for (let i = 5; i <= 8; i++) {
        //     const randomValue = Math.floor(Math.random() * 41) + 30;
        //     const stateSetter = eval(`setState${i}`);
        //     stateSetter(`${randomValue}%`);
        // }
    }, []);
return ( 
    <>
    <div className="flex w-screen h-[100svh] absolute z-0 gap-4 items-end blur-[2px] opacity-75">
            <div className="w-2/5 bg-purple-600 rounded-lg transition-all duration-500 ease-out " style={{ height: state1 }}></div>
            <div className="w-1/5 bg-purple-600 rounded-lg transition-all duration-500 ease-out " style={{ height: state2 }}></div>
            <div className="w-2/5 bg-purple-600 rounded-lg transition-all duration-500 ease-out " style={{ height: state3 }}></div>
            <div className="w-1/5 bg-purple-600 rounded-lg transition-all duration-500 ease-out " style={{ height: state4 }}></div>
            <div className="w-[25%] bg-purple-600 rounded-lg transition-all duration-500 ease-out " style={{ height: state5 }}></div>
    </div>
    <div className="flex w-screen h-[100svh] absolute z-0 items-end">
            <div className="w-[25%] mr-8 bg-purple-400 rounded-lg transition-all duration-500 ease-out " style={{ height: state6 }}></div>
            <div className="w-[25%] ml-2 mr-12 bg-purple-400 rounded-lg transition-all duration-500 ease-out " style={{ height: state7 }}></div>
            <div className="w-[25%] ml-20 bg-purple-400 rounded-lg transition-all duration-500 ease-out " style={{ height: state8 }}></div>
    </div>
    </>
 );
}
 
export default Buildings;