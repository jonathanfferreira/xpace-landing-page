import React, { useEffect } from 'react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative bg-white dark:bg-black w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-2xl clip-card">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined">close</span>
                </button>

                <h3 className="font-display text-3xl font-black mb-8">
                    {type === 'privacy' ? 'POLÍTICA DE PRIVACIDADE' : 'TERMOS DE USO'}
                </h3>

                <div className="prose prose-sm dark:prose-invert font-body text-gray-600 dark:text-gray-300">
                    {type === 'privacy' ? (
                        <>
                            <p><strong>1. Coleta de Dados:</strong> Coletamos informações como nome, e-mail e telefone apenas quando fornecidos voluntariamente através de nossos formulários de contato ou matrícula.</p>
                            <p><strong>2. Uso das Informações:</strong> Seus dados são utilizados exclusivamente para comunicação sobre aulas, eventos e matrículas da XPACE. Não compartilhamos suas informações com terceiros sem seu consentimento.</p>
                            <p><strong>3. Segurança:</strong> Adotamos medidas de segurança adequadas para proteger seus dados contra acesso não autorizado.</p>
                            <p><strong>4. Direitos:</strong> Você pode solicitar a exclusão ou alteração de seus dados a qualquer momento entrando em contato conosco.</p>
                        </>
                    ) : (
                        <>
                            <p><strong>1. Matrículas:</strong> A matrícula é confirmada apenas após o pagamento da taxa e assinatura do contrato presencial.</p>
                            <p><strong>2. Mensalidades:</strong> As mensalidades devem ser pagas até o dia 10 de cada mês. Atrasos podem acarretar multas conforme contrato.</p>
                            <p><strong>3. Frequência:</strong> Alunos com mais de 25% de faltas injustificadas podem perder a vaga em grupos de competição.</p>
                            <p><strong>4. Uso de Imagem:</strong> Ao se matricular, o aluno autoriza o uso de sua imagem em materiais de divulgação da escola, salvo manifestação expressa em contrário.</p>
                            <p><strong>5. Cancelamento:</strong> O cancelamento do plano deve ser solicitado com 30 dias de antecedência na secretaria.</p>
                        </>
                    )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button onClick={onClose} className="w-full bg-black dark:bg-white text-white dark:text-black py-3 font-tech tracking-widest text-lg hover:opacity-90 clip-button">ENTENDIDO</button>
                </div>
            </div>
        </div>
    );
};
