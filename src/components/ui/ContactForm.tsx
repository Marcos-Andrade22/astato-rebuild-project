'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Input } from './input'
import { Textarea } from './textarea'
import { Button } from './button'
import Snackbar from './Snackbar'


const ContactForm = () => {

    const [snackbar, setSnackbar] = useState<{ message: string; type?: string } | null>(null);
    const [EXACT_TOKEN, setEXACT_TOKEN] = useState('');


    interface Lead {
        socialReason: string;         // Razão Social
        phone: string;        // Telefone
        cpfcnpj: string;      // CNPJ
        contactName: string;  // Nome do contato (custom field)
        sectorOfActivity: string;  // Setor de atuação (custom field)
        termsAccepted: boolean;
        serviceType: string;
    }

    const [lead, setLead] = useState<Lead>({
        socialReason: '',           // Razão Social
        phone: '',
        cpfcnpj: '',
        contactName: '',
        sectorOfActivity: '',
        termsAccepted: false,
        serviceType: ""
    });


    async function HandleSendPost(lead, token) {

        if (!token) {
            setSnackbar({ message: '❌ Token não carregado. Recarregue.', type: 'error' });
        }
        const url = 'https://api.exactspotter.com/v3/LeadsAdd';
        const body = JSON.stringify({
            duplicityValidation: true,
            lead: {
                name: lead.socialReason,      // Razão Social
                cpfcnpj: lead.cpfcnpj,
                phone: lead.phone,
                customFields: [
                    { id: '_nomedocontato', value: lead.contactName },
                    { id: '_setordeatuacao', value: lead.sectorOfActivity },
                    { id: '_tipodeservico', value: lead.serviceType }
                ]
            }
        });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token_exact': token
            },
            body
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Erro ao enviar o lead: ", errorData);
            if (errorData.error.message.includes("Lead already exists")) {
                setSnackbar({ message: "Erro: o usuário já foi cadastrado anteriormente", type: "error" });
            }
            else {
                setSnackbar({ message: "Erro ao enviar. Tente novamente.", type: "error" });
            }
        }
        else {
            console.log("Lead enviado com sucesso");
            setSnackbar({ message: "Lead enviado com sucesso!", type: "success" });
        }
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

    function handleServiceTypeChange(event) {
        setLead({
            ...lead,
            serviceType: event.target.value
        });
    };

    React.useEffect(() => {
        const token = import.meta.env.VITE_EXACT_TOKEN || '';
        setEXACT_TOKEN(token);
    }, []);

    return (<>
        {snackbar && (
            <Snackbar
                message={snackbar.message}
                type={snackbar.type as "success" | "error" | "info"}
                onClose={() => setSnackbar(null)}
            />
        )}
        <form
            onSubmit={(e) => { e.preventDefault(); HandleSendPost(lead, EXACT_TOKEN) }}
            className="lg:col-span-2"
            aria-label="Formulário de contato"
        >
            <Card className="shadow-medical border-0 bg-background">
                <CardHeader>
                    <CardTitle className="font-heading text-xl sm:text-2xl">
                        Entre em contato
                    </CardTitle>
                    <p className="text-muted-foreground text-base">
                        Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                    </p>
                </CardHeader>
                <CardContent className="space-y-5 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="socialReason" className="text-sm font-medium text-foreground">
                                Razão Social <span aria-hidden="true">*</span>
                                <span className="sr-only">(obrigatório)</span>
                            </label>
                            <Input
                                id="socialReason"
                                required
                                name="socialReason"
                                onChange={handleChange}
                                value={lead.socialReason}
                                placeholder="Razão Social"
                                className="min-h-[48px]"
                                aria-required="true"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="cpfcnpj" className="text-sm font-medium text-foreground">
                                CPF/CNPJ <span aria-hidden="true">*</span>
                                <span className="sr-only">(obrigatório)</span>
                            </label>
                            <Input
                                id="cpfcnpj"
                                required
                                name="cpfcnpj"
                                onChange={handleChange}
                                value={lead.cpfcnpj}
                                maxLength={14}
                                placeholder="CPF/CNPJ"
                                className="min-h-[48px]"
                                aria-required="true"
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                Telefone <span aria-hidden="true">*</span>
                                <span className="sr-only">(obrigatório)</span>
                            </label>
                            <Input
                                id="phone"
                                required
                                name="phone"
                                onChange={handleChange}
                                maxLength={15}
                                value={lead.phone}
                                placeholder="Telefone"
                                type="tel"
                                className="min-h-[48px]"
                                aria-required="true"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="contactName" className="text-sm font-medium text-foreground">
                                Nome Completo <span aria-hidden="true">*</span>
                                <span className="sr-only">(obrigatório)</span>
                            </label>
                            <Input
                                id="contactName"
                                required
                                name="contactName"
                                onChange={handleChange}
                                value={lead.contactName}
                                placeholder="Nome completo"
                                className="min-h-[48px]"
                                aria-required="true"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="sectorOfActivity" className="text-sm font-medium text-foreground">
                            Setor de atuação <span aria-hidden="true">*</span>
                            <span className="sr-only">(obrigatório)</span>
                        </label>
                        <select
                            id="sectorOfActivity"
                            name="sectorOfActivity"
                            value={lead.sectorOfActivity}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 min-h-[48px] border border-input bg-background rounded-md text-base focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            aria-required="true"
                        >
                            <option disabled value="">Selecione o setor de atuação</option>
                            <option value="Engenharia Clínica">Engenharia Clínica</option>
                            <option value="Engenharia Clínica adm">Engenharia Clínica adm</option>
                            <option value="Engenharia Clínica coord">Engenharia Clínica coord</option>
                            <option value="Enf. CME">Enf. CME</option>
                            <option value="Enf. CME adm">Enf. CME adm</option>
                            <option value="Enf. CME coord">Enf. CME coord</option>
                            <option value="Enf. CC">Enf. CC</option>
                            <option value="Enf. CC adm">Enf. CC adm</option>
                            <option value="Enf. CC coord">Enf. CC coord</option>
                            <option value="Comprador">Comprador</option>
                            <option value="Financeiro">Financeiro</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    <fieldset className="space-y-3">
                        <legend className="text-sm font-medium text-foreground mb-2">
                            Tipo de serviço
                        </legend>
                        <div className="grid sm:grid-cols-2 gap-3">
                            <label className="flex items-center space-x-3 p-3 rounded-lg border border-input hover:bg-muted/50 cursor-pointer min-h-[48px] transition-colors">
                                <input
                                    type="radio"
                                    name="serviceType"
                                    value="manutencao"
                                    checked={lead.serviceType === "manutencao"}
                                    onChange={handleServiceTypeChange}
                                    className="w-5 h-5 text-primary focus:ring-primary"
                                />
                                <span className="text-sm">Manutenção de Equipamentos Médicos</span>
                            </label>
                            <label className="flex items-center space-x-3 p-3 rounded-lg border border-input hover:bg-muted/50 cursor-pointer min-h-[48px] transition-colors">
                                <input
                                    type="radio"
                                    name="serviceType"
                                    value="aquisicao"
                                    checked={lead.serviceType === "aquisicao"}
                                    onChange={handleServiceTypeChange}
                                    className="w-5 h-5 text-primary focus:ring-primary"
                                />
                                <span className="text-sm">Aquisição de Equipamentos Médicos</span>
                            </label>
                        </div>
                    </fieldset>

                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                        <input
                            required
                            name="termsAccepted"
                            onChange={handleChange}
                            type="checkbox"
                            id="terms"
                            className="w-5 h-5 mt-0.5 text-primary focus:ring-primary rounded"
                            aria-required="true"
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                            Concordo com a <a href="#" className="text-primary hover:underline focus:underline">Política de Privacidade</a> e
                            autorizo o contato da Astato para fins comerciais.
                        </label>
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="w-full shadow-medical group min-h-[52px] text-base"
                        aria-label="Enviar solicitação de contato"
                    >
                        Enviar Solicitação
                        <div
                            className="ml-2 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors"
                            aria-hidden="true"
                        >
                            <span className="text-sm">→</span>
                        </div>
                    </Button>
                </CardContent>
            </Card>
        </form>
    </>
    )
}

export default ContactForm