import { PageProps } from "$fresh/server.ts";
import NavigationBar from "../components/NavigationBar.tsx";

export default function Profile(props: PageProps) {
    return (
        <div>
            <div><NavigationBar /></div>

            <div className="px-20">

                <title>Profile Settings</title>

                <body className="bg-gray-100">
                    <div className="p-6 bg-white rounded-md shadow-md">
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-4">Profile Picture</h2>
                            <img src="fake_user.jpg" alt="Profile Picture" className="rounded-full h-20 w-20" />
                            <button className="bg-[#86efac] px-4 py-2 rounded-md">Change Picture</button>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-4">Username</h2>
                            <label htmlFor="username" className="block text-gray-600">Current Username: <strong>john_doe</strong></label>
                            <input type="text" id="username" placeholder="New Username" className="mt-2 p-2 border border-gray-300 rounded-md w-full" />
                            <button className="bg-[#86efac] px-4 py-2 rounded-md mt-4">Change Username</button>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Password</h2>
                            <label htmlFor="current-password" className="block text-gray-600">Current Password</label>
                            <input type="password" id="current-password" placeholder="Current Password" className="mt-2 p-2 border border-gray-300 rounded-md w-full" />
                            <label htmlFor="new-password" className="block text-gray-600 mt-4">New Password</label>
                            <input type="password" id="new-password" placeholder="New Password" className="mt-2 p-2 border border-gray-300 rounded-md w-full" />
                            <button className="bg-[#86efac] px-4 py-2 rounded-md mt-4">Change Password</button>
                        </div>
                    </div>
                </body>
            </div>
        </div>
    );
}
