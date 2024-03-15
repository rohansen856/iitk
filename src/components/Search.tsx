'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import anime from 'animejs';

interface Option {
    value: string;
    label: string;
}

interface SearchDropdownProps {
    options: Option[];
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
    const inp = useRef(null);
    const drop = useRef(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        setFilteredOptions(options.filter(option => option.label.includes(event.target.value)));
    };

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };


    return (
        <>
            <Input
                ref={inp}
                className="py-6 rounded-full bg-white/80 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-purple-500 focus-visible:outline-2 text-black"
                type="text"
                placeholder="City"
                value={searchValue}
                onChange={handleInputChange}
            /> 
            <Button variant={"ghost"} ref={drop} className="hover:bg-transparent absolute right-0 rounded-full hover:scale-125 transition-all duration-150" type="submit"><Search color="black" /></Button>
            {searchValue !== "" && (
                <ul className="absolute top-14 rounded-xl flex flex-col py-4 gap-4 w-full bg-white/70 transition-all duration-300" ref={drop}>
                    {filteredOptions.map((option) => (
                        <Button className='mx-5 bg-transparent text-left justify-start text-black' key={option.value} onClick={() => handleOptionClick(option)}>
                            {option.label}
                        </Button>
                    ))}
                </ul>
            )}
        </>
        // </div>
    );
};

export default SearchDropdown;
