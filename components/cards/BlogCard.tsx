//hooks
import Image, { StaticImageData } from "next/image";

//components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

//icons
import { MapPin } from "lucide-react";
import Link from "next/link";

interface BlogPostProps {
  id: number;
  date: string;
  image: StaticImageData;
  title: string;
  location: string;
  text: string;
  content?: React.ReactNode;
}

export function BlogCard({ post }: { post: BlogPostProps }) {
  return (
    <Link href={`/blog/${post.id}`} passHref>
      <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative w-full pb-[65%]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader className="p-4 flex-grow">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            {post.location}
          </div>
          <CardTitle className="text-xl mb-2 line-clamp-2">
            {post.title}
          </CardTitle>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {post.text}
          </p>
        </CardHeader>
        <CardContent className="p-4 pt-0 mt-auto">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{post.date}</span>
            <Button variant="outline" size="sm">
              Read More
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
