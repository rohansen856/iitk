import Image from "next/image"

import { profileColor } from "@/lib/profile-color"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from "@/styles/profile-card.module.css"

interface ProfileCardProps {
    name?: string
    lang?: "c" | "cpp" | "java" | "typescript" | "javascript"
}

export function ProfileCard({ name, lang }: ProfileCardProps) {
    return (
        <div className="h-[400px] w-[250px] min-w-[250px] overflow-hidden border-b border-slate-700 text-black dark:border-white dark:text-white">
            <div className="mt-20 flex h-full w-full flex-col items-center border border-slate-700 bg-slate-600 dark:border-white dark:bg-slate-900">
                <div className="flex h-[120px] w-[120px] translate-y-[-60px] rounded-full bg-slate-900 dark:bg-white">
                    <div className="m-auto h-[115px] w-[115px] overflow-hidden rounded-full bg-slate-900">
                        <Avatar className="h-full w-full">
                            <AvatarImage
                                src="/sandip.jpeg"
                                alt="@shadcn"
                                className="object-contain"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <div className="flex w-full translate-y-[-60px] flex-col items-center px-2">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <span
                        className={`relative w-full ${styles.ring} ${
                            styles[profileColor[lang || "cpp"]]
                        }`}
                    >
                        <p className=" w-full text-center">
                            {lang?.toUpperCase()} Developer
                        </p>
                    </span>
                    <span className="flex h-8 w-full justify-around rounded-3xl p-2">
                        <span
                            className={`${styles.line} ${styles["neon_white"]}`}
                        >
                            <Image
                                src="/c.svg"
                                className="h-6 w-6"
                                width={6}
                                height={6}
                                alt=""
                            />
                        </span>
                        <span
                            className={`${styles.line} ${styles["neon_purple"]}`}
                        >
                            <Image
                                src="/cpp.svg"
                                className="h-6 w-6"
                                width={6}
                                height={6}
                                alt=""
                            />
                        </span>
                        <span
                            className={`${styles.line} ${styles["neon_red"]}`}
                        >
                            <Image
                                src="/java.svg"
                                className="h-6 w-6"
                                width={6}
                                height={6}
                                alt=""
                            />
                        </span>
                        <span
                            className={`${styles.line} ${styles["neon_blue"]}`}
                        >
                            <Image
                                src="/typescript.svg"
                                className="h-6 w-6"
                                width={6}
                                height={6}
                                alt=""
                            />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
