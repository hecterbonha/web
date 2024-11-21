// export const dynamic = 'force-static'

export async function GET() {
    const response = await fetch('https://api.github.com/')
    const data = await response.json()
    return Response.json({data})
}