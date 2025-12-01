// 


// pages/users/index.tsx
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { UserPageProps } from '@/interfaces';

const UsersPage: React.FC<UserPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">User Details</h2>
          <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full py-2 px-6 text-lg transition-colors duration-200">
            Add User
          </button>
        </div>
        
        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard 
              key={user.id} 
              user={user} 
              className="hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    
    return {
      props: { users },
      revalidate: 60, // Optional: ISR - revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: { users: [] },
    };
  }
}

export default UsersPage;