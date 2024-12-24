import PostComposer from '@/components/post-composer';
import PostList from '@/components/post-list';
import { SignedIn } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="container px-4">
      <SignedIn>
        <PostComposer />
      </SignedIn>
      <h1 className="py-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        All Posts
      </h1>
      <PostList />
    </main>
  );
}
