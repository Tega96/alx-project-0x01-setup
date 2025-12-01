import React from 'react';
import type { FC } from 'react';
import { UserCardProps } from '@/interfaces';

const UserCard: FC<UserCardProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  const street = address?.street ?? '';
  const suite = address?.suite ?? '';
  const city = address?.city ?? '';
  const zipcode = address?.zipcode ?? '';
  const lat = address?.geo?.lat ?? '';
  const lng = address?.geo?.lng ?? '';
  const companyName = company?.name ?? '';
  const catchPhrase = company?.catchPhrase ?? '';
  const bs = company?.bs ?? '';
  const websiteUrl = website ? (website.startsWith('http') ? website : `https://${website}`) : '';
  return (
    <div className={`bg-white rounded-lg shadow-md p-6`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600">@{username}</p>
        <p className="text-blue-600 mt-1">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
      
      <div className="mb-4">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Phone:</span>
          <span>{phone}</span>
        </p>
        <p className="flex items-center gap-2 mt-1">
          <span className="font-semibold">Website:</span>
          <a 
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </p>
      </div>
      
      <div className="mb-4 p-3 bg-gray-50 rounded">
        <h4 className="font-semibold text-gray-700 mb-2">Address</h4>
        <p>{street}, {suite}</p>
        <p>{city}, {zipcode}</p>
        <p>{lat}, {lng}</p>
      </div>
      
      <div className="p-3 bg-blue-50 rounded">
        <h4 className="font-semibold text-gray-700 mb-2">{companyName}</h4>
        <p className="italic text-gray-600">"{catchPhrase}"</p>
        <p className="text-sm">{bs}</p>
      </div>
    </div>
  );
};

export default UserCard;