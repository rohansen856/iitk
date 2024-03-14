'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
// import { differenceInDays } from 'date-fns';

import useSearchModal from '@/app/hooks/useSearchModal';
import useCountries from '@/app/hooks/useCountries';

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const  locationValue = params?.get('locationValue'); 
  // const  startDate = params?.get('startDate');
  // const  endDate = params?.get('endDate');
  // const  guestCount = params?.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return 'Anywhere';
  }, [locationValue, getByValue]);

  // const durationLabel = useMemo(() => {
  //   if (startDate && endDate) {
  //     const start = new Date(startDate as string);
  //     const end = new Date(endDate as string);
  //     let diff = differenceInDays(end, start);

  //     if (diff === 0) {
  //       diff = 1;
  //     }

  //     return `${diff} Days`;
  //   }

  //   return 'Any Week'
  // }, [startDate, endDate]);

  // const guestLabel = useMemo(() => {
  //   if (guestCount) {
  //     return `${guestCount} Guests`;
  //   }

  //   return 'Add Guests';
  // }, [guestCount]);

  return ( 
    <div
      onClick={searchModal.onOpen}
      className="
        absolute
        w-screen
        top-[40svh]
        max-sm:top-[15svh]
        flex
        justify-center
        items-center
        left-0
      "
    >
      <div 
        className="
          border-[1px] 
          py-2 
          rounded-full 
          shadow-sm 
          hover:shadow-md 
          transition 
          cursor-pointer
          w-1/2
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div 
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block">{locationLabel}</div>

        </div>
        <div 
            className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
              mr-3
            "
          >
            <BiSearch size={18} />
          </div>
      </div>
    </div>
  );
}
 
export default Search;