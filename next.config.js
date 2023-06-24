/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
    },
    images:{
        // domains:[
        //     "dummyimage.com"
        // ],
        remotePatterns:[
            {
                protocol:"http",
                hostname:"dummyimage.com",
                port:"",
                pathname:"/**/**"
            },
            {
                protocol:"https",
                hostname:"robohash.org",
                port:"",
                pathname:"/**"
            }
        ]
    }
}

module.exports = nextConfig
