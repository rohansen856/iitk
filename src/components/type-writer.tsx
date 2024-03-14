"use client"

import Typewriter from "typewriter-effect"

export function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Rohan",
                    "Sandip",
                    "Sayan",
                    "Ritankar",
                    "Shreyansh",
                    "Vaibhav",
                ],
                autoStart: true,
                loop: true,
            }}
        />
    )
}
