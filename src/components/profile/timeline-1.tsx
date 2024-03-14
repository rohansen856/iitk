interface QualificationProps {
    serial: number
    name: string
    place: string
    date: string
}

const qualification: QualificationProps[] = [
    {
        serial: 1,
        name: "Born",
        place: "India",
        date: "10-2-2022",
    },
    {
        serial: 2,
        name: "School",
        place: "Kolkata",
        date: "10-2-2022",
    },
    {
        serial: 3,
        name: "Middle School",
        place: "Barasat",
        date: "10-2-2022",
    },
    {
        serial: 4,
        name: "High School",
        place: "Barasat",
        date: "10-2-2022",
    },
    {
        serial: 5,
        name: "College",
        place: "Madhyapradesh",
        date: "10-2-2022",
    },
    {
        serial: 6,
        name: "Started Coding",
        place: "IIITDMJ",
        date: "10-2-2022",
    },
]

export function Timeline() {
    return (
        <section
            className="mb-16 mt-6 flex w-full flex-col items-center"
            about="qualifications"
            id="qualifications"
        >
            <h3 className="mb-12 w-full py-3 text-center text-3xl font-bold lg:text-4xl">
                Qualifications
            </h3>
            {qualification.length > 0 ? (
                <div className="flex w-full grow justify-center">
                    <div className="w-[49%] max-w-[300px]">
                        {qualification.map((i) =>
                            i.serial % 2 !== 0 ? (
                                <div className="h-[95px] w-full pr-8 text-right">
                                    <h4 className="text-xl">{i.name}</h4>
                                    <p className="text-lg opacity-60">
                                        {i.place}
                                    </p>
                                    <p className="text-lg text-muted">
                                        {i.date}
                                    </p>
                                </div>
                            ) : (
                                <div className="h-[95px] w-full"></div>
                            )
                        )}
                    </div>

                    <div className="relative z-20 mt-[25px] flex w-[2px] max-w-[20px] flex-col items-center bg-blue-700">
                        {qualification.map((i) => (
                            <span className="mb-[calc(95px-24px)] h-6 w-6 rounded-full bg-blue-700"></span>
                        ))}
                    </div>

                    <div className="w-[49%] max-w-[300px]">
                        {qualification.map((i) =>
                            i.serial % 2 === 0 ? (
                                <div className="h-[95px] w-full pl-8">
                                    <h4 className="text-xl">{i.name}</h4>
                                    <p className="text-lg opacity-60">
                                        {i.place}
                                    </p>
                                    <p className="text-lg text-muted">
                                        {i.date}
                                    </p>
                                </div>
                            ) : (
                                <div className="h-[95px] w-full"></div>
                            )
                        )}
                    </div>
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
