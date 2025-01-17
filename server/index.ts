import * as alt from 'alt-server';
import { PluginSystem } from '../../../server/systems/plugins';
import { config } from '../shared/config';

import './src/events';

PluginSystem.registerPlugin(config.name, () => {
    alt.log(`~lg~[PLUGIN] ==> ${config.name} has been loaded!`);
});