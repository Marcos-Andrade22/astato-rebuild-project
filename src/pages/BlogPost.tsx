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
        // Busca o post pelo slug na API WordPress
        const response = await fetch(
          `https://www.astato.com.br/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        const data = await response.json();

        if (data.length === 0) {
          // Nenhum post encontrado, pode redirecionar ou mostrar erro
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
    <article className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: post.title }} />
      {post.featuredImage && (
        <img
          src={post.featuredImage}
          alt={post.title.replace(/<[^>]+>/g, "")}
          className="w-full max-h-96 object-cover mb-6"
        />
      )}
      <p className="text-sm text-gray-500 mb-4">
        Por {post.author} em {new Date(post.publishDate).toLocaleDateString("pt-BR")}
      </p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogPost;
