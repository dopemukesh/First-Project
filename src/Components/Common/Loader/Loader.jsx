import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-8 h-8 border-[3px] border-teal-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
