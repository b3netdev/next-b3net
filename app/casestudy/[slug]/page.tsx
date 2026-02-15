import CaseStudy from './CaseStudy'

const page = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    console.log(slug, "SLUG in Page casestudy")
    return (
        <div>
            <CaseStudy slug={slug} />
        </div>
    )
}

export default page