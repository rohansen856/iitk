/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rRBlufM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <section className="flex min-h-screen w-full items-center justify-center py-12">
            <div className="container px-4 md:px-6">
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                    <div className="dark:bg-zinc-850 flex flex-col justify-between rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
                        <div>
                            <h3 className="text-center text-2xl font-bold text-secondary">
                                Basic
                            </h3>
                            <div className="mt-4 text-center text-secondary dark:text-secondary">
                                <span className="text-4xl font-bold">$29</span>/
                                month
                            </div>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-secondary">
                                    <CheckIcon className="mr-2 rounded-full bg-green-500 p-1 text-xs text-secondary" />
                                    Premium property lists
                                </li>
                                <li className="flex items-center text-secondary">
                                    <CheckIcon className="mr-2 rounded-full bg-green-500 p-1 text-xs text-secondary" />
                                    Priority over others
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <Button className="w-full">Get Started</Button>
                        </div>
                    </div>
                    <div className="dark:bg-zinc-850 relative flex flex-col justify-between rounded-lg border border-purple-500 bg-white p-6 shadow-lg">
                        <div className="absolute left-1/2 top-0 inline-block -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 text-sm text-secondary">
                            Popular
                        </div>
                        <div>
                            <h3 className="text-center text-2xl font-bold text-secondary">
                                Pro
                            </h3>
                            <div className="mt-4 text-center text-secondary dark:text-secondary">
                                <span className="text-4xl font-bold">$59</span>/
                                month
                            </div>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-secondary">
                                    <CheckIcon className="mr-2 rounded-full bg-green-500 p-1 text-xs text-secondary" />
                                    Premium property lists
                                </li>
                                <li className="flex items-center text-secondary">
                                    <CheckIcon className="mr-2 rounded-full bg-green-500 p-1 text-xs text-secondary" />
                                    Priority over others
                                </li>
                                <li className="flex items-center text-secondary">
                                    <CheckIcon className="mr-2 rounded-full bg-green-500 p-1 text-xs text-secondary" />
                                    Priority Contact with the seller
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div className="dark:bg-zinc-850 flex flex-col justify-between rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
                        <div>
                            <h3 className="text-center text-2xl font-bold text-secondary">
                                Enterprise
                            </h3>
                            <div className="mt-4 text-center text-secondary dark:text-secondary">
                                <span className="text-4xl font-bold">$99</span>/
                                month
                            </div>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-secondary">
                                    <CheckIcon className="mr-2 rounded-full bg-green-500 p-1 text-xs text-secondary" />
                                    All benifits of basic and popular plan
                                </li>
                                <li className="flex items-center text-secondary">
                                    <CheckIcon className="mr-2 rounded-full bg-green-500 p-1 text-xs text-secondary" />
                                    Exclusive bidding rights
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6">
                            <Button className="w-full">Get Started</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
