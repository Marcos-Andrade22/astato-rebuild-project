import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  content: string;
  featuredImage: string;
  author: string;
  publishDate: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(
          `https://www.astato.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        const data = await response.json();

        if (data.length === 0) {
          navigate("/404");
          return;
        }

        const postData = data[0];
        setPost({
          id: postData.id,
          title: postData.title.rendered,
          content: postData.content.rendered,
          featuredImage:
            postData._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
          author: postData._embedded?.author?.[0]?.name || "Autor desconhecido",
          publishDate: postData.date,
        });
      } catch (error) {
        console.error("Erro ao carregar post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug, navigate]);

  if (loading) return <p>Carregando...</p>;
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <article className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-16 pb-24 px-4">
      <div className="w-full max-w-3xl flex flex-col items-center relative">
        <Button
          onClick={() => navigate("/blog")}
          className="absolute left-0 -top-8 flex items-center gap-2 bg-white border shadow hover:bg-gray-100 text-"
          variant="default"
        >
          <ArrowLeft />
          <span className="text-sm">Voltar</span>
        </Button>

        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title.replace(/<[^>]+>/g, "")}
            className="w-full max-w-2xl rounded-xl shadow-lg object-cover mb-10"
            style={{ aspectRatio: "16/9" }}
          />
        )}

        <h1
          className="text-5xl font-extrabold text-center mb-4 text-primary leading-tight"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        <p className="text-md text-gray-500 text-center mb-2">
          Por {post.author} • {new Date(post.publishDate).toLocaleDateString("pt-BR")}
        </p>

        <div
          className="prose prose-lg sm:prose-xl mt-8 w-full max-w-2xl text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
};

export default BlogPost;
