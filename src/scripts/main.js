console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { createCorn } from './seeds/corn.js';
import { createAsparagus } from "./seeds/asparagus.js";
import { addPlant } from './field.js';
import { usePlants } from'./field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { catalog, catalogTable } from './catalog.js';


const yearlyPlan=createPlan();

const planted = plantSeeds(yearlyPlan);
const plantedField = usePlants();

const harvest = harvestPlants(plantedField);

catalog(harvest);
catalogTable(harvest)

