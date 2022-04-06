import SVG from './svg';
import URLS from './urls';
import ROUTES from './routes';


const CONSTANTS = {
  ROUTES,
  SVG,
  URLS,
  ...ROUTES,
  ...SVG,
  ...URLS
};

export default CONSTANTS;