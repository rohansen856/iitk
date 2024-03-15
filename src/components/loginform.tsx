import React from "react"

const Loginform = () => {
    return (
        <form className="mx-auto w-full max-w-xs z-50">
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-brand focus:border-brand"
                    required
                />
            </div>
            <div className="mb-6">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-muted-foreground"
                >
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-brand focus:border-brand"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-brand text-secondary py-2 px-4 rounded-md hover:bg-opacity-90 focus:outline-none focus:bg-opacity-90 w-full transition duration-300 ease-in-out transform hover:scale-105 bg-white"
            >
                Login
            </button>
        </form>
    )
}

export { Loginform }
