import { getStory } from '@/lib/data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  // Fallback currently defaults to null/undefined if not found
  const storyData = getStory(slug);

  if (!storyData) {
    return new Response('Story not found', { status: 404 });
  }

  const pagesHtml = storyData.pages.map(page => {
    const isTop = page.textPosition === 'top';
    const alignClass = isTop ? 'align-start' : 'align-end';
    const gradientClass = isTop ? 'gradient-top' : 'gradient-bottom';

    let ctaHtml = '';
    if (page.cta) {
      // Using amp-story-page-outlink for the main CTA behavior
      ctaHtml = `
          <amp-story-page-outlink layout="nodisplay" theme="custom">
            <a href="${page.cta.url}">${page.cta.text}</a>
          </amp-story-page-outlink>
        `;
    }

    return `
    <amp-story-page id="${page.id}">
      <amp-story-grid-layer template="fill">
        <amp-img
          src="${page.imageSrc}"
          width="720"
          height="1280"
          layout="responsive"
          alt="${page.title}"
          object-fit="cover"
          animate-in="pan-zoom"
          animate-in-duration="30s"
        ></amp-img>
      </amp-story-grid-layer>
      
      <amp-story-grid-layer template="vertical" class="${alignClass}">
        <div class="content-wrapper ${gradientClass}" animate-in="fly-in-bottom" animate-in-duration="1s" animate-in-delay="0.5s">
            <div class="content-container">
            <h1 class="title">${page.title}</h1>
            <p class="description">${page.description}</p>
            </div>
        </div>
      </amp-story-grid-layer>
      ${ctaHtml}
    </amp-story-page>
  `}).join('');

  const html = `<!doctype html>
<html ⚡ lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${storyData.title}</title>
    <link rel="canonical" href="https://stories.ideiasdecor.com/stories/${slug}" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700&display=swap" rel="stylesheet">

    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
    <script async custom-element="amp-story-auto-ads" src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js"></script>
    
    <style amp-custom>
      body { font-family: 'Outfit', sans-serif; }
      
      .align-end { align-content: end; }
      .align-start { align-content: start; }

      .content-wrapper {
        width: 100%;
        padding: 40px 24px;
      }
      
      .gradient-bottom {
        background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0));
        padding-top: 100px;
      }

      .gradient-top {
        background: linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0));
        padding-bottom: 100px;
      }

      .content-container {
        color: white;
      }

      .title { 
        font-family: 'Outfit', sans-serif;
        font-size: 2.2em; 
        font-weight: 700; 
        margin-bottom: 12px;
        line-height: 1.1;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      }
      
      .description { 
        font-size: 1.1em; 
        line-height: 1.4;
        font-weight: 300;
        opacity: 0.95;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
      }

      /* Custom CTA styling */
      amp-story-page-outlink[theme="custom"] a {
        background-color: #ffffff;
        color: #000000;
        font-family: 'Outfit', sans-serif;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        padding: 16px 32px;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        /* Simple pulse animation using standard CSS properties supported in AMP */
        animation: pulse 2s infinite;
        transform-origin: center;
        text-decoration: none;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(255,255,255,0.4);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
      }
    </style>
  </head>
  <body>
    <amp-story
      standalone=""
      title="${storyData.title}"
      publisher="${storyData.publisher}"
      publisher-logo-src="${storyData.publisherLogoSrc}"
      poster-portrait-src="${storyData.posterPortraitSrc}"
    >
      <amp-story-auto-ads>
        <script type="application/json">
          {
            "ad-attributes": {
              "type": "adsense",
              "data-ad-client": "ca-pub-8839660506637281",
              "data-ad-slot": "7000806351"
            }
          }
        </script>
      </amp-story-auto-ads>
      ${pagesHtml}
    </amp-story>
  </body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
