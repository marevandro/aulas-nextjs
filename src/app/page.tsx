import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero.',
  openGraph: {
    title: 'Aprendendo NEXT JS',
    images: ['https://files.tecnoblog.net/wp-content/uploads/2011/02/785px-Eniac.jpg']
  }
}

export default function Home (){
  return (
    <div>
      <h1>Página HOME</h1>
    </div>
  )
}