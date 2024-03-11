/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["unsplash.com"]
    },
    redirects: async () => {
        return [
            {
                source: '/about',
                destination: '/ssg',
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
