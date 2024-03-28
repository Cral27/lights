import { useState } from 'react'
import Light from './assets/img/light-bulb.png'
import lightOff from './assets/img/light-bulb-dark.png'
import './App.css';
import jumpscare from './assets/vid/jumpscare2.mp4'

function App() {
	const [light, setLight] = useState(false);
	const [count, setCount] = useState(0);

	const lights = () => {
		const button = document.getElementById('button');
		const div = document.getElementById('bg');

		
		button.addEventListener('click', () => {
			if(count === 7){
				div.innerHTML = `<video autoplay><source src="${jumpscare}" type="video/mp4" /></video>`;
			}else{
				if(light){
					setLight(false)
					button.innerHTML = 'Off'
					button.style.backgroundColor = 'red';
					button.style.color = 'white';
					div.style.backgroundColor = 'white';
					setCount(count + 1);
				}else{
					setLight(true)
					button.innerHTML = 'On'
					button.style.backgroundColor = 'green';
					button.style.color = 'white';
					div.style.backgroundColor = 'black';
					setCount(count + 1);
				}
			}
		})

	}

	return (
		<div id='bg'>
			{light ? (
				<img src={Light} />
			) : (
				<img src={lightOff} />
			)}
			<button onClick={lights} id='button'>Off</button>
		</div>
	)
}

export default App
