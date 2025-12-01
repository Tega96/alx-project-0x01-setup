
import { UserCardProps } from '@/interfaces';

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
        <p className="text-gray-600">@{user.username}</p>
        <p className="text-blue-600 mt-1">
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
      </div>
      
      <div className="mb-4">
        <p className="flex items-center gap-2">
          <span className="font-semibold">Phone:</span>
          <span>{user.phone}</span>
        </p>
        <p className="flex items-center gap-2 mt-1">
          <span className="font-semibold">Website:</span>
          <a 
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
      </div>
      
      <div className="mb-4 p-3 bg-gray-50 rounded">
        <h4 className="font-semibold text-gray-700 mb-2">Address</h4>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
      </div>
      
      <div className="p-3 bg-blue-50 rounded">
        <h4 className="font-semibold text-gray-700 mb-2">{user.company.name}</h4>
        <p className="italic text-gray-600">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;