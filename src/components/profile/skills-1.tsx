import Image from "next/image"

interface SkillsProps {
    skills: string[]
}

export function Skills(props: SkillsProps) {
    return (
        <section
            className="mb-16 mt-6 flex w-full flex-col items-center"
            about="skills"
            id="skills"
        >
            <h3 className="mb-12 w-full py-3 text-center text-3xl font-bold lg:text-4xl">
                Skills
            </h3>
            {props.skills.length > 0 ? (
                <div className="grid w-full max-w-[500px] grid-cols-3 place-items-center">
                    {props.skills.map((i) => (
                        <div className="m-6 h-20 w-20">
                            <Image
                                src={`/${i}.svg`}
                                alt=""
                                width={16}
                                height={16}
                                className="h-full w-full"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex w-full text-xl lg:text-2xl">
                    <p className="m-auto rounded-md bg-muted px-12 py-5">
                        Nothing Yet
                    </p>
                </div>
            )}
        </section>
    )
}
