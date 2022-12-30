import { GetStaticProps, InferGetServerSidePropsType } from "next";
import { getAllPosts } from "../scripts/getAllPosts";
import { Post } from "../types/Post";

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = () => {
  const posts = getAllPosts();

  return { props: { posts } };
};

export default function Home({
  posts,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <div>
        <main>
          {posts.map((post: Post) => {
            const {
              metadata: { slug, title, date, excerpt },
            } = post;

            return (
              <div className="content" key={slug}>
                <header>
                  <h2>{title}</h2>
                  <small>{date}</small>
                </header>
                <p>{excerpt}</p>
              </div>
            );
          })}
        </main>
      </div>
    </>
  );
}
