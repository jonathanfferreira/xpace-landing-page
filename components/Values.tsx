import React from 'react';

const values = [
  {
    title: "DIVERSÃO",
    description: "A alegria é o nosso ritmo. Acreditamos que a dança deve ser, acima de tudo, uma celebração."
  },
  {
    title: "DISCIPLINA",
    description: "Foco para evoluir. O caminho para a excelência exige constância e técnica."
  },
  {
    title: "RESPEITO",
    description: "Valorizamos cada indivíduo. Aqui, todos os movimentos e histórias importam."
  },
  {
    title: "FAMÍLIA",
    description: "Unidos pelo beat. Somos uma comunidade que acolhe, apoia e cresce junto."
  },
  {
    title: "COMPROMISSO",
    description: "Lealdade à arte. Entregamos nosso melhor em cada aula, em cada passo."
  },
  {
    title: "DEDICAÇÃO",
    description: "Superação diária. Paixão que nos move a ir além dos nossos limites."
  }
];

export const Values: React.FC = () => {
  return (
    <section className="bg-black text-white relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {values.map((item, index) => (
          <div key={index} className="group relative h-[50vh] min-h-[350px] overflow-hidden border border-gray-900 bg-neutral-950 transition-colors duration-500 hover:bg-neutral-900">
            
            {/* Subtle Gradient Background Effect on Hover */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
              <h3 
                className="font-display text-5xl md:text-7xl font-black tracking-tighter uppercase transition-all duration-500 text-transparent group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] select-none"
                style={{ WebkitTextStroke: '1px white' }}
              >
                {item.title}
              </h3>
              
              <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                <p className="mt-6 max-w-xs font-tech text-lg md:text-xl tracking-widest text-gray-400 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 border-t border-primary/50 pt-4">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 group-hover:border-primary transition-colors duration-300"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20 group-hover:border-primary transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};