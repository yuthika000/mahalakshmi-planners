import { business, reviews } from '../content.js';

function Stars({ rating, label }) {
  const n = Math.max(1, Math.min(5, Math.round(rating || 5)));
  return (
    <div className="review-stars" role="img" aria-label={label(n)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className={i <= n ? 'on' : ''}>
          <path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.6L10 14.7l-5.1 2.7 1-5.6-4.1-4 5.7-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews({ copy, lang }) {
  const shareHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(copy.reviewsShareMessage)}`;

  return (
    <section className="section reviews" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">{copy.reviewsTitle}</h2>
          <p>{reviews.length ? copy.reviewsText : copy.reviewsEmpty}</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <figure className="review" key={`${r.name}-${i}`}>
              <Stars rating={r.rating} label={copy.reviewsStars} />
              <blockquote>
                <p>{(lang === 'ta' && r.ta) || r.en}</p>
              </blockquote>
              <figcaption>
                <span className="review-name">{r.name}</span>
                {(r.place || r.service) && (
                  <span className="review-meta">{[r.place, r.service].filter(Boolean).join(' · ')}</span>
                )}
              </figcaption>
            </figure>
          ))}

          <div className="review review-share">
            <h3>{copy.reviewsShareTitle}</h3>
            <p>{copy.reviewsShareText}</p>
            <div className="review-actions">
              <a className="btn btn-brass btn-small" href={shareHref} target="_blank" rel="noreferrer">
                {copy.reviewsShareCta}
              </a>
              {business.googleReviewsUrl && (
                <a className="btn btn-glass btn-small" href={business.googleReviewsUrl} target="_blank" rel="noreferrer">
                  {copy.reviewsGoogle}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
