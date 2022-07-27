// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações 
// referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, 
// que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const usersJobInfos = {...user, ...jobInfos};

console.log(usersJobInfos);

//   2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. 
//   Para isso, utilize a desestruturação de objetos em conjunto com template literals.

const { name, age, nationality } = user;
const { profession, squad, squadInitials } = jobInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} engineer and my squad is ${squadInitials}-${squad}`);