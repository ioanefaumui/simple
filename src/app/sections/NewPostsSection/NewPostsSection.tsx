import Container from "@/components/Container/Container";
import newPosts from "./newPosts.json";
import NewPostCard from "@/components/NewPostCard/NewPostCard";

export default function NewPostsSection() {
  return (
    <section className="mt-14">
      <Container>
        <h2 className="opacity-60">New posts</h2>
        <ul className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 mt-4">
          {newPosts.map((post) => (
            <li key={post._id}>
              <NewPostCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
