#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generează paginile de landing „pe problemă" / „pe ofertă" din pagina de bază.

Sursa unică de adevăr este `frontend/public/oferte-voucher-meta/index.html`.
Fiecare variantă păstrează tot restul paginii (vouchere, formulare, tracking,
secțiuni) și schimbă doar:

  * hero-ul (copy propriu + opțional o poză sugestivă),
  * ordinea secțiunilor (ex. voucherele mutate imediat sub hero),
  * title / meta description.

Sursa lead-ului NU se configurează aici: formularul o deduce singur din
`location.pathname` la trimitere, deci orice pagină (generată sau scrisă de
mână) se identifică fără nicio setare.

Rulează după orice modificare a paginii de bază:

    python3 scripts/build-lp-variants.py

Fișierele generate se comit în repo — Netlify servește direct din
`frontend/public/`, deci nu există un pas de build suplimentar.
"""

import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, 'frontend', 'public')
BASE = os.path.join(PUBLIC, 'oferte-voucher-meta', 'index.html')

# Paginile generate nu au folderul `Creatives/` propriu — refolosesc asset-urile
# paginii de bază, exact ca varianta Google.
CREATIVES_FROM = '"Creatives/'
CREATIVES_TO = '"/oferte-voucher-meta/Creatives/'

HERO_RE = re.compile(r'<!-- =+ HERO =+ -->\n<section class="hero">.*?\n</section>\n', re.S)
VOUCHERS_RE = re.compile(
    r'<!-- =+ VOUCHERS =+ -->\n<section class="bg-black" id="vouchere">.*?\n</section>\n', re.S)

CSS_ANCHOR = '  /* ---------- specializări (FAQ accordion) ---------- */'

# Hero „problemă": copy în stânga, poza sugestivă în dreapta (pe desktop),
# una sub alta pe telefon. Fără video — poza e elementul principal, iar LCP-ul
# rămâne o singură imagine.
PROBLEM_CSS = '''  /* ---------- hero „problemă" (copy + poză sugestivă) ---------- */
  .hero--problem { padding-top: 104px; padding-bottom: 34px; }
  .hero--problem .hero-inner { max-width: 1120px; gap: 22px; }
  .hero--problem .hero-copy,
  .hero--problem .hero-actions {
    display: flex; flex-direction: column; align-items: center; gap: 14px;
    width: 100%;
  }
  /* titlul stă pe o coloană, nu pe toată lățimea — deci mai mic decât în hero-ul de bază */
  .hero--problem h1.display { font-size: 29px; line-height: 1.12; }
  .hero--problem h1.display em { line-height: 1.3; }
  .hero--problem .hero-photo {
    position: relative; width: 100%; max-width: 420px; margin: 0 auto;
    border-radius: 18px; overflow: hidden; aspect-ratio: 4 / 3;
    border: 1px solid var(--card-border-gold);
    box-shadow: 0 18px 50px rgba(0, 0, 0, .55);
    background: var(--card-dark);
  }
  .hero--problem .hero-photo img {
    width: 100%; height: 100%; object-fit: cover; display: block;
  }
  .hero--problem .hero-photo figcaption {
    position: absolute; left: 0; right: 0; bottom: 0;
    padding: 30px 16px 12px; text-align: left;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, .85));
    font-family: var(--sans); font-size: 12px; line-height: 1.45; color: #e7dcc9;
  }
  @media (min-width: 768px) {
    .hero--problem h1.display { font-size: 38px; }
  }
  /* pe desktop: copy sus-stânga, CTA-urile sub el, poza pe toată coloana din dreapta */
  @media (min-width: 900px) {
    .hero--problem .hero-inner {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 34%;
      grid-template-areas: "copy photo" "actions photo";
      align-items: start; column-gap: 32px; row-gap: 22px; text-align: left;
    }
    .hero--problem .hero-copy { grid-area: copy; }
    .hero--problem .hero-actions { grid-area: actions; }
    .hero--problem .hero-copy,
    .hero--problem .hero-actions { align-items: flex-start; text-align: left; }
    .hero--problem .hero-copy .lead { margin-left: 0; margin-right: 0; }
    .hero--problem .cta-row,
    .hero--problem .feature-bullets { justify-content: flex-start; }
    .hero--problem .hero-photo {
      grid-area: photo; align-self: center; max-width: 410px; aspect-ratio: 4 / 5;
    }
  }
  @media (min-width: 1200px) {
    .hero--problem h1.display { font-size: 44px; }
  }

'''

# Titlurile de ofertă sunt mai lungi decât „Clinica stomatologică…" din pagina de
# bază, iar h1-ul de bază urcă la 88px pe ecran mare — ar umple singur tot hero-ul.
OFFER_CSS = '''  /* ---------- hero „ofertă" (titlu mai lung => plafonat) ---------- */
  .hero--offer h1.display { font-size: 30px; line-height: 1.12; }
  .hero--offer h1.display em { line-height: 1.3; }
  @media (min-width: 768px) { .hero--offer h1.display { font-size: 46px; } }
  @media (min-width: 1200px) { .hero--offer h1.display { font-size: 56px; } }
  /* copy-ul coboară mai jos peste video decât în pagina de bază — întunecăm
     puțin mai mult fundalul ca prețul și CTA-urile să rămână lizibile */
  .hero--offer::before {
    background: linear-gradient(180deg, rgba(11, 15, 13, .80) 0%, rgba(11, 15, 13, .68) 45%, rgba(11, 15, 13, .88) 100%);
  }
  /* termenul ofertei — pastilă vizibilă, sub CTA-uri */
  .hero--offer .hero-note {
    margin: 0; display: inline-flex; align-items: center; gap: 8px;
    padding: 8px 18px; border-radius: 999px;
    border: 1px solid var(--card-border-gold); background: rgba(0, 0, 0, .42);
    font-family: var(--sans); font-size: 12.5px; font-weight: 600;
    letter-spacing: .04em; color: #f0e6d4;
  }
  .hero--offer .hero-note::before {
    content: ""; width: 7px; height: 7px; border-radius: 50%;
    background: var(--gold); flex: 0 0 auto;
  }
  @media (min-width: 768px) { .hero--offer .hero-note { font-size: 13.5px; } }
  /* perioada ofertei e argumentul principal — o scriem mare, nu ca eyebrow mic */
  .hero--offer .hero-eyebrow {
    font-size: 16px; letter-spacing: .09em; font-weight: 700; line-height: 1.3;
  }
  @media (min-width: 768px) { .hero--offer .hero-eyebrow { font-size: 24px; } }
  @media (min-width: 1200px) { .hero--offer .hero-eyebrow { font-size: 28px; } }
  /* countdown până la finalul ofertei */
  .hero-countdown { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .hero-countdown__label {
    font-family: var(--sans); font-size: 12px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase; color: #e7dcc9;
  }
  .hero-countdown__boxes { display: flex; gap: 8px; }
  .cd-box {
    min-width: 62px; padding: 8px 6px 7px; border-radius: 12px;
    border: 1px solid var(--card-border-gold); background: rgba(0, 0, 0, .5);
    display: flex; flex-direction: column; align-items: center; gap: 3px;
  }
  .cd-box b {
    font-family: var(--serif); font-size: 24px; font-weight: 600; line-height: 1;
    color: var(--gold); font-variant-numeric: tabular-nums;
  }
  .cd-box i {
    font-family: var(--sans); font-style: normal; font-size: 10px;
    letter-spacing: .1em; text-transform: uppercase; color: var(--text-body);
  }
  @media (min-width: 768px) {
    .hero-countdown__label { font-size: 13px; }
    .cd-box { min-width: 76px; padding: 10px 8px 9px; }
    .cd-box b { font-size: 30px; }
    .cd-box i { font-size: 11px; }
  }

'''

# Ceasul rulează o dată pe secundă și se ascunde singur după termen, ca pagina
# să nu rămână cu un countdown expirat dacă oferta nu e actualizată la timp.
COUNTDOWN_JS = '''
  // ===== Countdown ofertă =====
  (function () {
    var el = document.querySelector('[data-deadline]');
    if (!el) return;
    var end = Date.parse(el.getAttribute('data-deadline'));
    if (isNaN(end)) return;
    var out = {};
    ['d', 'h', 'm', 's'].forEach(function (k) { out[k] = el.querySelector('[data-cd="' + k + '"]'); });
    if (!out.d || !out.h || !out.m || !out.s) return;
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    var timer;
    function tick() {
      var left = end - Date.now();
      if (left <= 0) { el.hidden = true; if (timer) clearInterval(timer); return; }
      var s = Math.floor(left / 1000);
      out.d.textContent = Math.floor(s / 86400);
      out.h.textContent = pad(Math.floor(s / 3600) % 24);
      out.m.textContent = pad(Math.floor(s / 60) % 60);
      out.s.textContent = pad(s % 60);
    }
    tick();
    timer = setInterval(tick, 1000);
  })();
'''

JS_ANCHOR = '  })();\n</script>\n<!-- ============ COOKIE NOTICE ============ -->'

WA_ICON = ('<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'
           '<path d="M17.6 14.2c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-.9-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.4.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.6-.4z"/>'
           '<path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4h.1c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 21.5c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.4 0-5.5 4.5-9.9 9.9-9.9 2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.4 2.9 7-.1 5.5-4.5 10-9.9 10z"/></svg>')


def hero_offer(wa_text, eyebrow, h1_top, h1_em, lead, bullets, secondary, note='',
               countdown=None):
    """Hero clasic (video pe fundal) — pentru paginile de ofertă."""
    lis = '\n'.join('      <li>%s</li>' % b for b in bullets)
    note_html = '\n    <p class="hero-note">%s</p>\n' % note if note else ''
    if countdown:
        note_html += '''
    <div class="hero-countdown" data-deadline="%s">
      <span class="hero-countdown__label">%s</span>
      <div class="hero-countdown__boxes">
        <span class="cd-box"><b data-cd="d">--</b><i>zile</i></span>
        <span class="cd-box"><b data-cd="h">--</b><i>ore</i></span>
        <span class="cd-box"><b data-cd="m">--</b><i>min</i></span>
        <span class="cd-box"><b data-cd="s">--</b><i>sec</i></span>
      </div>
    </div>
''' % (countdown['deadline'], countdown['label'])
    return '''<!-- ============ HERO ============ -->
<section class="hero hero--offer">
  <div class="hero-media" aria-hidden="true">
    <video
      id="heroVideo"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="Creatives/hero-optima-poster.jpg"
      disablepictureinpicture
    >
      <source src="Creatives/hero-optima-720.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="container hero-inner">
    <span class="label-gold hero-eyebrow">%s</span>
    <h1 class="display">
      %s
      <em>%s</em>
    </h1>
    <p class="lead">
      %s
    </p>
    <div class="cta-row">
      <a class="btn btn-teal" href="https://wa.me/40767702703?text=%s" target="_blank" rel="noopener">
        %s
        Scrie-ne pe WhatsApp
      </a>
      <a class="btn btn-secondary" href="#programare-video">%s</a>
    </div>
%s
    <ul class="feature-bullets">
%s
    </ul>
  </div>
</section>
''' % (eyebrow, h1_top, h1_em, lead, wa_text, WA_ICON, secondary, note_html, lis)


def hero_problem(wa_text, eyebrow, h1_top, h1_em, lead, bullets, photo, photo_alt,
                 caption, photo_fallback, secondary='Cere o programare'):
    """Hero „problemă": copy + poză sugestivă, fără video."""
    lis = '\n'.join('        <li>%s</li>' % b for b in bullets)
    return '''<!-- ============ HERO ============ -->
<section class="hero hero--problem">
  <div class="container hero-inner">
    <div class="hero-copy">
      <span class="label-gold">%s</span>
      <h1 class="display">
        %s
        <em>%s</em>
      </h1>
      <p class="lead">
        %s
      </p>
    </div>

    <figure class="hero-photo">
      <img
        src="%s"
        alt="%s"
        fetchpriority="high"
        decoding="async"
        onerror="this.onerror=null;this.src='%s';"
      />
      <figcaption>%s</figcaption>
    </figure>

    <div class="hero-actions">
      <div class="cta-row">
        <a class="btn btn-teal" href="https://wa.me/40767702703?text=%s" target="_blank" rel="noopener">
          %s
          Scrie-ne pe WhatsApp
        </a>
        <a class="btn btn-secondary" href="#programare-video">%s</a>
      </div>

      <ul class="feature-bullets">
%s
      </ul>
    </div>
  </div>
</section>
''' % (eyebrow, h1_top, h1_em, lead,
       photo, photo_alt, photo_fallback, caption,
       wa_text, WA_ICON, secondary, lis)


# --------------------------------------------------------------------------
# Variantele
# --------------------------------------------------------------------------

VARIANTS = [
    {
        'slug': 'oferta-299',
        'title': 'Consultație + igienizare sau obturație — 299 lei | Optima Dental Clinic',
        'description': ('Consultație de specialitate plus igienizare profesională '
                        '(detartraj, periaj, Airflow) sau obturație, la 299 lei. '
                        'Preț total, fără costuri ascunse. Optima Dental Clinic, București.'),
        'move_vouchers_after_hero': True,
        'active_voucher': 'igienizare',
        'extra_css': OFFER_CSS,
        'hero': hero_offer(
            wa_text=('Bun%C4%83%20ziua%2C%20a%C8%99%20dori%20voucherul%20de%20299%20lei'
                     '%20(consulta%C8%9Bie%20%2B%20igienizare%2Fobtura%C8%9Bie).'),
            eyebrow='Ofertă valabilă doar în luna august',
            h1_top='Consultație de specialitate + igienizare sau obturație',
            h1_em='doar 299 lei',
            lead=('Un singur preț, totul inclus: consultația la medicul specialist și, la '
                  'alegerea ta, igienizarea profesională completă — detartraj, periaj și '
                  'Airflow — sau obturația care îți repară dintele afectat.'),
            bullets=['Consultație completă la specialist',
                     'Detartraj + periaj + Airflow',
                     'Preț total — include toate costurile'],
            secondary='Rezervă voucherul',
            # ora României în august e UTC+3 (EEST)
            countdown={'deadline': '2026-08-31T23:59:59+03:00',
                       'label': 'Rezervi voucherul până pe 31 august'},
        ),
        'extra_js': COUNTDOWN_JS,
    },
    {
        'slug': 'gingii-care-sangereaza',
        'title': 'Îți sângerează gingiile? Consultație parodontală | Optima Dental Clinic',
        'description': ('Sângerarea gingiilor la periaj este primul semn de inflamație. '
                        'Consultație parodontală și igienizare profesională la Optima '
                        'Dental Clinic București — depistăm și tratăm cauza din prima vizită.'),
        'move_vouchers_after_hero': False,
        'active_voucher': 'igienizare',
        'extra_css': PROBLEM_CSS,
        'drop_hero_preload': True,
        'hero': hero_problem(
            wa_text=('Bun%C4%83%20ziua%2C%20%C3%AEmi%20sangereaz%C4%83%20gingiile%20'
                     '%C8%99i%20a%C8%99%20dori%20o%20consulta%C8%9Bie.'),
            eyebrow='Gingii care sângerează',
            h1_top='Îți sângerează gingiile când te speli pe dinți?',
            h1_em='Nu e normal — dar se tratează',
            lead=('Sângerarea la periaj este primul semn că gingia este inflamată. '
                  'Depistată devreme, se rezolvă de cele mai multe ori într-o singură '
                  'ședință de igienizare profesională. Lăsată ani la rând, inflamația '
                  'atacă osul care ține dinții — apar retracția gingivală, mobilitatea '
                  'și, în final, pierderea dintelui.'),
            bullets=['Consultație parodontală completă',
                     'Detartraj + periaj + Airflow',
                     'Plan de tratament personalizat'],
            photo='/assets/problema-gingii-sangereaza.jpg',
            photo_alt=('Consultație parodontală pentru gingii care sângerează la '
                       'Optima Dental Clinic'),
            caption='Evaluăm cauza sângerării încă din prima consultație.',
            photo_fallback='/assets/optima-interior3.webp',
        ),
    },
]


def build(base, v):
    s = base

    # 1) Voucherele: opțional mutate imediat sub hero.
    vouchers = ''
    if v.get('move_vouchers_after_hero'):
        m = VOUCHERS_RE.search(s)
        assert m, (v['slug'], 'nu am găsit secțiunea VOUCHERS')
        vouchers = m.group(0)
        s = s[:m.start()] + s[m.end():]
        # secțiunea lăsa în urmă un rând gol în plus
        s = s.replace('\n\n\n<!-- ============ PLATĂ ÎN RATE', '\n\n<!-- ============ PLATĂ ÎN RATE', 1)

    # 2) Hero-ul propriu (+ voucherele, dacă le mutăm).
    assert HERO_RE.search(s), (v['slug'], 'nu am găsit secțiunea HERO')
    new_hero = v['hero'] + ('\n' + vouchers if vouchers else '')
    s = HERO_RE.sub(lambda _: new_hero, s, count=1)

    # 3) Head: title + description (+ preload-ul posterului, inutil fără video).
    s = re.sub(r'<title>.*?</title>', '<title>%s</title>' % v['title'], s, count=1)
    s = re.sub(r'<meta name="description" content=".*?" />',
               '<meta name="description" content="%s" />' % v['description'], s, count=1, flags=re.S)
    if v.get('drop_hero_preload'):
        s = s.replace(
            '<!-- hero paints instantly from the poster while the video buffers -->\n'
            '<link rel="preload" as="image" href="Creatives/hero-optima-poster.jpg" fetchpriority="high" />\n',
            '', 1)

    # 4) Voucherul relevant, deschis by default.
    av = v.get('active_voucher')
    if av and av != 'albire':
        s = s.replace('<button class="voucher-tab-btn is-active" data-tab="albire"',
                      '<button class="voucher-tab-btn" data-tab="albire"', 1)
        s = s.replace('<button class="voucher-tab-btn" data-tab="%s"' % av,
                      '<button class="voucher-tab-btn is-active" data-tab="%s"' % av, 1)
        s = s.replace('<div class="voucher-panel is-active" id="tab-albire">',
                      '<div class="voucher-panel" id="tab-albire">', 1)
        s = s.replace('<div class="voucher-panel" id="tab-%s">' % av,
                      '<div class="voucher-panel is-active" id="tab-%s">' % av, 1)
        assert s.count('voucher-tab-btn is-active') == 1, (v['slug'], 'tab activ')
        assert s.count('voucher-panel is-active') == 1, (v['slug'], 'panel activ')

    # 5) CSS-ul propriu hero-ului variantei.
    if v.get('extra_css'):
        assert s.count(CSS_ANCHOR) == 1, (v['slug'], 'ancoră CSS')
        s = s.replace(CSS_ANCHOR, v['extra_css'] + CSS_ANCHOR, 1)

    # 5b) JS propriu variantei, la finalul scriptului principal.
    if v.get('extra_js'):
        assert s.count(JS_ANCHOR) == 1, (v['slug'], 'ancoră JS')
        s = s.replace(JS_ANCHOR, '  })();\n' + v['extra_js'] + JS_ANCHOR[len('  })();\n'):], 1)

    # 6) Sursa lead-ului nu se mai rescrie aici: formularul o deduce singur din
    #    `location.pathname` la trimitere, deci fiecare pagină se identifică
    #    fără configurare — inclusiv paginile scrise de mână, nu doar acestea.
    assert 'PAGE_LABEL' in s, (v['slug'], 'lipseşte deducerea paginii din pagina de bază')

    # 7) Asset-urile sunt cele ale paginii de bază (ca la varianta Google).
    s = s.replace(CREATIVES_FROM, CREATIVES_TO)
    assert CREATIVES_FROM not in s, (v['slug'], 'căi Creatives relative rămase')

    out_dir = os.path.join(PUBLIC, v['slug'])
    os.makedirs(out_dir, exist_ok=True)
    out = os.path.join(out_dir, 'index.html')
    with open(out, 'w', encoding='utf-8') as fh:
        fh.write(s)
    return out, len(s)


def main():
    with open(BASE, encoding='utf-8') as fh:
        base = fh.read()
    for v in VARIANTS:
        out, n = build(base, v)
        print('OK  /%s/  (%d KB)' % (v['slug'], n // 1024))


if __name__ == '__main__':
    main()
