import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { handlers } from './handlers';
console.log(handlers);
const server = setupServer(...handlers);
export { server, rest };
