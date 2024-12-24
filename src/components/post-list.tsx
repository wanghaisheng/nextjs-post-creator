import { prisma } from '@/lib/prisma';
import moment from 'moment';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default async function PostList() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      author: true
    }
  });

  const postList = posts ? posts.map((post) => {
    const timeFromNow = moment(post.createdAt).fromNow();

    return (
      <Card key={post.id}>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>
            {post.author ? post.author.name : 'Unknown author'} &bull;{' '}
            {timeFromNow}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{post.content}</p>
        </CardContent>
      </Card>
    );
  }) : 'No posts found';

  return <div className="flex flex-wrap gap-4">{postList}</div>;
}
