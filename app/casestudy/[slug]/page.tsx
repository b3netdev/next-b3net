import CaseStudy from "./CaseStudy";
import CaseStudy1 from "./CaseStudy1";
import CaseStudy2 from "./CaseStudy2/CaseStudy2";
import CaseStudy3 from "./CaseStudy3/CaseStudy3";

const Page = async ({ params }: { params: { slug: any } }) => {
    const { slug } = await params;
    console.log(slug, "SLUG")

    return (
        <>
            {slug == 13074 ? (
                <CaseStudy slug={slug} />
            ) : slug == 13037 ? (
                <CaseStudy1 slug={slug} />
            ) : slug == 13121 ? (
                <CaseStudy2 slug={slug} />
            ) :
                slug == 12949 ? (
                    <CaseStudy3 slug={slug} />
                ) 
                :null
            }
        </>
    );
};

export default Page;
