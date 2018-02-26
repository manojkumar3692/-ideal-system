import React,{PureComponent} from "react";
import {Link} from "react-router-dom";
import "./playlist.scss";
class Playlist extends PureComponent {
	constructor(props){
		super(props);
		this.state ={} ;
		this.state.audio = '';
		this.state.message = '';
	}

	selectAudioOne() {
		let url = 'https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg';
		this.setState({audio:url,message:'Now Playing New Wave From BandLab ...'})
	}

	selectAudioTwo() {
		let url = 'https://static.bandlab.com/soundbanks/previews/synth-organ.ogg';
		this.setState({audio:url,message:'Now Playing Synth Organ From BandLab ...'})
	}

	render() {
		return (
			<section className="playlist">
				<div className="brandlab__heading">
					<div>
						<ul>
							<li><Link to="/"><img src={require("../../assets/images/bandlab-logotype-white-0480850d10.svg")} /></Link></li>
						</ul>
					</div>
				</div>
				<div className="playlist__banner">
				</div>
				<h1 style={{fontSize:'24px',fontWeight:'400',}}>Selet you favorite music</h1>
				<div className="playlist__action">
				<button  onClick={this.selectAudioOne.bind(this)}>New Wave</button>
				<button  onClick={this.selectAudioTwo.bind(this)}>Synth Organ</button>
				<div style={{paddingTop:'15px'}}>
				</div>
				<audio ref="audio_tag" src={this.state.audio} controls autoPlay/>
					<h1>{this.state.message}</h1>
				</div>


			</section>
		)
	}
}

export default Playlist