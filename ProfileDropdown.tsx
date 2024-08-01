import React, { useState } from 'react';
import'./index.css'

 const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchBy, setSearchBy] = useState<'id' | 'name'>('id');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBy(event.target.value as 'id' | 'name');
  };

  const getProfileImage = () => {
    if (searchBy === 'id') {
      return 'https://via.placeholder.com/40/FFFFFF/FF0000/?text=%23';
    } else {
      return 'https://via.placeholder.com/40/FFFFFF/FF0000/?text=A';
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-full border shadow-sm p-2 bg-white focus:outline-none"
        >
          <img
            src={getProfileImage()}
            alt="Profile"
            className="rounded-full"
          />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-26 rounded-md shadow-lg bg-red-500 ring-1 ring-red-500 ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="px-4 py-2">
              <div className="mt-2 flex flex-col text-white">
                <label className="mb-4">Sort: by</label>
                <div className="bg-white text-black p-4 rounded-xl">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-red-500"
                    name="searchBy"
                    value="id"
                    checked={searchBy === 'id'}
                    onChange={handleSearchByChange}
                  />
                  <span className="ml-2">ID</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="searchBy"
                    value="name"
                    checked={searchBy === 'name'}
                    onChange={handleSearchByChange}
                  />
                  <span className="ml-2">Name</span>
                </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
