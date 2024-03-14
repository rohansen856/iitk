import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Homely",
        short_name: "Homely",
        description: "Find your next home for forever",
        start_url: "/",
        display: "standalone",
        background_color: "#000",
        theme_color: "#000",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    }
}
