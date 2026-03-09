export const dynamic = "force-static";
export default function sitemap(){
    return [
        {
            url: `${process.env.NEXT_PUBLIC_REAL_URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
};