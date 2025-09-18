import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Input } from './input'
import { Textarea } from './textarea'
import { Button } from './button'
import { Send } from 'lucide-react'
import Snackbar from './Snackbar'

const ContactForm = () => {

    const [snackbar, setSnackbar] = useState<{ message: string; type?: string } | null>(null);

    interface Lead {
        socialReason: string;         // Razão Social
        phone: string;        // Telefone
        cpfcnpj: string;      // CNPJ
        contactName: string;  // Nome do contato (custom field)
        serviceType: string;  // Setor de atuação (custom field)
        termsAccepted: boolean;
    }

    const [lead, setLead] = useState<Lead>({
        socialReason: '',           // Razão Social
        phone: '',
        cpfcnpj: '',
        contactName: '',
        serviceType: '',
        termsAccepted: false,
    });

    async function HandleSendPost(lead, token) {
        const url = 'https://api.exactspotter.com/v3/LeadsAdd';
        const body = JSON.stringify({
            duplicityValidation: true,
            lead: {
                name: lead.socialReason.toUpperCase(),      // Razão Social
                cpfcnpj: lead.cpfcnpj,
                phone: lead.phone,
                customFields: [
                    { id: '_nomedocontato', value: lead.contactName.toUpperCase() },
                    { id: '_setordeatuacao', value: lead.serviceType.toUpperCase() }
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
            setSnackbar({ message: "Lead enviado com sucesso!", type: "success" });
            // setSnackbar({ message: "Erro ao enviar. Tente novamente.", type: "error" });
            console.error("Erro ao enviar o lead: ", errorData);
            throw new Error('Falha na requisição para Exact Spotter');
        } else {
            console.log("Lead enviado com sucesso");
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

    return (<>
        {snackbar && (
            <Snackbar
                message={snackbar.message}
                type={snackbar.type as "success" | "error" | "info"}
                onClose={() => setSnackbar(null)}
            />
        )}
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
                            <label className="text-sm font-medium text-foreground">Razão Social *</label>
                            <Input required name="socialReason" onChange={handleChange} value={lead.socialReason} placeholder="Razão Social" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">CNPJ *</label>
                            <Input required name="cpfcnpj" onChange={handleChange} value={lead.cpfcnpj} maxLength={14} placeholder="CNPJ" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Telefone *</label>
                            <Input required name="phone" onChange={handleChange} value={lead.phone} placeholder="Telefone" />

                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Nome Completo</label>
                            <Input required name="contactName" onChange={handleChange} value={lead.contactName} placeholder="Nome do completo" />

                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Setor de atuação*</label>
                        <select name="serviceType" value={lead.serviceType} onChange={handleChange} required
                            className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                            <option disabled value="">Selecione o setor de atuação</option>
                            <option value="ENGENHARIA CLÍNICA">Engenharia Clínica</option>
                            <option value="ENGENHARIA CLÍNICA ADM">Engenharia Clínica adm</option>
                            <option value="ENGENHARIA CLÍNICA COORD">Engenharia Clínica coord</option>
                            <option value="ENF. CME">Enf. CME</option>
                            <option value="ENF. CME ADM">Enf. CME adm</option>
                            <option value="ENF. CME COORD">Enf. CME coord</option>
                            <option value="ENF. CC">Enf. CC</option>
                            <option value="ENF. CC ADM">Enf. CC adm</option>
                            <option value="ENF. CC COORD">Enf. CC coord</option>
                            <option value="COMPRADOR">Comprador</option>
                            <option value="FINANCEIRO">Financeiro</option>
                            <option value="OUTRO">Outro</option>
                        </select>
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
    </>
    )
}

export default ContactForm