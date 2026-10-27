import { useParams, useSearchParams, Link } from "react-router-dom";

function Blog() {
const { id } = useParams();
const [searchParams] = useSearchParams();

// Get heading and role from the URL
const urlHeading = searchParams.get("heading");
const role = searchParams.get("role");

const blogData = [
{
id: 1,
heading: "Mountain Escape",
description:
"Discover the beauty of majestic mountains and breathtaking landscapes. Enjoy the fresh air, beautiful views, and peaceful atmosphere.",
image:
"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
},
{
id: 2,
heading: "Peaceful Paradise",
description:
"Experience the calm of crystal-clear lakes surrounded by beautiful mountains. It is the perfect place to relax and enjoy nature.",
image:
"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
},
{
id: 3,
heading: "Enchanted Forest",
description:
"Wander through misty woodland trails and discover the peaceful beauty of nature in a beautiful green forest.",
image:
"https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
},
];

const blog = blogData.find((item) => item.id === Number(id));

if (!blog) {
return ( <div className="p-10 text-center"> <h1 className="mb-4 text-3xl font-bold">Blog Not Found!</h1>

    <Link to="/" className="text-blue-600 underline">
      Go Back Home
    </Link>
  </div>
);

}

const heading = urlHeading
? urlHeading.replaceAll("_", " ")
: blog.heading;

return ( <div className="min-h-screen bg-gray-100 px-5 py-10"> <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg"> <img
       src={blog.image}
       alt={heading}
       className="h-80 w-full object-cover"
     />

    <div className="p-6 sm:p-10">
      <p className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold uppercase text-green-700">
        {role || "Nature"}
      </p>

      <h1 className="mb-5 text-3xl font-bold text-black sm:text-4xl">
        {heading}
      </h1>

      <p className="mb-8 text-lg leading-8 text-gray-600">
        {blog.description}
      </p>

      <Link
        to="/"
        className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
      >
        ← Back to Cards
      </Link>
    </div>
  </div>
</div>
);
}

export default Blog;
