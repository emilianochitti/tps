/* global React */

// 1. Contexto / intro — warm human framing
function ContextoIntro() {
  return (
    <section style={{ background: 'var(--tps-hueso)', padding: '140px 48px 120px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 72, alignItems: 'start' }}>
        <div>
          <Eyebrow color="var(--tps-deep-blue)">Quiénes somos</Eyebrow>
          <div style={{ marginTop: 24, fontFamily: 'var(--font-accent)', fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--tps-amber)', lineHeight: 1.5 }}>
            Socio estratégico<br/>· no proveedor
          </div>
          <div style={{ marginTop: 36, padding: '18px 0', borderTop: '1px solid var(--border-strong)', borderBottom: '1px solid var(--border-strong)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['Abastecimiento confiable', 'Respaldo financiero', 'Continuidad operativa', 'Compromiso con la comunidad'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--fg)' }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--tps-amber)', flexShrink: 0 }} />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(40px, 4.2vw, 64px)', lineHeight: 1.12, letterSpacing: '-0.015em', color: 'var(--tps-deep-blue)', margin: 0 }}>
            En mercados donde muchos pueden vender productos,<br/>
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--tps-naranja-terra)' }}>pocos pueden sostener negocios.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 18, lineHeight: 1.65, color: 'var(--fg-muted)', marginTop: 36, maxWidth: 680 }}>
            The Partner Spot nace de la unión de más de 60 años de experiencia en comercio exterior y el legado de una de las familias más tradicionales de la industria de la carne vacuna argentina. De esa combinación surge una plataforma pensada para acompañar a distribuidores que operan en mercados complejos —con abastecimiento, respaldo financiero y una relación de largo plazo.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <a href="#nosotros" style={CTA_OUTLINE}>Conocé la historia</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// 2. Categorías — editorial list with big photos, color-coded
function Categorias() {
  const cats = [
    { n: '01', color: 'var(--tps-rust)', name: 'Proteínas', tag: 'Carnes & proteínas', desc: 'Carnes bovinas, pollo, cerdo y otras proteínas de origen verificado.', img: IMG.meat },
    { n: '02', color: 'var(--tps-oliva)', name: 'Alimentos Básicos', tag: 'Primera necesidad', desc: 'Arroz, legumbres, aceites, harina, azúcar y productos de primera necesidad.', img: IMG.rice },
    { n: '03', color: 'var(--tps-deep-blue)', name: 'Soluciones Comerciales', tag: 'Financiamiento & logística', desc: 'Financiación, logística, abastecimiento especial y soporte operativo integrado.', img: IMG.handshake },
    { n: '04', color: 'var(--tps-avellana)', name: 'Más Allá de los Alimentos', tag: 'Electrónicos & construcción', desc: 'Electrónicos, materiales de construcción y otras categorías estratégicas.', img: IMG.containers },
    { n: '05', color: 'var(--tps-naranja-terra)', name: 'Energías Renovables', tag: 'Energía para operar', desc: 'Soluciones de energía para sostener la operación en entornos con limitaciones de suministro.', img: IMG.solar },
  ];
  return (
    <section id="productos" style={{ background: 'var(--tps-hueso-soft)', padding: '120px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', marginBottom: 64 }}>
        <div>
          <Eyebrow color="var(--tps-deep-blue)">Qué comercializamos</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(48px, 5.2vw, 88px)', lineHeight: 0.98, letterSpacing: '-0.025em', color: 'var(--tps-deep-blue)', margin: '20px 0 0' }}>
            Cinco categorías,<br/>una sola red<br/>de abastecimiento.
          </h2>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17, lineHeight: 1.6, color: 'var(--fg-muted)', maxWidth: 440, justifySelf: 'end', margin: 0 }}>
          Integramos alimentos, energía y soluciones comerciales bajo un mismo partner. El objetivo no es vender productos aislados, sino sostener la operación completa de nuestros distribuidores.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-strong)' }}>
        {cats.map((c, i) => (
          <a key={c.n} href={`#cat-${c.n}`} style={{
            display: 'grid', gridTemplateColumns: '80px 1.4fr 1fr 280px 40px',
            gap: 32, alignItems: 'center',
            padding: '32px 0', borderBottom: '1px solid var(--border-strong)',
            textDecoration: 'none', color: 'inherit',
            transition: 'background 220ms ease, padding 220ms ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.paddingLeft = '16px'; e.currentTarget.style.paddingRight = '16px'; }}
          onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.paddingRight = '0'; }}
          >
            <div style={{ fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: 13, letterSpacing: '0.18em', color: c.color }}>{c.n}</div>
            <div>
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: 10 }}>{c.tag}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(28px, 2.6vw, 42px)', lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--tps-deep-blue)' }}>{c.name}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, lineHeight: 1.55, color: 'var(--fg-muted)' }}>{c.desc}</div>
            <div style={{ width: 280, height: 160, borderRadius: 14, overflow: 'hidden', backgroundImage: `url(${c.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: c.color, opacity: 0.15 }} />
            </div>
            <div style={{ width: 40, height: 40, borderRadius: 999, background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tps-hueso)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// 3. Ecommerce CTA band — toggleable via tweak
function EcommerceBand() {
  const products = [
    { n: 'Bife ancho', p: 'Angus · USA', img: IMG.meat },
    { n: 'Arroz largo', p: 'Uruguay', img: IMG.rice },
    { n: 'Aceite girasol', p: 'Argentina', img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80' },
    { n: 'Pollo entero', p: 'Brasil', img: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=800&q=80' },
  ];
  return (
    <section style={{ background: 'var(--tps-deep-blue)', color: 'var(--tps-hueso)', padding: '120px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 72, alignItems: 'center' }}>
        <div>
          <Eyebrow color="var(--tps-amber)">The Meat Spot · Tienda online</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(44px, 5vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--tps-hueso)', marginTop: 22 }}>
            Nuestra plataforma<br/>de abastecimiento,<br/>
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--tps-amber)' }}>al alcance del distribuidor.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 18, lineHeight: 1.6, color: '#B8CAD3', marginTop: 28, maxWidth: 520 }}>
            En <span style={{ color: 'var(--tps-hueso)', fontWeight: 400 }}>market.themeatspot.com</span> podés explorar catálogo, precios en USD/EUR/moneda local y hacer pedidos con respaldo financiero.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <a href="https://market.themeatspot.com/" target="_blank" rel="noopener" style={CTA_ACCENT}>
              Ir a la tienda
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17 17 7M9 7h8v8"/></svg>
            </a>
            <a href="#contacto" style={CTA_GHOST_DARK}>Solicitar acceso</a>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          {/* Mock browser window */}
          <div style={{ background: 'var(--tps-hueso)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.35)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px', background: '#E8DFD0', borderBottom: '1px solid rgba(0,46,71,0.1)' }}>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: '#FF5F57' }}/>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: '#FFBD2E' }}/>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: '#27C93F' }}/>
              <div style={{ marginLeft: 16, padding: '4px 14px', background: 'var(--tps-hueso-soft)', borderRadius: 999, fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--fg-muted)', fontWeight: 400 }}>
                🔒 market.themeatspot.com
              </div>
            </div>
            <div style={{ padding: 24, color: 'var(--tps-deep-blue)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20 }}>The Meat Spot</div>
                <div style={{ display: 'flex', gap: 16, fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--fg-muted)' }}>
                  <span>Productos</span><span>Categorías</span><span>Mi cuenta</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
                {products.map(p => (
                  <div key={p.n} style={{ background: 'var(--tps-hueso-soft)', borderRadius: 10, overflow: 'hidden' }}>
                    <div style={{ height: 110, backgroundImage: `url(${p.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div style={{ padding: 12 }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: 'var(--tps-deep-blue)' }}>{p.n}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--fg-muted)', marginTop: 2 }}>{p.p}</div>
                      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: 10, letterSpacing: '0.14em', color: 'var(--tps-naranja-terra)' }}>USD · EUR</div>
                        <div style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--tps-amber)', color: 'var(--tps-deep-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700 }}>+</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ position: 'absolute', top: -20, right: -20, background: 'var(--tps-amber)', color: 'var(--tps-deep-blue)', padding: '10px 16px', borderRadius: 999, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', boxShadow: '0 10px 24px rgba(0,0,0,0.25)' }}>
            En línea
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. Por qué TPS — diferencial como bullets
function PorQue() {
  const pts = [
    { n: '01', t: 'Pre-financiamiento a distribuidores', d: 'Convertimos la barrera financiera en oportunidad — accedé a mejor costo de producto y reducí barreras de entrada.' },
    { n: '02', t: 'Flexibilidad de pago', d: 'USD, EUR o moneda local. Adaptamos la operación a la realidad financiera de cada mercado.' },
    { n: '03', t: 'Acompañamiento real', d: 'Priorizamos el vínculo por sobre la venta — incluso recomendamos alternativas cuando son mejor para vos.' },
    { n: '04', t: 'Logística ágil y criterio', d: 'Red consolidada en el Caribe y entendimiento profundo del mercado. Entregamos donde otros no llegan.' },
  ];
  return (
    <section style={{ background: 'var(--tps-hueso)', padding: '120px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <Eyebrow color="var(--tps-deep-blue)">Por qué TPS</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(40px, 4.4vw, 68px)', lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--tps-deep-blue)', margin: '22px 0 0' }}>
            Facilitamos lo que<br/>el contexto<br/>
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--tps-naranja-terra)' }}>dificulta.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: 'var(--fg-muted)', marginTop: 24, maxWidth: 380 }}>
            Operamos donde los grandes jugadores globales no llegan, construyendo estabilidad en entornos donde la incertidumbre forma parte de la realidad cotidiana.
          </p>
        </div>
        <div>
          {pts.map((p, i) => (
            <div key={p.n} style={{
              display: 'grid', gridTemplateColumns: '60px 1fr',
              gap: 28, padding: '32px 0',
              borderTop: i === 0 ? '1px solid var(--border-strong)' : 'none',
              borderBottom: '1px solid var(--border-strong)',
            }}>
              <div style={{ fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: 13, letterSpacing: '0.2em', color: 'var(--tps-amber)' }}>{p.n}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(22px, 2vw, 30px)', lineHeight: 1.25, letterSpacing: '-0.01em', color: 'var(--tps-deep-blue)' }}>{p.t}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: 'var(--fg-muted)', marginTop: 12, maxWidth: 640 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. Mapa estilizado
function Mapa() {
  // approx lat/lon → svg coords (world map 1000x500, equirectangular)
  const countries = [
    { name: 'Canadá',        lon: -106, lat: 56,  role: 'origen' },
    { name: 'Estados Unidos',lon: -98,  lat: 39,  role: 'origen' },
    { name: 'Argentina',     lon: -64,  lat: -34, role: 'origen', hq: true },
    { name: 'Uruguay',       lon: -56,  lat: -33, role: 'origen' },
    { name: 'Cuba',          lon: -79,  lat: 22,  role: 'destino', featured: true },
    { name: 'Rep. Dominicana',lon:-70.5, lat: 19,  role: 'destino' },
    { name: 'España',        lon: -3,   lat: 40,  role: 'origen' },
    { name: 'Egipto',        lon: 30,   lat: 27,  role: 'origen' },
    { name: 'Sudáfrica',     lon: 24,   lat: -29, role: 'origen' },
    { name: 'Rusia',         lon: 90,   lat: 60,  role: 'origen' },
  ];
  const project = (lon, lat) => ({
    x: ((lon + 180) / 360) * 1000,
    y: ((90 - lat) / 180) * 500,
  });
  const argentina = project(-64, -34);
  return (
    <section id="nosotros" style={{ background: 'var(--tps-hueso-soft)', padding: '120px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', marginBottom: 48 }}>
        <div>
          <Eyebrow color="var(--tps-deep-blue)">Presencia global</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(44px, 5vw, 80px)', lineHeight: 1, letterSpacing: '-0.025em', color: 'var(--tps-deep-blue)', margin: '22px 0 0' }}>
            Una red que<br/>conecta mercados.
          </h2>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: 'var(--fg-muted)', maxWidth: 440, justifySelf: 'end', margin: 0 }}>
          Compramos a productores internacionales y abastecemos a distribuidores del Caribe y Centroamérica. Con proyección de expansión regional.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', aspectRatio: '2/1' }}>
        <svg viewBox="0 0 1000 500" style={{ width: '100%', height: '100%', display: 'block' }}>
          <defs>
            <filter id="glow"><feGaussianBlur stdDeviation="3"/></filter>
            <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E07F00" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#E07F00" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {/* world dots — very stylized, hand-placed approximation */}
          <g fill="rgba(0,46,71,0.18)">
            {Array.from({length: 800}).map((_,i) => {
              // dense dot grid on a sphere-ish silhouette (simple noise-free layout)
              const cols = 50, rows = 16;
              const col = i % cols, row = Math.floor(i / cols);
              if (row >= rows) return null;
              const cx = 20 + col * 19;
              const cy = 80 + row * 22;
              // rough land masses by bounding boxes
              const inBounds = (
                (cx>100 && cx<320 && cy>110 && cy<240) || // N America
                (cx>220 && cx<330 && cy>260 && cy<430) || // S America
                (cx>450 && cx<560 && cy>80 && cy<200)  || // Europe
                (cx>440 && cx<620 && cy>190 && cy<370) || // Africa
                (cx>550 && cx<820 && cy>90 && cy<280)  || // Asia
                (cx>820 && cx<920 && cy>280 && cy<380) // Australia (decorative)
              );
              if (!inBounds) return null;
              return <circle key={i} cx={cx} cy={cy} r={1.6}/>;
            })}
          </g>

          {/* trade flow lines: red mallada — todos los puntos conectados entre sí */}
          {countries.flatMap((a, i) => countries.slice(i + 1).map((b, j) => {
            const pa = project(a.lon, a.lat);
            const pb = project(b.lon, b.lat);
            const mx = (pa.x + pb.x) / 2, my = Math.min(pa.y, pb.y) - 60;
            return (
              <path key={`${i}-${i+1+j}`} d={`M ${pa.x} ${pa.y} Q ${mx} ${my} ${pb.x} ${pb.y}`} stroke="var(--tps-amber)" strokeWidth="1" fill="none" opacity="0.35" strokeDasharray="3 4"/>
            );
          }))}

          {/* points */}
          {countries.map((c,i) => {
            const p = project(c.lon, c.lat);
            const featured = c.featured;
            const hq = c.hq;
            return (
              <g key={c.name}>
                {featured && <circle cx={p.x} cy={p.y} r="28" fill="url(#pulse)"/>}
                <circle cx={p.x} cy={p.y} r={featured ? 7 : (hq ? 6 : 4.5)} fill={featured ? 'var(--tps-amber)' : (hq ? 'var(--tps-naranja-terra)' : 'var(--tps-deep-blue)')} stroke="var(--tps-hueso-soft)" strokeWidth="2"/>
                <text x={p.x + 10} y={p.y + 4} fontFamily="Sofia Pro" fontSize={featured ? 14 : 11} fontWeight={featured ? 600 : 400} fill="var(--tps-deep-blue)">{c.name}</text>
                {featured && <text x={p.x + 10} y={p.y + 20} fontFamily="Pilcrow Rounded" fontSize="9" letterSpacing="1.5" fill="var(--tps-naranja-terra)">OPERACIÓN 80%</text>}
              </g>
            );
          })}
        </svg>

        {/* legend */}
        <div style={{ position: 'absolute', bottom: 8, left: 8, background: 'var(--tps-hueso)', border: '1px solid var(--border)', borderRadius: 14, padding: '14px 18px', display: 'flex', gap: 22, flexWrap: 'wrap', boxShadow: '0 8px 24px rgba(0,46,71,0.08)' }}>
          {[
            { c: 'var(--tps-amber)', l: 'Operación principal' },
            { c: 'var(--tps-naranja-terra)', l: 'Headquarter' },
            { c: 'var(--tps-deep-blue)', l: 'Origen / producción' },
          ].map(it => (
            <div key={it.l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-accent)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: it.c }} />
              {it.l}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 72, borderTop: '1px solid var(--border-strong)' }}>
        {[
          { k: 'Destinos principales', v: 'Cuba · Rep. Dominicana', extra: '80% / 20% del volumen' },
          { k: 'Expansión proyectada', v: 'Caribe & Centroamérica', extra: 'Haití · Jamaica · Panamá' },
          { k: 'Países de origen', v: '9 países · 4 continentes', extra: 'USA · UY · AR · ES · EG · CA · CU · RU · ZA' },
        ].map((c, i) => (
          <div key={i} style={{ padding: '36px 32px', borderRight: i < 2 ? '1px solid var(--border-strong)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-accent)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--fg-muted)' }}>{c.k}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, lineHeight: 1.25, color: 'var(--tps-deep-blue)', marginTop: 14 }}>{c.v}</div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 13, color: 'var(--fg-muted)', marginTop: 10 }}>{c.extra}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// 6. Testimonio / filosofía
function Filosofia() {
  return (
    <section style={{ width: '100%', position: 'relative', minHeight: 520,
      backgroundImage: `linear-gradient(180deg, rgba(0,46,71,0.82) 0%, rgba(0,46,71,0.94) 100%), url(${IMG.people})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '140px 48px',
    }}>
      <div style={{ maxWidth: 1100, textAlign: 'center' }}>
        <Eyebrow color="var(--tps-amber)" style={{ justifyContent: 'center' }}>Nuestra filosofía</Eyebrow>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(32px, 3.8vw, 56px)', lineHeight: 1.2, letterSpacing: '-0.01em',
          color: 'var(--tps-hueso)', marginTop: 28,
        }}>
          Creemos que incluso en contextos desafiantes es posible construir relaciones <em style={{ fontStyle: 'italic', color: 'var(--tps-amber)' }}>sólidas, previsibles y de largo plazo,</em> que impulsen crecimiento real y sostenible.
        </div>
        <div style={{ marginTop: 40, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--tps-amber)' }}>
          The Partner Spot · Propósito
        </div>
      </div>
    </section>
  );
}

// 7. CTA final
function CTAFinal() {
  return (
    <section style={{ background: 'var(--tps-hueso)', padding: '140px 48px', position: 'relative' }}>
      <div style={{ textAlign: 'center', maxWidth: 1000, margin: '0 auto' }}>
        <Eyebrow color="var(--tps-deep-blue)" style={{ justifyContent: 'center' }}>Sumate a la red</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(60px, 8vw, 144px)', lineHeight: 0.92, letterSpacing: '-0.03em', color: 'var(--tps-deep-blue)', margin: '22px 0 0' }}>
          Contá con<br/>
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--tps-naranja-terra)' }}>nosotros<span style={{ color: 'var(--tps-amber)' }}>.</span></em>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 19, lineHeight: 1.55, color: 'var(--fg-muted)', marginTop: 32, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
          Contanos sobre tu operación y un partner comercial se va a comunicar con vos en menos de 48 hs.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
          <a href="mailto:info@tpsglobal.com" style={CTA_PRIMARY}>Hablemos</a>
          <a href="https://market.themeatspot.com/" target="_blank" rel="noopener" style={CTA_OUTLINE}>Ir a la tienda</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ContextoIntro, Categorias, EcommerceBand, PorQue, Mapa, Filosofia, CTAFinal });
