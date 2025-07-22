'use client'

import { useState } from "react"

export function Button() {
  const [nome, setNome] = useState("Sujeito Programador")

  function handleChangeName() {
    setNome('Márcio Evandro')
  }

  return (
    <div>
      <button onClick={handleChangeName} className="mb-5 cursor-pointer">
        Alterar nome
      </button>
      <h3>Nome: {nome}</h3>
    </div>
  )
}