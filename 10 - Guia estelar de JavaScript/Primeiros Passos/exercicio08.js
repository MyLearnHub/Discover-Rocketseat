let students = []

let student = {
    name: 'Paulo',
    age: 19,
    weight: 89.9,
    stars: 4.9,
    isSubscribed: true
}

students = [student]

// Crie um novo student e coloque na posição 1 do Array students
let student02 = {
    name: 'Ruan',
    age: 19,
    weight: 69.3,
    stars: 4.7,
    isSubscribed: false
}

students[1] = student02

console.log(students[1])