'use client'

import { useEffect, useState } from "react"

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts))
  }, [])

  return (
    <div>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>

      <button onClick={() => alert('TESTES')} className="mb-5 cursor-pointer">
        TESTE
      </button>

      <div className="flex flex-col gap-4 mx-2">
        {posts.map(post => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md">
            <h2 className="font-bold">{post?.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
