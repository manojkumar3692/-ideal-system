import React,{PureComponent} from "react";
import MusicDirectoryAPIservice from "../../network/MusicDirectoryAPIservice";
import "./musicDirectory.scss";
class MusicDirectory extends PureComponent {
	constructor(props) {
		super(props);
		this.allUsers = this.allUsers.bind(this);
		this.state = {};
		this.state.userDetails = [];
		this.state.UserDetailsFilter = [];
		this.state.inputvalue = '';
		this.state.loader = true;
	}

	componentWillMount() {
		this.allUsers()
	}

	allUsers() {
		this.state.loader = true;
		MusicDirectoryAPIservice.getUsers()
			.then((res) => {
				let data = res.map((item) => {
					return item.username
				});
				this.setState({userDetails:res,UserDetailsFilter:data,loader:false})
			})
			.catch((err) => {
				alert(err)
			})
	}

	usernameFilter(event) {
		let queryText = event.target.value;
		let filterData = this.state.userDetails;
		let finalData = filterData.filter((item) => {
			return item.username.toLowerCase().indexOf(queryText.toLowerCase()) >= 0
		}).map((item) => {
			return item.username
		}).sort((a, b) => a < b ? -1 : 1);
		this.setState({UserDetailsFilter:finalData})
	}

	resetFilter() {
		let data = this.state.userDetails.map((item) => {return item.username});
		this.setState({UserDetailsFilter:data});
	}

	goToPlaylist() {
		this.props.history.push('/playlist');
	}

	render () {
		const userDetails = this.state.UserDetailsFilter;
		const loader = this.state.loader;
		return (
			<section className="brandlab">
				<div className="brandlab__heading">
					<div>
						<ul>
							<li><img src={require("../../assets/images/bandlab-logotype-white-0480850d10.svg")} /></li>
						</ul>
					</div>
				</div>
				<div className="brandlab__banner">
				</div>
				<div className="brandlab__container">
				{
					loader ? <div className="brandlab__container--loader"><h1>Loading Please wait ...</h1></div> : <div className="brandlab__container--details">
						<input style={{height:'30px',fontSize:'14px',width:'300px'}}  onChange={this.usernameFilter.bind(this)} type="text" placeholder="Filter By Username"/>
						<p style={{fontSize:'12px',margin:'0px',padding:'0px'}}>* All filter are alphabetically organized</p>
						<ul>

							{
								userDetails.map((each,index) => {
									return (
										<li key={'key'+ index}>{each}</li>
									)
								})
							}
						</ul>
						<div className="brandlab__container--action">
						<button style={{backgroundColor:'#0097a7',color:'#fff',outline:'none',height:'35px',width:'120px',cursor:'pointer',marginRight:'20px',textTransform:'upperCase',border:'none'}} onClick={this.resetFilter.bind(this)}>Reset</button>
						<button style={{backgroundColor:'#0097a7',color:'#fff',outline:'none',height:'35px',width:'120px',cursor:'pointer',textTransform:'upperCase',border:'none'}} onClick={this.goToPlaylist.bind(this)}>Go to Playlist</button>
						</div>
						</div>
				}
				</div>

			</section>
		)
	}
}

export default MusicDirectory