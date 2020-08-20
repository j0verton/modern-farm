console.log("Welcome to the main module")

import {createPlan} from './plan.js'
const yearlyPlan=createPlan();
// console.log(createPlan);

import { createCorn } from './seeds/corn.js';
const cornSeed = createCorn();
console.log(cornSeed)

import { createAsparagus } from "./seeds/asparagus.js";
import { addPlant } from './field.js';
import {usePlants} from'./field.js';


const asparagusSeed = createAsparagus();

addPlant(asparagusSeed);
addPlant (cornSeed)

const newPlants = usePlants();
console.log(newPlants);
