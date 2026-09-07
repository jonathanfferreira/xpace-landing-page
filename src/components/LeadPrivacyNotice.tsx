import React from 'react';
import { Link } from 'react-router-dom';

export const LeadPrivacyNotice: React.FC = () => (
  <p className="text-xs normal-case leading-relaxed text-gray-500 dark:text-gray-400">
    Usaremos seus dados para contato sobre aulas e atividades da XPACE, inclusive por WhatsApp.{' '}
    <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Política de privacidade (nova aba)</Link>.
  </p>
);
