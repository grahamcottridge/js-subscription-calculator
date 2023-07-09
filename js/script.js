// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubsciptionDiv();
  // console.log(subType);
})

subDurationElement.addEventListener("change", function (e) {
  subDuration = e.target.value;
  updateSubsciptionDiv();
  // console.log(subDuration);
})

updateSubsciptionDiv = function () {
  monthlyCost = 5
  if (subType === "standard") {
    monthlyCost = 7
  } else if (subType === "premium") {
    monthlyCost = 10
  }
  total = subDuration * monthlyCost
  result.innerText = `You have chosen ${subDuration} month ${subType} plan for $${total}`
}

