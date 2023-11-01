import '../App.css';
import aniket from '../assets/aniket.jpeg'
import search from '../assets/Search Icon.png';
import rectangle from '../assets/Rectangle 5.png';
import thumb from '../assets/hand.thumbsup 1.png';
import edit from '../assets/pencil.line 1.png';
import user from '../assets/person 1.png';
import back from '../assets/square.and.arrow.up 1.png';
import cross from '../assets/xmark 1.png';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from '../login/Login';



const Home = () => {
    const [profile,setProfile] = useState(false);
    const [post,setPost] = useState(false);
    const [read,setRead] = useState(false);
    
    return (
        <div className="background">
            <div className="nav">
                <div className='opticode'>
                    <h1 style={{ textAlign: "center", color: "white" }}>OptiCode</h1>
                    <p>Blogs</p>
                </div>
                <div className="avatar">
                    <img src={aniket} alt="profile" style={{width:"56px",height:"56px",borderRadius:"56px",border:"1px solid #FFFFFF",marginTop:"10px"}} onClick={() => setProfile(!profile)}/>
                </div>
            </div>
            {profile ? (
                <div className='profile'>
                    <div className="column" >
                        <div className="flex">
                            <img src={edit} alt="" style={{width:"18px",height:"15px",marginTop:"15px",marginLeft:"20px"}}/>
                            <h1 style={{fontSize:"18px", marginLeft:"10px",fontWeight:"400",color:"white"}} onClick={()=>{setPost(!post); setProfile(!profile)}}>Post</h1>
                        </div>
                        <div className="flex">
                            <img src={user} alt="" style={{width:"18px",height:"15px",marginTop:"15px",marginLeft:"20px"}}/>
                            <h1 style={{fontSize:"18px", marginLeft:"10px",fontWeight:"400",color:"white"}}>Profile</h1>
                        </div>
                        <div className="flex" onClick={()=>{ <NavLink to="/"></NavLink>}}>
                            <img src={back} alt="" style={{width:"18px",height:"15px",marginTop:"15px",marginLeft:"20px"}}/>
                            <h1 style={{fontSize:"18px", marginLeft:"10px",fontWeight:"400",color:"white"}} >LogOut</h1>
                        </div>
                    </div>
                </div>

            ): (
                <div></div>
            )}
            {post ? (
                <div className='post'>
                    <div className="flex2">
                    <h1 style={{color:"white",marginTop:"1px"}}>Post Articles</h1>
                    <img src={cross} alt="" style={{width:"20px",height:"20px",marginTop:"10px"}} onClick={()=>{setPost(!post)}}/>
                    </div>
                    <div className="input_container" style={{width:"677px"}}>
                        <input type="text" placeholder='Post Title' />
                    </div>
                    <div className="input_container" style={{width:"677px"}}>
                        <input type="text" placeholder='Topics' />
                    </div>
                    <div className="input_container" style={{width:"677px",height:"400px",alignItems:"flex-start"}}>
                        <input type="description" placeholder='Input Text Here...' style={{marginTop:"20px"}}/>
                    </div>
                    <div className="button" style={{marginLeft:"80%"}}>
                            <button onClick={()=>{setPost(!post)}}><h1 style={{ fontSize: "20px" }}>Post</h1></button>
                            
                            
                        </div>
                </div>
            ): (<div></div>)}

            {read ? (<div className='read'>
                <div className="flex">
                    <img src={rectangle} alt="" style={{marginLeft:"35%"}}/>
                    <img src={cross} alt="" style={{height:"15px",width:"15px",marginLeft:"200px",marginTop:"10px"}} onClick={()=>{setRead(!read)}}/>
                </div>
                <div className="column" style={{justifyContent:"center",alignItems:"center"}}>
                        <p style={{margin:"14px",fontSize:"25px",fontWeight:"700"}}>How to write better code with clean architecture?</p>
                        <div className="flex">
                            <img src={aniket} alt="" style={{width:"30px",height:"30px",borderRadius:"30px"}}/>
                            <pre style={{fontSize:"12px",fontWeight:"400",marginLeft:'10px',marginTop:"5px",color:"white"}}>Steve Jobs</pre>
                            <pre style={{marginLeft:"50px",fontSize:"12px",marginTop:"5px",color:"white"}}> | 2 hrs Ago</pre>
                            <p style={{marginLeft:"150px",fontSize:"12px",marginTop:"5px",fontWeight:"400"}}>253</p>
                            <img src={thumb} alt="" style={{width:"12px",height:"12px",marginTop:"5px"}}/>
                        </div>
                        <p style={{marginLeft:"40px",fontSize:"18px",fontWeight:"400",marginRight:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor bibendum tempus. Curabitur mattis, turpis eu viverra accumsan, lectus mi convallis odio, eu porta nunc sem sed lectus. Vivamus a porttitor libero. Ut auctor dapibus purus, eget gravida dolor elementum id. Nulla fringilla, nisl maximus elementum pharetra, risus metus consectetur nunc, a volutpat arcu massa eu urna. Maecenas non neque leo. Aliquam erat volutpat. Fusce facilisis mi augue, non vulputate dolor imperdiet ac. Vestibulum eu mollis lorem, id accumsan eros. Praesent quis consectetur elit, condimentum pulvinar eros. Ut tincidunt, lectus sit amet varius volutpat, lorem...</p>
                        </div>

            </div>):(<div></div>)}
            <div className='search_container'>
                <div className="search">
                    <div className="search_color">
                        <input type="text" placeholder='Search' style={{marginTop:"15px"}}/>
                        <img src={search} alt="search" style={{marginTop:'10px'}}/>

                    </div>
                </div>

            </div>
            <h1 style={{color:"white",marginLeft:"100px"}}>Top Articles</h1>
            <div className="articles">
                <div className="card" onClick={()=>{setRead(true)}}>
                    <div style={{marginTop:"14px",marginRight:"14px",marginLeft:"5px",marginBottom:"14px"}}>
                        <img src={rectangle} alt="" style={{width:"212px",height:"212px",borderRadius:"20px"}}/>
                        <p style={{margin:"14px"}}>How to write better code with clean architecture?</p>
                        <div className="flex">
                            <img src={aniket} alt="" style={{width:"24px",height:"24px",borderRadius:"24px"}}/>
                            <p style={{fontSize:"12px",fontWeight:"400",marginLeft:'10px',marginTop:"5px"}}>Steve Jobs</p>
                            <p style={{marginLeft:"60px",fontSize:"12px",marginTop:"5px",fontWeight:"400"}}>253</p>
                            <img src={thumb} alt="" style={{width:"12px",height:"12px",marginTop:"5px"}}/>
                        </div>
                    </div>
                </div>
                <div className="card" onClick={()=>{setRead(true)}}>
                    <div style={{marginTop:"14px",marginRight:"14px",marginLeft:"5px",marginBottom:"14px"}}>
                        <img src={rectangle} alt="" style={{width:"212px",height:"212px",borderRadius:"20px"}}/>
                        <p style={{margin:"14px"}}>How to write better code with clean architecture?</p>
                        <div className="flex">
                            <img src={aniket} alt="" style={{width:"24px",height:"24px",borderRadius:"24px"}}/>
                            <p style={{fontSize:"12px",fontWeight:"400",marginLeft:'10px',marginTop:"5px"}}>Steve Jobs</p>
                            <p style={{marginLeft:"60px",fontSize:"12px",marginTop:"5px",fontWeight:"400"}}>253</p>
                            <img src={thumb} alt="" style={{width:"12px",height:"12px",marginTop:"5px"}}/>
                        </div>
                    </div>
                </div>
                <div className="card" onClick={()=>{setRead(true)}}>
                    <div style={{marginTop:"14px",marginRight:"14px",marginLeft:"5px",marginBottom:"14px"}}>
                        <img src={rectangle} alt="" style={{width:"212px",height:"212px",borderRadius:"20px"}}/>
                        <p style={{margin:"14px"}}>How to write better code with clean architecture?</p>
                        <div className="flex">
                            <img src={aniket} alt="" style={{width:"24px",height:"24px",borderRadius:"24px"}}/>
                            <p style={{fontSize:"12px",fontWeight:"400",marginLeft:'10px',marginTop:"5px"}}>Steve Jobs</p>
                            <p style={{marginLeft:"60px",fontSize:"12px",marginTop:"5px",fontWeight:"400"}}>253</p>
                            <img src={thumb} alt="" style={{width:"12px",height:"12px",marginTop:"5px"}}/>
                        </div>
                    </div>
                </div>
                <div className="card" onClick={()=>{setRead(true)}}>
                    <div style={{marginTop:"14px",marginRight:"14px",marginLeft:"5px",marginBottom:"14px"}}>
                        <img src={rectangle} alt="" style={{width:"212px",height:"212px",borderRadius:"20px"}}/>
                        <p style={{margin:"14px"}}>How to write better code with clean architecture?</p>
                        <div className="flex">
                            <img src={aniket} alt="" style={{width:"24px",height:"24px",borderRadius:"24px"}}/>
                            <p style={{fontSize:"12px",fontWeight:"400",marginLeft:'10px',marginTop:"5px"}}>Steve Jobs</p>
                            <p style={{marginLeft:"60px",fontSize:"12px",marginTop:"5px",fontWeight:"400"}}>253</p>
                            <img src={thumb} alt="" style={{width:"12px",height:"12px",marginTop:"5px"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div style={{marginLeft:"108px"}}>
                <h1 style={{color:"white"}}>Feed</h1>
                <div className="feed" onClick={()=>{setRead(true)}}>
                    <div className="flex" style={{margin:"14px"}}>
                        <img src={rectangle} alt="" style={{height:"180px",width:"180px",borderRadius:"20px",marginTop:"14px",marginBottom:"14px"}}/>
                        
                        <div className="column">
                        <p style={{margin:"14px",fontSize:"18px",fontWeight:"700"}}>How to write better code with clean architecture?</p>
                        <div className="flex">
                            <img src={aniket} alt="" style={{width:"30px",height:"30px",borderRadius:"30px"}}/>
                            <pre style={{fontSize:"12px",fontWeight:"400",marginLeft:'10px',marginTop:"5px",color:"white"}}>Steve Jobs</pre>
                            <pre style={{marginLeft:"50px",fontSize:"12px",marginTop:"5px",color:"white"}}> | 2 hrs Ago</pre>
                            <p style={{marginLeft:"150px",fontSize:"12px",marginTop:"5px",fontWeight:"400"}}>253</p>
                            <img src={thumb} alt="" style={{width:"12px",height:"12px",marginTop:"5px"}}/>
                        </div>
                        <p style={{marginLeft:"14px",fontSize:"12px",fontWeight:"400"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor bibendum tempus. Curabitur mattis, turpis eu viverra accumsan, lectus mi convallis odio, eu porta nunc sem sed lectus. Vivamus a porttitor libero. Ut auctor dapibus purus, eget gravida dolor elementum id. Nulla fringilla, nisl maximus elementum pharetra, risus metus consectetur nunc, a volutpat arcu massa eu urna. Maecenas non neque leo. Aliquam erat volutpat. Fusce facilisis mi augue, non vulputate dolor imperdiet ac. Vestibulum eu mollis lorem, id accumsan eros. Praesent quis consectetur elit, condimentum pulvinar eros. Ut tincidunt, lectus sit amet varius volutpat, lorem...</p>
                        </div>
                    </div>
                </div>
                <div className="feed" onClick={()=>{setRead(true)}}>
                    <div className="flex" style={{margin:"14px"}}>
                        <img src={rectangle} alt="" style={{height:"180px",width:"180px",borderRadius:"20px",marginTop:"14px",marginBottom:"14px"}}/>
                        
                        <div className="column">
                        <p style={{margin:"14px",fontSize:"18px",fontWeight:"700"}}>How to write better code with clean architecture?</p>
                        <div className="flex">
                            <img src={aniket} alt="" style={{width:"30px",height:"30px",borderRadius:"30px"}}/>
                            <pre style={{fontSize:"12px",fontWeight:"400",marginLeft:'10px',marginTop:"5px",color:"white"}}>Steve Jobs</pre>
                            <pre style={{marginLeft:"50px",fontSize:"12px",marginTop:"5px",color:"white"}}> | 2 hrs Ago</pre>
                            <p style={{marginLeft:"150px",fontSize:"12px",marginTop:"5px",fontWeight:"400"}}>253</p>
                            <img src={thumb} alt="" style={{width:"12px",height:"12px",marginTop:"5px"}}/>
                        </div>
                        <p style={{marginLeft:"14px",fontSize:"12px",fontWeight:"400"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor bibendum tempus. Curabitur mattis, turpis eu viverra accumsan, lectus mi convallis odio, eu porta nunc sem sed lectus. Vivamus a porttitor libero. Ut auctor dapibus purus, eget gravida dolor elementum id. Nulla fringilla, nisl maximus elementum pharetra, risus metus consectetur nunc, a volutpat arcu massa eu urna. Maecenas non neque leo. Aliquam erat volutpat. Fusce facilisis mi augue, non vulputate dolor imperdiet ac. Vestibulum eu mollis lorem, id accumsan eros. Praesent quis consectetur elit, condimentum pulvinar eros. Ut tincidunt, lectus sit amet varius volutpat, lorem...</p>
                        </div>
                    </div>
                </div>
                <div className="feed" onClick={()=>{setRead(true)}}>
                    <div className="flex" style={{margin:"14px"}}>
                        <img src={rectangle} alt="" style={{height:"180px",width:"180px",borderRadius:"20px",marginTop:"14px",marginBottom:"14px"}}/>
                        
                        <div className="column">
                        <p style={{margin:"14px",fontSize:"18px",fontWeight:"700"}}>How to write better code with clean architecture?</p>
                        <div className="flex">
                            <img src={aniket} alt="" style={{width:"30px",height:"30px",borderRadius:"30px"}}/>
                            <pre style={{fontSize:"12px",fontWeight:"400",marginLeft:'10px',marginTop:"5px",color:"white"}}>Steve Jobs</pre>
                            <pre style={{marginLeft:"50px",fontSize:"12px",marginTop:"5px",color:"white"}}> | 2 hrs Ago</pre>
                            <p style={{marginLeft:"150px",fontSize:"12px",marginTop:"5px",fontWeight:"400"}}>253</p>
                            <img src={thumb} alt="" style={{width:"12px",height:"12px",marginTop:"5px"}}/>
                        </div>
                        <p style={{marginLeft:"14px",fontSize:"12px",fontWeight:"400"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor bibendum tempus. Curabitur mattis, turpis eu viverra accumsan, lectus mi convallis odio, eu porta nunc sem sed lectus. Vivamus a porttitor libero. Ut auctor dapibus purus, eget gravida dolor elementum id. Nulla fringilla, nisl maximus elementum pharetra, risus metus consectetur nunc, a volutpat arcu massa eu urna. Maecenas non neque leo. Aliquam erat volutpat. Fusce facilisis mi augue, non vulputate dolor imperdiet ac. Vestibulum eu mollis lorem, id accumsan eros. Praesent quis consectetur elit, condimentum pulvinar eros. Ut tincidunt, lectus sit amet varius volutpat, lorem...</p>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="line"></div>
                <div>
                <h1 style={{color:"white",marginLeft:"180px"}}>Trending Topics</h1>
                <div className="column" style={{marginLeft:"180px"}}>
                    <a href="" style={{marginBottom:"10px"}}>Artificial Intelligence and Machine Learning</a>
                    <a href="" style={{marginBottom:"10px"}}>Blockchain Technology</a>
                    <a href="" style={{marginBottom:"10px"}}>Quantum Computing</a>
                    <a href="" style={{marginBottom:"10px"}}>Cybersecurity</a>
                    <a href="" style={{marginBottom:"10px"}}>Internet of Things (IoT)</a>
                    <a href="" style={{marginBottom:"10px"}}>Cloud Computing</a>
                    <a href="" style={{marginBottom:"10px"}}>Data Science and Big Data</a>
                    <a href="" style={{marginBottom:"10px"}}>Virtual Reality (VR) and Augmented Reality (AR)</a>
                    <a href="" style={{marginBottom:"10px"}}>5G Technology</a>
                    <a href="" style={{marginBottom:"10px"}}>Autonomous Vehicles</a>
                    <a href="" style={{marginBottom:"10px"}}>Biotechnology and Genetic Engineering</a>
                    <a href="" style={{marginBottom:"10px"}}>Renewable Energy Technologies</a>
                    <a href="" style={{marginBottom:"10px"}}>Neural Networks and Deep Learning</a>
                    <a href="" style={{marginBottom:"10px"}}>Natural Language Processing (NLP)</a>
                    <a href="" style={{marginBottom:"10px"}}>Robotics and Automation</a>
                    <a href="" style={{marginBottom:"10px"}}>Bioinformatics</a>
                    <a href="" style={{marginBottom:"10px"}}>Cryptocurrency and Bitcoin</a>
                    <a href="" style={{marginBottom:"10px"}}>Human-Computer Interaction</a>
                    <a href="" style={{marginBottom:"10px"}}>3D Printing</a>
                    <a href="" style={{marginBottom:"10px"}}>Space Exploration Technologies</a>
                </div>
                </div>
            </div>
            
        </div>

    )
}

export default Home;