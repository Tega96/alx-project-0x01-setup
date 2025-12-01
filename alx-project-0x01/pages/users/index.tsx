import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

type Props = {
  posts: UserProps[];
}

const Users: React.FC<Props> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen gap-2">
      <Header />
      <main className="mx-3">
        <div className="flex justify-between p-2 my-1 ">
          <h2 className="font-semibold text-3xl text-gray-800">Users Details</h2>
          <button className="bg-blue-500 hover:bg-blue-400 rounded-full py-2 px-4 items-center text-white">Add User</button>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {posts.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

    </div>
  )
}
export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await response.json()

    return {
      props: { 
        posts
      }
    }
  } catch (error) {
    console.error('Trouble getting file', error)
    return {
      props: {
        posts: []
      }
    }
  }
}
export default Users;