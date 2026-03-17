import CaseStudy from "./CaseStudy";
import CaseStudy1 from "./CaseStudy1";
import CaseStudy2 from "./CaseStudy2/CaseStudy2";
import CaseStudy3 from "./CaseStudy3/CaseStudy3";


const idList = [
    13074,
    13037,
    13121,
    12949
]
export async function generateStaticParams() {

    return idList.map((item) => ({
        slug: item.toString(),
    }));

}
const Page = async ({ params }: { params: { slug: any } }) => {
    const { slug } = await params;
    console.log(slug, "SLUG")

    return (
        <>
            {slug == "case-study-flexus-comfort" ? (
                <CaseStudy slug={slug} />
            ) : slug == "case-study-viage" ? (
                <CaseStudy1 slug={slug} />
            ) : slug == "case-study-arc-lever" ? (
                <CaseStudy2 slug={slug} />
            ) :
                slug == "case-study-treecarearborists" ? (
                    <CaseStudy3 slug={slug} />
                )
                    : null
            }
        </>
    );
};

export default Page;
