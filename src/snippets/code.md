Technical Interview Guide

HTML ----------------------------------------------------------------

1.	Semantics 
A semantic - elements with clear descriptions of the tags for the content inside, and enhance Search Engine Optimization (SEO) 
Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.
Examples of semantic elements:  <header>,  <form>, <table>, and <article> - Clearly defines its content.
2.	What is markup?
3.	Input Types – 
 Text, number, dates, checkbox, button, password, email etc..

CSS----------------------------------------------------------------------

1.	Psedu class
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
:before 
:after


JS--------------------------------------------------------------------

1.	Functions Types -
Function Declaration – it is hoisted, you can call even before you define 
Expression
Arrow
Immediate invoke
2.	Array Methods
Foreach(), map(), filter(), .reduce() .flat() includes() .sort() .spit() .join()

3.	Remove duplicates - use  new Set() or foreach and includes
4.	Sum all numbers in an array –  reduce() or  for loop
5.	Closure – access outside scope variables and remember to memory from outer function the inside function
6.	This keyword – it refers to an object which function or object belongs to

7.	Bind, call and apply and their differences
Bind – does not call function immediately
Call – explicit binding

Apply – arguments in an array
8.	Promise – is an asynchronous operation with 3 states of pending, fulfilled and reject
9.	Http request –POST, GET, DELETE, PUT – 
use to communicate to the backend Api request the data
Put - when we want to update
10.	Event Bubbling, stop, propagation
11.	DOM manipulation 
12.	OBJECTS – copy by reference and primitive types copy by value
13.	OBJECTS – clone by spread or object.assign
14. OBJECT shallow copy and deep copy
14. class
15. constructor function

REACT-------------------------------------------------------------------

1.	The virtual DOM - in React serves as a copy of the actual DOM. When the state changes, it updates only the elements affected by the change, and syncs with the “real” DOM, preventing unnecessary rendering to the real DOM.
2.	. State - is a Javascript variable that when its value updates will trigger a re-render  to your react application

3.	Hooks- declare always on the top of the component
useState –
useEffect -   Similar to componentDidMount and componentDidUpdate componentWillUnmount:
useRef - is a React Hook that lets you reference to the DOM element in the functional component
use context
useReducer
use callback
useMemo

4.	State management

	Redux and Context API – resolve props drilling issue
	ContextApi - is built in it react

Redux and Context API – resolve props drilling issue
ContextApi - is built in it react

5. Custom Hook - {}curly bracket  []angle bracket you can renew 
6. Design Pattern – MVC Model View Control
7. React lifecycle methods and when do we use each - componentdidMount, componentdidUpdate, componentdidUnomount, error

8. What do we use in functional components for lifecycle methods – use usesate
9. What is portals – when you want to add outside root element
10. Tell me 5 ways to optimize react app =  
usememo - memoise object refence, 
usecallback  -function reference memoioze,
 lazy loading

11. Refs – create a reference to get the dom node of the element
12. What is React Fragments – help return multiple elements that without adding extra nodes in the dom
13. Why do we use key when we map an array. 
Key help react to track the list and update only the changes, It helps to avoid re-render 
14.  Can we use index of array as a key 
Not encourage

Typescript 
What is the difference between type and interface 
15. difference between stoppropagation and preventdefault
prevenrdefault prevent the submission default behavior
16. It was converting an array to object

