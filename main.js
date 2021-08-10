

var quiz=[

{

 questions:['What is the distance between the Eurth and the sun', 'What is the largest mountain chains on Eurth',
 'How write those books the CLAN of the CAVE BEAR' , 'How is the first personns visiting the Moon', 
 'Who are the higtest gool scorers in football history', 'The greatest Men Tennis Players', 
 'The most fames singer in the world', 'Most Influential films of all time', 
 'What is the popular Movies']

},

{
	ansuerQ1={ans1:'149.597.870km', ans2:'92.955.807km', ans3:'130.720.807km', ans4:'180.590.130km'}
	ansuerQ2={ans1:'Himalaya', ans2:'Southen Great Escrpment', ans3:'Andes', ans4:'Rocky Mountains'}
	ansuerQ3={ans1:'JESSIAN BROCKMOLE', ans2:'SEBASTIAN BARRY', ans3:'JEAN M AUEL', ans4:'MARIE BENEDICT'}
	ansuerQ4={ans1:'Sally Ride', ans2:'Yuri Gagarin', ans3:'Neil Armstrong', ans4:'Pete Conrad'}
	ansuerQ5={ans1:'Pele', ans2:'Cristano', ans3:'Missi', ans4:'Romario'}
	ansuerQ6={ans1:'Andre Agassi', ans2:'Bjorn Borg', ans3:'Novak Djokovic', ans4:'Rafael Nadal'}
	ansuerQ7={ans1:'Madona', ans2:'Eminem', ans3:'Beyonce', ans4:'Lady Gaga'}
	ansuerQ8={ans1:'The wizard of Oz', ans2:'Fantasia', ans3:'Casablanca', ans4:'The Birth of a Nation'}
	ansuerQ9={ans1:'Citisent Kane', ans2:'The God father', ans3:'Pulp Fiction', ans4:'Aspace Odyssey'}
},

{

right ansuers:['149.597.870km', 'Andes', 'JESSIAN BROCKMOLE', 'Neil Armstrong', 'Pele', 'Novak Djokovic', 'Eminem', 'The Birth of a Nation', 'The God father']
},
]
var ansuers=['ansuerQ1', 'ansuerQ2', 'ansuerQ3', 'ansuerQ4', 'ansuerQ5', 'ansuerQ6', 'ansuerQ7', 'ansuerQ8', 'ansuerQ9']
var score =0;
function myScore(ansuers){
	for (var i=0; i<ansuers.length; i++) {
     if (ansuers[i] === true){
     	score = score +1;
     }
     return score;
}
}


