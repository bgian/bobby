import { injectGlobal } from 'styled-components';
import GTAmericaRegular from './fonts/gt-america/GT-America-Regular.woff';
import GTAmericaMedium from './fonts/gt-america/GT-America-Medium.woff';
import GTAmericaBold from './fonts/gt-america/GT-America-Bold.woff';
import GTAmericaExtra from './fonts/gt-america/GT-America-Extended-Black.woff';

injectGlobal`
  @font-face{
    font-family: 'gt-america';
    src: url(${GTAmericaRegular}) format('woff');
    font-style: normal;
    font-weight: normal;
  }

  @font-face{
    font-family: 'gt-america';
    src: url(${GTAmericaMedium}) format('woff');
    font-style: normal;
    font-weight: 500;
  }

  @font-face{
    font-family: 'gt-america';
    src: url(${GTAmericaBold}) format('woff');
    font-style: normal;
    font-weight: 600;
  }

  @font-face{
    font-family: 'gt-america';
    src: url(${GTAmericaExtra}) format('woff');
    font-style: normal;
    font-weight: 800;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'gt-america', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .animation-delay-1 {
    animation-delay: .7s;
  }

  .animation-delay-0 {
    animation-delay: .2s;
  }

  .animation-fadeInUp {
    opacity: 0;
    -webkit-backface-visibility: hidden;
    animation-name: fadeInUp;
    animation-duration: .5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  .animation-fadeInDown {
    opacity: 0;
    -webkit-backface-visibility: hidden;
    animation-name: fadeInDown;
    animation-duration: .5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
