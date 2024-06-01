
// Object with different values of friction_coefficients 
let friction_coefficients = {
    "Aluminum-Aluminum" : "1.4",
    "Aluminum-Mild Steel" :  '0.47',
    "Brass-Steel" : '0.44',
    "Brass-Cast Iron" : '0.3',
    "Brass-Ice": '0.02',
    "Bronze-Cast Iron" : '0.22',
    "Cadmium-Mild Steel" : '0.46',
    "Cast Iron-Cast Iron" : '0.15',
    "Cast Iron-Oak" : '0.49',
    "Cast iron-Steel" : '0.23',
    "Copper-Cast Iron" : '0.29',
    "Copper-Steel" : '0.36',
    "Garnet-Steel" : '0.39',
    "Glass-Glass" : '0.4',
    "Ice-Ice" : '0.02',
    "Lead-Cast Iron" : '0.43',
    "Leather-Cast Iron" : '0.56',
    "Magnesium-Steel" : '0.42',
    "Nickel-Nickel" : '0.64',
    "Nickel-Mild Stee '" :'0.23',
    "Rubber-Dry Asphalt" : '0.5',
    "Rubber-Wet Asphalt" : '0.25',
    "Rubber-Dry Concrete" : '0.6',
    "Rubber-Wet Concrete" : '0.45',
    "Steel-Steel" : '0.42',
    "Tin-Cast Iron" : '0.32',
    "Zinc-Cast Iron" : '0.21'

}

function populateFrictionSelect() {
const selectElement = document.getElementById("friction_select");

for (const key in friction_coefficients) {
    if (friction_coefficients.hasOwnProperty(key)) {
        const option = document.createElement("option");
        option.value = key;
        option.text = key;
        selectElement.appendChild(option);
    }
}
}
window.onload = populateFrictionSelect;



// Calculate the velocity by taking the position and time
function calculate_velocity(){
    let position = parseFloat(document.getElementById('position').value);
    let time = parseFloat(document.getElementById('time').value);
    let velocity = `${(position / time).toFixed(2)} m/s`;
    document.getElementById('velocity').value = velocity;
}
document.getElementById('calculate_velocity').addEventListener('click', calculate_velocity);

// Calculates the position taking the time, acceleration, position and initial velocity as parameters.    
function calculate_position(){
let initial_position = parseFloat(document.getElementById('initial_position').value);
let initial_velocity = parseFloat(document.getElementById('initial_velocity').value);
let time = parseFloat(document.getElementById('time2').value);
let acceleration = parseFloat(document.getElementById('acceleration').value);

let  position = initial_position + initial_velocity * time + acceleration * time * time / 2
document.getElementById('calculate_position').value = `${position.toFixed(2)} meters`
}
document.getElementById('calculatePosition').addEventListener('click', calculate_position);

//Calculate the final velocity taking time, acceleration, and initial velocity as parameters.
function calculate_final_velocity() {
let acceleration = parseFloat(document.getElementById('acceleration3').value);
let time = parseFloat(document.getElementById('time3').value);
let velocity = parseFloat(document.getElementById('velocity3').value);
let final_velocity = velocity + acceleration * time;
document.getElementById('calculate_final_velocity').value = `${final_velocity.toFixed(2)} m/s`
}
document.getElementById('calculateFinalVelocity').addEventListener('click', calculate_final_velocity);

// Calculate the final velocity taking the position as a parameter this time. 
function calculate_final_velocityp() {
let acceleration = parseFloat(document.getElementById('acceleration4').value);
let position = parseFloat(document.getElementById('position4').value);
let velocity = parseFloat(document.getElementById('velocity4').value);
let final_velocity = Math.sqrt(velocity * velocity + 2 * acceleration * position);
document.getElementById('calculate_final_velocityp').value = `${final_velocity.toFixed(2)} m/s`
}
document.getElementById('finalVelocityP').addEventListener('click', calculate_final_velocityp);

// Calculates the force taking mass and acceleration as parameters.
function calculate_force() {
let acceleration = parseFloat(document.getElementById('acceleration5').value);
let mass = parseFloat(document.getElementById('mass').value);
let force = mass * acceleration
document.getElementById('calculate_force').value = `${force.toFixed(2)} Newtons`
}
document.getElementById('calculateForce').addEventListener('click', calculate_force);

//  Calculates the normal force taking mass, gravity, and the angle of inclination as parameters.
function calculate_normal(gravity = 9.8 , angle = 0) {
let gravityInput= parseFloat(document.getElementById('gravity').value);
let angleInput = parseFloat(document.getElementById('angle').value);
let mass = parseFloat(document.getElementById('mass2').value);

let gravityValue = gravityInput || gravity;
let angleValue = angleInput || angle;

let normal_force = mass * gravityInput * Math.cos( angleInput* (Math.PI / 180))
document.getElementById('calculate_normal').value = `${normal_force.toFixed(2)} Newtons`
}
document.getElementById('calculateNormal').addEventListener('click', calculate_normal);

// Calculates the friction force taking the coefficient of friction and the normal force as parameters.
function calculate_friction() {
let friction = document.getElementById('friction_select').value
let nforce = parseFloat(document.getElementById('nforce').value);
let valuefriction = parseFloat(friction_coefficients[friction]);


let friction_force = valuefriction * nforce
// document.getElementById('friction_force').value = `${friction_force.toFixed(2)} Newtons`
document.getElementById('friction_force').value = valuefriction
}
document.getElementById('frictionForce').addEventListener('click', calculate_friction);


// Calculate the kinetic force taking mass and velocity as parameters.
function calculate_kinetic() {
let velocity = parseFloat(document.getElementById('velocity8').value);
let mass = parseFloat(document.getElementById('mass4').value);
let kinetic_energy = mass * velocity * velocity / 2
document.getElementById('kinetic_energy').value = kinetic_energy.toFixed(2)
}
document.getElementById('kineticEnergy').addEventListener('click', calculate_kinetic);



