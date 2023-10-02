
import { fn1 as script2Fn2, fn2, fn3 } from './script2.js';
import personObj2, { fn1 as script3Fn1} from './script3.js'

console.log('Script 1');
const fn1 = () => {
  console.log('Fn1 script1');
}

fn1();

// Import  script 2 
script2Fn2();
fn2();
fn3();

// Import script3 
console.log(personObj2);
script3Fn1();