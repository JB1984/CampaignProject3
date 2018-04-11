import web3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), '0x55E9cA53aF623a2db4720e6A3090Afbc8B04d18b');

export default instance;