'use client';

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        setFilteredOptions(options.filter(option => option.label.includes(event.target.value)));
    };

    const handleOptionClick = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="w-2/5 relative flex items-center justify-center">
            <Input
                className="py-6 rounded-full bg-white/80 focus-visible:outline-purple-400 focus-visible:outline-2 text-black"
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={handleInputChange}
            /> 
            <Button variant={"ghost"} className="hover:bg-transparent absolute right-0 rounded-full hover:scale-125 transition-all duration-150" type="submit"><Search color="black" /></Button>
            {searchValue !== "" && (
                <ul className="absolute top-14 rounded-xl flex flex-col py-4 gap-4 w-full">
                    {filteredOptions.map((option) => (
                        <li className='outline outline-purple-400 rounded-full p-3 bg-white/60 text-black' key={option.value} onClick={() => handleOptionClick(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchDropdown;
