let age = 0
var day = 'date'
document.getElementById('button').addEventListener('click', alarm)

function alarm () {
  age = document.getElementById('age').value
  age = parseInt(age)
  if ((age < 18) && (day !== 'sunday' || day !== 'saturday')) {
    document.getElementById('answer').innerHTML = 'Time for school!'
  } else {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  }
}
