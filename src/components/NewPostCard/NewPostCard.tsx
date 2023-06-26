import { INewPost } from "@/interfaces/newPost";
import Link from "next/link";

export default function NewPostCard({ post }: { post: INewPost }) {
  return (
    <article className="bg-grey p-6 rounded-lg h-full flex flex-col">
      <h3 className="font-bold text-xl md:text-2xl leading-[130%]">{post.title}</h3>
      <p className="mt-4 leading-[150%]">{post.short_description}</p>
      <div className="flex flex-1 items-end">
        <Link href="#" className="text-oceanic-blue block mt-6">
          Read more -&gt;
        </Link>
      </div>
    </article>
  );
}
