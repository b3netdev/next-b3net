import CategoryClient from "./CategoryClient";

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  return (
    <div>
      <CategoryClient slug={slug} />
     
      
    </div>
  )
}

export default CategoryPage
