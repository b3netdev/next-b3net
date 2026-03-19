import CaseStudy from "./CaseStudy";
import CaseStudy1 from "./CaseStudy1";
import CaseStudy2 from "./CaseStudy2/CaseStudy2";
import CaseStudy3 from "./CaseStudy3/CaseStudy3";


const sluglist = [
    "case-study-flexus-comfort",
    "case-study-viage",
    "case-study-arc-lever",
    "case-study-treecarearborists"
]

export const revalidate = 21600;
export const dynamicParams = true;

export async function generateStaticParams() {

    return sluglist.map((item) => ({
        slug: item.toString(),
    }));

}
const Page = async ({ params }: { params: { slug: any } }) => {
    const { slug } = await params;

    return (
        <>
            {slug == "case-study-flexus-comfort" ? (
                <CaseStudy slug={13074} />
            ) : slug == "case-study-viage" ? (
                <CaseStudy1 slug={13037} />
            ) : slug == "case-study-arc-lever" ? (
                <CaseStudy2 slug={13121} />
            ) :
                slug == "case-study-treecarearborists" ? (
                    <CaseStudy3 slug={12949} />
                )
                    : null
            }
        </>
    );
};

export default Page;