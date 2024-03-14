import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "D104",
        short_name: "D104",
        description: "Roomies of iiitdmj",
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
