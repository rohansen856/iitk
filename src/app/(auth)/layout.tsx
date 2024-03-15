interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen relative">
            <div className="absolute w-screen h-screen">
                <div className="relative h-full w-full bg-slate-950">
                    {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px]"></div>
                </div>
            </div>
            {children}
        </div>
    )
}
