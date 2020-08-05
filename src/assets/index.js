import immutrack500png from './immutrack-500px.png';
import immutrack500webp from './immutrack-500px.webp';
import immutrack800png from './immutrack-800px.png';
import immutrack800webp from './immutrack-800px.webp';
import immutrack1200png from './immutrack-1200px.png';
import immutrack1200webp from './immutrack-1200px.webp';
import inquiry500png from './inquiry-500px.png';
import inquiry500webp from './inquiry-500px.webp';
import inquiry800png from './inquiry-800px.png';
import inquiry800webp from './inquiry-800px.webp';
import inquiry1200png from './inquiry-1200px.png';
import inquiry1200webp from './inquiry-1200px.webp';
import souperStocker500png from './souper-stocker-500px.png';
import souperStocker500webp from './souper-stocker-500px.webp';
import souperStocker800png from './souper-stocker-800px.png';
import souperStocker800webp from './souper-stocker-800px.webp';
import souperStocker1200png from './souper-stocker-1200px.png';
import souperStocker1200webp from './souper-stocker-1200px.webp';
import tipsease500png from './tipsease-500px.png';
import tipsease500webp from './tipsease-500px.webp';
import tipsease800png from './tipsease-800px.png';
import tipsease800webp from './tipsease-800px.webp';
import tipsease1200png from './tipsease-1200px.png';
import tipsease1200webp from './tipsease-1200px.webp';
import headshot200png from './headshot-200px.png';
import headshot200webp from './headshot-200px.webp';
import headshot400png from './headshot-400px.png';
import headshot400webp from './headshot-400px.webp';
import headshotFullpng from './headshot-full-size.png';
import headshotFullwebp from './headshot-full-size.webp';

export default {
  immutrack: {
    src: immutrack500png,
    pngSrcSet: `
      ${immutrack500png} 500w,
      ${immutrack800png} 800w,
      ${immutrack1200png} 1200w
    `,
    webpSrcSet: `
      ${immutrack500webp} 500w,
      ${immutrack800webp} 800w,
      ${immutrack1200webp} 1200w
    `,
  },
  inquiry: {
    src: inquiry500png,
    pngSrcSet: `
      ${inquiry500png} 500w,
      ${inquiry800png} 800w,
      ${inquiry1200png} 1200w
    `,
    webpSrcSet: `
      ${inquiry500webp} 500w,
      ${inquiry800webp} 800w,
      ${inquiry1200webp} 1200w
    `,
  },
  souperStocker: {
    src: souperStocker500png,
    pngSrcSet: `
      ${souperStocker500png} 500w,
      ${souperStocker800png} 800w,
      ${souperStocker1200png} 1200w
    `,
    webpSrcSet: `
      ${souperStocker500webp} 500w,
      ${souperStocker800webp} 800w,
      ${souperStocker1200webp} 1200w
    `,
  },
  tipsease: {
    src: tipsease500png,
    pngSrcSet: `
      ${tipsease500png} 500w,
      ${tipsease800png} 800w,
      ${tipsease1200png} 1200w
    `,
    webpSrcSet: `
      ${tipsease500webp} 500w,
      ${tipsease800webp} 800w,
      ${tipsease1200webp} 1200w
    `,
  },
  headshot: {
    src: headshot400png,
    pngSrcSet: `
      ${headshot200png} 200w,
      ${headshot400png} 400w,
      ${headshotFullpng} 676w
    `,
    webpSrcSet: `
      ${headshot200webp} 200w,
      ${headshot400webp} 400w,
      ${headshotFullwebp} 676w
    `,
  },
};