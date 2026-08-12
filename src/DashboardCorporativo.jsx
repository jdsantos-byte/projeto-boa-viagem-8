import React from "react";
import "./styles.css";

import logo from "./logo.png";
import arquitetura from "./Arquitetura da Solução.png";
import plantaBaixa from "./planta baixa.png";

function Icon({ type }) {
  const icons = {
    money: "$",
    progress: "↗",
    users: "♟",
    points: "◎",
    fiber: "⌘",
    availability: "◔",
    roi: "▥",
    expansion: "✣",
  };

  return (
    <div className="kpi-icon">
      <span>{icons[type] || "•"}</span>
    </div>
  );
}

export default function DashboardCorporativo() {
  const kpis = [
    {
      titulo: "Investimento Total",
      valor: "R$ 25K",
      detalhe: "Projeto Corporativo",
      icon: "money",
    },
    {
      titulo: "Progresso Geral",
      valor: "75%",
      detalhe: "+12% este mês",
      icon: "progress",
    },
    {
      titulo: "Usuários Atendidos",
      valor: "120",
      detalhe: "Capacidade Atual",
      icon: "users",
    },
    {
      titulo: "Pontos RJ45",
      valor: "120",
      detalhe: "Categoria 5",
      icon: "points",
    },
    {
      titulo: "Backbone Óptico",
      valor: "420m",
      detalhe: "Fibra Implantada",
      icon: "fiber",
    },
    {
      titulo: "Disponibilidade",
      valor: "99,9%",
      detalhe: "Alta Performance",
      icon: "availability",
    },
    {
      titulo: "ROI Estimado",
      valor: "10m",
      detalhe: "Retorno Operacional",
      icon: "roi",
    },
  ];

  const etapas = [
    {
      nome: "Planejamento",
      percentual: "100%",
    },
    {
      nome: "Execução",
      percentual: "68%",
    },
    {
      nome: "Testes",
      percentual: "85%",
    },
    {
      nome: "Implantação",
      percentual: "25%",
    },
    {
      nome: "Concluído",
      percentual: "—",
    },
  ];

  const cronograma = [
    {
      etapa: "Infraestrutura",
      percentual: 20,
    },
    {
      etapa: "Fibra Óptica",
      percentual: 0,
    },
    {
      etapa: "Rack e Organização",
      percentual: 20,
    },
    {
      etapa: "Configuração",
      percentual: 90,
    },
    {
      etapa: "Entrega",
      percentual: 0,
    },
  ];

  const riscos = [
    {
      nome: "Cronograma",
      status: "BAIXO",
      classe: "baixo",
    },
    {
      nome: "Infraestrutura",
      status: "BAIXO",
      classe: "baixo",
    },
    {
      nome: "Implantação",
      status: "MODERADO",
      classe: "moderado",
    },
    {
      nome: "Orçamento",
      status: "CONTROLADO",
      classe: "baixo",
    },
  ];

  const beneficios = [
    {
      titulo: "Alta Disponibilidade",
      texto:
        "Estrutura preparada para operação corporativa crítica com alta estabilidade e continuidade operacional.",
    },
    {
      titulo: "Escalabilidade",
      texto:
        "Projeto preparado para crescimento organizacional sem necessidade de grandes mudanças físicas.",
    },
    {
      titulo: "Segurança",
      texto:
        "Segmentação de rede e backbone óptico garantindo maior isolamento e controle operacional.",
    },
    {
      titulo: "Desempenho",
      texto:
        "Infraestrutura preparada para aplicações críticas, VoIP, Wi-Fi corporativo e expansão futura.",
    },
  ];

  return (
    <div className="dashboard">

      <div className="background-glow"></div>

      <main className="dashboard-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="top-header">

          <div className="header-logo-area">
            <img
              src={logo}
              alt="Magnum Tyres"
              className="main-logo"
            />
          </div>

          <div className="header-divider"></div>

          <div className="header-information">

            <h1>
              Projeto de Infraestrutura de Rede
            </h1>

            <div className="header-subtitle">

              <span>Dashboard Executivo</span>

              <i></i>

              <span>Backbone Óptico</span>

              <i></i>

              <span>Distribuição Corporativa</span>

              <i></i>

              <span>Alta Disponibilidade</span>

            </div>

          </div>

        </header>


        {/* =====================================================
            TÍTULO DA SEÇÃO
        ===================================================== */}

        <section className="section-title">

          <h2>PROJETO EM EXECUÇÃO</h2>

          <div className="red-line"></div>

        </section>


        {/* =====================================================
            KPIs
        ===================================================== */}

        <section className="kpi-grid">

          {kpis.map((item, index) => (

            <article
              className="kpi-card"
              key={index}
            >

              <div className="kpi-top">

                <Icon type={item.icon} />

                <div className="kpi-info">

                  <span className="kpi-title">
                    {item.titulo}
                  </span>

                  <strong className="kpi-value">
                    {item.valor}
                  </strong>

                </div>

              </div>

              <div className="kpi-detail">
                {item.detalhe}
              </div>

            </article>

          ))}

        </section>


        {/* =====================================================
            CONTEÚDO PRINCIPAL
        ===================================================== */}

        <section className="main-grid">

          {/* ===================================================
              EXPANSÃO
          =================================================== */}

          <article className="panel expansion-panel">

            <div className="panel-header">

              <div>

                <h2>
                  Expansão Suportada
                </h2>

                <div className="panel-line"></div>

              </div>

            </div>


            <div className="expansion-content">

              <div className="expansion-number-area">

                <div className="expansion-icon">
                  <span>✣</span>
                </div>

                <div>

                  <strong className="expansion-number">
                    1024
                  </strong>

                  <span className="expansion-label">
                    Nº de Pontos
                  </span>

                </div>

              </div>


              <div className="expansion-description">

                Capacidade projetada para expansão futura da
                infraestrutura de rede, garantindo escalabilidade
                e continuidade operacional.

              </div>

              <div className="network-lines">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

              </div>

            </div>

          </article>


          {/* ===================================================
              PROGRESSO
          =================================================== */}

          <article className="panel progress-panel">

            <div className="panel-header">

              <div>

                <h2>
                  Progresso do Projeto
                </h2>

                <div className="panel-line"></div>

              </div>

            </div>


            <div className="progress-content">

              <div className="progress-circle">

                <div className="progress-circle-inner">

                  <strong>
                    68%
                  </strong>

                  <span>
                    Concluído
                  </span>

                </div>

              </div>


              <div className="progress-list">

                {etapas.map((item, index) => (

                  <div
                    className="progress-row"
                    key={index}
                  >

                    <span>
                      {item.nome}
                    </span>

                    <strong>
                      {item.percentual}
                    </strong>

                  </div>

                ))}

              </div>

            </div>

          </article>

        </section>


        {/* =====================================================
            CRONOGRAMA
        ===================================================== */}

        <section className="panel schedule-panel">

          <div className="panel-header">

            <div>

              <h2>
                Cronograma Executivo
              </h2>

              <div className="panel-line"></div>

            </div>

          </div>


          <div className="schedule-list">

            {cronograma.map((item, index) => (

              <div
                className="schedule-item"
                key={index}
              >

                <div className="schedule-header">

                  <span>
                    {item.etapa}
                  </span>

                  <strong>
                    {item.percentual}%
                  </strong>

                </div>

                <div className="schedule-bar">

                  <div
                    className="schedule-progress"
                    style={{
                      width: `${item.percentual}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* =====================================================
            ARQUITETURA
        ===================================================== */}

        <section className="image-grid">

          <article className="panel image-panel">

            <div className="panel-header">

              <div>

                <h2>
                  Arquitetura da Solução
                </h2>

                <div className="panel-line"></div>

              </div>

            </div>

            <img
              src={arquitetura}
              alt="Arquitetura da Solução"
            />

          </article>


          <article className="panel image-panel">

            <div className="panel-header">

              <div>

                <h2>
                  Planta / Projeto
                </h2>

                <div className="panel-line"></div>

              </div>

            </div>

            <img
              src={plantaBaixa}
              alt="Planta do Projeto"
            />

          </article>

        </section>


        {/* =====================================================
            RISCOS + RESPONSÁVEIS
        ===================================================== */}

        <section className="bottom-grid">

          <article className="panel">

            <div className="panel-header">

              <div>

                <h2>
                  Matriz de Riscos
                </h2>

                <div className="panel-line"></div>

              </div>

            </div>


            <div className="risk-list">

              {riscos.map((risco, index) => (

                <div
                  className="risk-item"
                  key={index}
                >

                  <span>
                    {risco.nome}
                  </span>

                  <strong className={risco.classe}>
                    {risco.status}
                  </strong>

                </div>

              ))}

            </div>

          </article>


          <article className="panel">

            <div className="panel-header">

              <div>

                <h2>
                  Responsáveis
                </h2>

                <div className="panel-line"></div>

              </div>

            </div>


            <div className="team-grid">

              <div className="team-member">

                <strong>
                  Felipe Braz
                </strong>

                <span>
                  Gestor de Infraestrutura
                </span>

              </div>


              <div className="team-member">

                <strong>
                  José Douglas
                </strong>

                <span>
                  Assistente de Infraestrutura
                </span>

              </div>

            </div>

          </article>

        </section>


        {/* =====================================================
            BENEFÍCIOS
        ===================================================== */}

        <section className="benefits-section">

          <div className="section-title">

            <h2>
              BENEFÍCIOS DO PROJETO
            </h2>

            <div className="red-line"></div>

          </div>


          <div className="benefits-grid">

            {beneficios.map((item, index) => (

              <article
                className="benefit-card"
                key={index}
              >

                <h3>
                  {item.titulo}
                </h3>

                <p>
                  {item.texto}
                </p>

              </article>

            ))}

          </div>

        </section>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="footer">

          <span>
            MAGNUM TYRES
          </span>

          <i></i>

          Dashboard Executivo

          <i></i>

          Projeto de Infraestrutura de Rede

          <i></i>

          2026

        </footer>

      </main>

    </div>
  );
}
