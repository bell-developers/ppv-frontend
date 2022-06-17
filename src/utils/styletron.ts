import { Client, hydrateType, Server } from 'styletron-engine-atomic';

const getHydrateClass = () =>
    document.getElementsByClassName('_styletron_hydrate_') as hydrateType;

export const styletron =
    typeof window === 'undefined'
        ? new Server()
        : new Client({
              hydrate: getHydrateClass(),
          });
