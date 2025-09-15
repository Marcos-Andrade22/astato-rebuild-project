import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Input } from './input'
import { Textarea } from './textarea'
import { Button } from './button'
import { Send } from 'lucide-react'

const ContactForm = () => {


    interface Lead {
        name: string;
        email: string;
        phone: string;
        institution?: string;
        serviceType: string;
        equipmentDescription?: string;
        message?: string;
        termsAccepted: boolean;
    }
    //As informações do Lead precisam ser ajustadas. Conferir na documentação quais informações eu posso procurar enviar pelo formulário
    const [lead, setLead] = useState<Lead>({
        name: '',
        email: '',
        phone: '',
        institution: '',
        serviceType: '',
        equipmentDescription: '',
        message: '',
        termsAccepted: false,
    })

    async function HandleSendPost(lead: Lead, token) {
        const url = 'https://api.exactspotter.com/v3/LeadsAdd';

        const body = JSON.stringify({
            duplicityValidation: true,
            lead: lead
        });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token_exact': token
            },
            body: body
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro ao enviar o lead: ", errorData)
            throw new Error('Falha na requisição para Exact Spotter');
        }
        else {
            console.log("Lead enviado com sucesso");
        }
        // console.log(body)
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const target = e.target;
        const name = target.name;

        const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;

        setLead(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); HandleSendPost(lead, "56fa0a72-0384-4efd-a962-746c2d9aec42") }} className="lg:col-span-2">
            <Card className="shadow-medical border-0 bg-background">
                <CardHeader>
                    <CardTitle className="font-heading text-2xl">
                        Entre em contato
                    </CardTitle>
                    <p className="text-muted-foreground">
                        Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                    </p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Nome Completo *</label>
                            <Input required name="name" onChange={handleChange} value={lead.name} placeholder="Seu nome completo" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">E-mail Profissional *</label>
                            <Input required name="email" onChange={handleChange} type="email" value={lead.email} placeholder="seu@email.com" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Telefone *</label>
                            <Input required name="phone" onChange={handleChange} value={lead.phone} placeholder="(00) 00000-0000" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Instituição</label>
                            <Input required name="institution" onChange={handleChange} value={lead.institution} placeholder="Hospital, Clínica, etc." />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Tipo de Serviço *</label>
                        <select name="serviceType" value={lead.serviceType} onChange={handleChange} className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                            <option value="">Selecione o serviço desejado</option>
                            <option value="manutencao-preventiva">Manutenção Preventiva</option>
                            <option value="manutencao-corretiva">Manutenção Corretiva</option>
                            <option value="calibracao-oticas">Calibração de Óticas</option>
                            <option value="consultoria-tecnica">Consultoria Técnica</option>
                            <option value="atendimento-emergencial">Atendimento Emergencial</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Descrição do Equipamento</label>
                        <Textarea
                            name='equipmentDescription'
                            onChange={handleChange}
                            value={lead.equipmentDescription}
                            placeholder="Descreva o equipamento que precisa de manutenção (marca, modelo, problema apresentado, etc.)"
                            rows={4}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Mensagem</label>
                        <Textarea
                            name='message'
                            onChange={handleChange}
                            value={lead.message}
                            placeholder="Conte-nos mais detalhes sobre sua necessidade..."
                            rows={3}
                        />
                    </div>

                    <div className="flex items-start space-x-2">
                        <input required name="termsAccepted" onChange={handleChange} type="checkbox" id="terms" className="mt-1" />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                            Concordo com a <a href="#" className="text-primary hover:underline">Política de Privacidade</a> e
                            autorizo o contato da Astato para fins comerciais.
                        </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full shadow-medical group">
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Solicitação
                        <div className="ml-2 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <span className="text-xs">→</span>
                        </div>
                    </Button>
                </CardContent>
            </Card>
        </form>
    )
}

export default ContactForm