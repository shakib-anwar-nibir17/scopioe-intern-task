import { useState } from 'react';

export const SimplePagination = ({ location }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const page = 3; // Number of pages

  return (
    <div className="absolute bottom-7 flex select-none items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-2">
        {[...Array(page).keys()].map((item) => (
          <button
            className={`rounded-full h-3 w-3 ${
              location === '/auth/signin' && item === 0
                ? 'bg-primary text-white'
                : location === '/auth/login' && item === 1
                  ? 'bg-primary text-white'
                  : 'bg-white'
            }`}
            key={item}
          ></button>
        ))}
      </div>
    </div>
  );
};
