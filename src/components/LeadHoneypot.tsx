import React from 'react';

export const LeadHoneypot: React.FC<{ value?: string; onChange?: (value: string) => void }> = ({ value, onChange }) => (
  <div className="hidden" aria-hidden="true">
    <label>Deixe este campo vazio
      <input name="website" type="text" tabIndex={-1} autoComplete="off" value={value} onChange={onChange ? event => onChange(event.target.value) : undefined} />
    </label>
  </div>
);
