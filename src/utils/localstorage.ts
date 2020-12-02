import store from 'store2';

import registerAsGlobal from 'utils/register-as-global';

/* TODO: migrate to 'bz-ti' namespace */
const storeAdapter = store.namespace('bz_cpt');

export default registerAsGlobal('LS', storeAdapter);
