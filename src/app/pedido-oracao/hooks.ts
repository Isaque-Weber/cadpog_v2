'use client'
import { useState } from "react"

export type PedidoOracaoForm = {
    nome: string
    email: string
    telefone: string
    pedido: string
    tipo: string
}

export function usePedidoOracaoForm() {
    const [formData, setFormData] = useState<PedidoOracaoForm>({
        nome: "",
        email: "",
        telefone: "",
        pedido: "",
        tipo: "pessoal",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        const res = await fetch("/api/pedido-oracao", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        if (res.ok) {
            setIsSubmitting(false)
            setIsSubmitted(true)
        } else {
            setIsSubmitting(false)
            alert("Erro ao enviar pedido de oração.")
        }
    }

    const resetForm = () => {
        setFormData({
            nome: "",
            email: "",
            telefone: "",
            pedido: "",
            tipo: "pessoal",
        })
        setIsSubmitted(false)
    }

    return {
        formData,
        isSubmitting,
        isSubmitted,
        handleChange,
        handleSubmit,
        resetForm,
    }
}
