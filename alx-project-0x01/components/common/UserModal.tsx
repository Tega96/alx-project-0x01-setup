
import { UserData, UserModalProps } from "@/interfaces";
import React, {useState} from 'react'

const UserModal: React.FC<UserModalProps> = ({ onSubmit, onClose }) => {
    const [user, setUser] = useState<UserData>({
        id: 0,
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setUser((prevPost) => ({...prevPost, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add new user</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-4 mb-4">
                        <div className="">
                            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">User Name</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 border rouned-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                id="username"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
                        <textarea
                        id="body"
                        name="body"
                        value={user.email}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter post content"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
                        <textarea
                        id="body"
                        name="body"
                        value={user.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter post content"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
                        <textarea
                        id="body"
                        name="body"
                        value={user.address.street}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter post content"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
                        <textarea
                        id="body"
                        name="body"
                        value={user.address.suite}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter post content"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
                        <textarea
                        id="body"
                        name="body"
                        value={user.address.city}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter post content"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default UserModal;