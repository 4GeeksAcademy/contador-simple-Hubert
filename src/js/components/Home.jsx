import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digito from "./Digito"; 

//create your first component

const Home = ({timer,timer2,timer3,timer4,timer5,timer6,timerImg}) => {

 

	return (
		<div className= "bg-primary">
		<div className="text-center d-flex justify-content-center">
			<Digito id="icono" digito={timerImg}/>
			<Digito digito={timer6}/>
			<Digito digito={timer5}/>
			<Digito digito={timer4}/>
			<Digito digito={timer3}/>
			<Digito digito={timer2}/>
			<Digito digito={timer}/>
		</div>
        </div> 

	);
};

export default Home;