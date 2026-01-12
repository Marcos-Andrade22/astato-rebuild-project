import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Empresa from "@/pages/Empresa";
import Diferenciais from "@/pages/Diferenciais";
import Servicos from "@/pages/Servicos";
import Equipamentos from "@/pages/Equipamentos";
import Noticias from "@/pages/Noticias";
import NoticiaPost from "@/pages/NoticiaPost";
import Contato from "@/pages/Contato";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/diferenciais" element={<Diferenciais />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/equipamentos" element={<Equipamentos />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/noticias/:slug" element={<NoticiaPost />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
