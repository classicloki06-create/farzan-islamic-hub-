/**
 * footer.js — Site footer component
 */

export function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <a href="index.html" class="footer__logo">
              <span class="nav__logo-mark">م</span>
              <span>Meezan<em>Journal</em></span>
            </a>
            <p class="footer__tagline">Illuminating Islamic finance through scholarly rigour, accessible writing, and intellectual honesty.</p>
            <p class="footer__disclaimer">This publication is for educational purposes only. Nothing herein constitutes a personal fatwa or financial advice. Consult a qualified scholar for your individual situation.</p>
          </div>

          <div class="footer__nav">
            <h4 class="footer__heading">Topics</h4>
            <ul>
              <li><a href="index.html?category=banking">Islamic Banking</a></li>
              <li><a href="index.html?category=investing">Halal Investing</a></li>
              <li><a href="index.html?category=fintech">FinTech & Crypto</a></li>
              <li><a href="index.html?category=insurance">Takaful</a></li>
              <li><a href="index.html?category=realestate">Real Estate</a></li>
              <li><a href="index.html?category=economy">Islamic Economy</a></li>
            </ul>
          </div>

          <div class="footer__nav">
            <h4 class="footer__heading">About</h4>
            <ul>
              <li><a href="#">Our Scholars</a></li>
              <li><a href="#">Methodology</a></li>
              <li><a href="#">Write for Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div class="footer__newsletter">
            <h4 class="footer__heading">Stay Informed</h4>
            <p>Weekly insights on Islamic finance, delivered to your inbox.</p>
            <div class="footer__newsletter-form">
              <input type="email" placeholder="your@email.com" class="footer__input" />
              <button class="btn btn--primary btn--sm">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <p>© ${new Date().getFullYear()} MeezanJournal. All rights reserved.</p>
          <p class="footer__arabic">وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ</p>
        </div>
      </div>
    </footer>
  `;
}
