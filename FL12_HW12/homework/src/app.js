const zero = 0;
const rootNode = document.getElementById('root');

const buttonStart = document.createElement('button');
const text = document.createTextNode('Add new');
buttonStart.appendChild(text);
buttonStart.classList.add('button');
rootNode.appendChild(buttonStart);

window.addEventListener('hashchange', function(e) {
	if(e.newURL.includes('#/add')){
		divWrap.classList.remove('hide');
	}
});


const divWrap = document.createElement('div');
const buttonSave = document.createElement('button');
const buttonCancel = document.createElement('button');
const buttonAddTerms = document.createElement('button');

const textBtn1 = document.createTextNode('Save changes');
const textBtn2 = document.createTextNode('Cancel');
const textAddTerms = document.createTextNode('Add terms');
buttonSave.appendChild(textBtn1);
buttonCancel.appendChild(textBtn2);
buttonAddTerms.appendChild(textAddTerms);
rootNode.appendChild(divWrap);
divWrap.appendChild(buttonSave);
divWrap.appendChild(buttonCancel);
divWrap.appendChild(buttonAddTerms);

const label = document.createElement('label');
const textLabel = document.createTextNode('Name');
label.appendChild(textLabel);
const input = document.createElement('input');
input.setAttribute('required', 'required');
input.setAttribute('id', 'js-name');
divWrap.appendChild(label);
divWrap.appendChild(input);
divWrap.classList.add('hide');


buttonStart.addEventListener('click', function() {
	location.hash = '#/add';
	divWrap.classList.remove('hide');
});

buttonAddTerms.addEventListener('click', function() {
	const divTerm = document.createElement('div');
	const label1 = document.createElement('label');
	const textLabel1 = document.createTextNode('Term');
	label1.appendChild(textLabel1);

	const label2 = document.createElement('label');
	const textLabel2 = document.createTextNode('Definition');
	label2.appendChild(textLabel2);

	const input1 = document.createElement('input');
	input1.setAttribute('required', 'required');

	const input2 = document.createElement('input');
	input2.setAttribute('required', 'required');

	const remove = document.createElement('button');
	const textRemove = document.createTextNode('Remove');
	remove.appendChild(textRemove);

	divTerm.appendChild(label1);
	divTerm.appendChild(input1);
	divTerm.appendChild(label2);
	divTerm.appendChild(input2);
	divTerm.classList.add('term-item');
	divTerm.appendChild(remove);
	divWrap.appendChild(divTerm);
});

let sets = [];

buttonSave.addEventListener('click', function() {
	location.hash = '';
	if(document.getElementById('js-name').value === ''){
		document.getElementById('js-name').setAttribute('style','border-color: red');
	} else {
		divWrap.classList.add('hide');
		let terms = document.querySelectorAll('.term-item');
		let setToAdd = {};
		let massive = [];
		for(let i = zero; i < terms.length; i++){
			let objectOfTerm = {};
			let termText = terms[i].getElementsByTagName('input')[zero].value;
			objectOfTerm.term = termText;
			let definitionText = terms[i].getElementsByTagName('input')[1].value;
			objectOfTerm.definition = definitionText;
			massive.push(objectOfTerm);
			terms[i].remove();
		}
		setToAdd.name = document.getElementById('js-name').value;
		setToAdd.terms = massive;
		sets.push(setToAdd);

		localStorage.setItem('sets', JSON.stringify(sets));
		document.getElementById('js-name').value = '';

	}
	showSets();
	
});

buttonCancel.addEventListener('click', function() {
	location.hash = '';	
	divWrap.classList.add('hide');
	const resultDiv = document.createElement('div');
	showSets();

});

function showSets(){
	const resultDiv = document.createElement('div');
	for(let i = zero; i < JSON.parse(localStorage.getItem('sets')).length; i++){
		const itemSet = document.createElement('div');
		let itemS = JSON.parse(localStorage.getItem('sets'));
		const textSet = document.createTextNode(JSON.stringify(itemS[i]));
		itemSet.appendChild(textSet);
		resultDiv.appendChild(itemSet);
	}
	rootNode.appendChild(resultDiv);
}