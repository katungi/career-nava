import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Footer from '~/components/patterns/footer';
import BlogHeader from './_components/blogHeader';
import BlogShCard from './_components/scholarshipcard';

export const metadata = {
  title: 'Blog',
};

export default async function BlogPage() {
  const _posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  const scholarshipArray = [
    {
      scholarshipName: 'Google Scholarship',
      courseOfStudyInformation:
        "loremsdfdsf Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      country: 'Any',
      openingDates: '12/12/2022',
      deadline: '12/12/2022',
      link: '#',
      headerimage: '/images/google-sc.png',
    },
    {
      scholarshipName: 'MasterCard Foundation Scholarship',
      courseOfStudyInformation:
        "loremsdfdsf Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      country: 'Any',
      openingDates: '12/12/2022',
      deadline: '12/12/2022',
      link: '#',
      headerimage: '/images/mastercard-sc.png',
    },
    {
      scholarshipName: 'Harvard Scholarship',
      courseOfStudyInformation:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      country: 'Any',
      openingDates: '12/12/2022',
      deadline: '12/12/2022',
      link: '#',
      headerimage: '/images/harvard-sc.png',
    },
  ];
  return (
    <main className="flex flex-col">
      <section className="w-full">
        <BlogHeader />
      </section>
      <div className="flex flex-col items-center justify-center p-8">
        <div className="mb-8 text-center">
          <p className="font-bold text-3xl">Our Scholarship Insights</p>
          <p className="text-md">
            With CareerNava’s assessment score there’s nowhere you’ll go wrong
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {scholarshipArray.map((scholarship, index) => (
            <BlogShCard key={index} scholarship={scholarship} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

/****
 * 
 *  {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
      */
