import Link from "next/link";
import { Button } from "../components/button";

export interface PostProps {
  id: number;
  title: string;
  body: string;
}

interface ResponseProps {
  posts: PostProps[]
}

export default async function PostsPage() {
  
  const response = await fetch('https://dummyjson.com/posts', {
    cache: 'force-cache',
    next: {
      revalidate: 60
    }
  });

  const data: ResponseProps = await response.json();

  async function handleFetchPost() {
    'use server'
    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();

  }

  async function handleSearchUsers(formData: FormData) {
    'use server'
    const userId = formData.get('userId');

    const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
    const data: ResponseProps = await response.json();

  }

  return (
    <div className="p-2">
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts</h1>

      {/* <Button /> */}

      <button className="mb-5 cursor-pointer" onClick={handleFetchPost}>Buscar posts</button>

      <form
        className="flex gap-2 my-4"
        action={handleSearchUsers}
      >
        <input type="text"
          placeholder="ID do usuário"
          className="border border-gray-200 p-2"
          name="userId" />

        <button className="bg-blue-500 text-white p-2" type="submit">
          Buscar usuário
        </button>
      </form>

      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map(post => (
          <div key={post.id} className="bg-gray-200 p-4 rounded-md">
            <h2 className="font-bold">{post?.title}</h2>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-500 mt-2">
              Acessar detalhes do post
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


//SERVE COMPONENTE = CLIENT COMPONENTE

//Dentro de um component server, não posso utilizar reatividade como uma função simples,
//pra isso preciso usar a diretiva "use server" na primeira linha dentro da função


//outra coisa é sobre a questão da declaração de uma função no lado 'server', deve ser assincrona
//ou seja, declarada com 'async'