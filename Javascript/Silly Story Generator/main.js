const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", insertX);
    newStory = newStory.replace(":insertx:", insertX);
    newStory = newStory.replace(":inserty:", insertY);
    newStory = newStory.replace(":insertz:", insertZ);

  if(customName.value !== '') {
    let name = customName.value;
    name.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(21.4286) + " stones";
    let temperature =  Math.round(34.4444) + " centigrade";
    weight.replace("94 fahrenheit", weight);
    temperature.replace("300 pounds", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

