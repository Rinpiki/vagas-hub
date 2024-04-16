# Workhub
![Texto alternativo](https://github.com/Rinpiki/vagas-hub/assets/74790193/fad807e6-94e1-4823-b400-4345563dd6a2)

O projeto consiste em um site que reúne vários cards com de sites de vagas de emprego, como Indeed e Geekhunter. Cada card representa um site de onde o usuário pode buscar vagas de emprego. Ao clicar em um card, o usuário é direcionado diretamente para o site correspondente. Uma funcionalidade interessante é que, após visitar um site através do card, o card correspondente fica marcado em verde, indicando que o usuário já visitou esse site. 

Além disso, há uma característica de temporização implementada: após 24 horas, o estado do card é redefinido e volta à sua cor normal, permitindo ao usuário acompanhar facilmente quais sites já foram visitados recentemente.

## Funcionalidades:

- **📋 Exibição de Cards de Sites de Vagas**: Os cards apresentam sites de vagas de emprego.
- **🔗 Redirecionamento para Sites de Vagas**: Ao clicar em um card, o usuário é redirecionado para o site correspondente.
- **👀 Indicação de Visita**: Os cards visitados pelos usuários são marcados com uma cor verde, facilitando a identificação dos sites já acessados.
- **⏰ Reset Automático**: Após 24 horas, o estado de visita dos cards é resetado, voltando à sua cor normal.

## Tecnologias Utilizadas:

- **Next.js 14**: Framework React para desenvolvimento web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática à linguagem.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e eficiente.
- **Shadcn**: Shadcn é um conjunto de componentes para UI em React que facilita o desenvolvimento web..

Este projeto visa fornecer aos usuários uma maneira conveniente de acessar os principais sites de vagas de emprego disponíveis online, ao mesmo tempo em que oferece uma experiência de usuário intuitiva e eficiente.

> [!CAUTION]
> O estado do cartão é armazenado no localStorage. Se os dados do localStorage forem apagados, o estado do cartão será redefinido.

## Link do projeto
> https://workhubbr.vercel.app/
