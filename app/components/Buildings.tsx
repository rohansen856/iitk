'use client';

import React from "react";

interface BuildingsProps {
}
  


const Buildings: React.FC<BuildingsProps> = () => {
    const [state1, setState1] = React.useState("40%");
    const [state2, setState2] = React.useState("40%");
    const [state3, setState3] = React.useState("40%");
    const [state4, setState4] = React.useState("40%");
    const [state5, setState5] = React.useState("40%");
    
    React.useEffect(() => {
        for (let i = 1; i <= 5; i++) {
            const randomValue = Math.floor(Math.random() * 41) + 50;
            const stateSetter = eval(`setState${i}`);
            stateSetter(`${randomValue}%`);
        }
    }, []);
  return ( 
    <>
    <div className="flex w-screen h-[100svh] absolute z-0 gap-4 items-end">
        <div className="w-2/5 bg-purple-500/40 rounded-lg transition-all duration-500 ease-out " style={{ height: state1 }}></div>
        <div className="w-2/5 bg-purple-500/40 rounded-lg transition-all duration-500 ease-out " style={{ height: state2 }}></div>
        <div className="w-2/5 bg-purple-500/40 rounded-lg transition-all duration-500 ease-out " style={{ height: state3 }}></div>
        <div className="w-2/5 bg-purple-500/40 rounded-lg transition-all duration-500 ease-out " style={{ height: state4 }}></div>
        <div className="w-2/5 bg-purple-500/40 rounded-lg transition-all duration-500 ease-out " style={{ height: state5 }}></div>
    </div>
    </>
   );
}
 
export default Buildings;