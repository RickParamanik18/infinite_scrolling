import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

const Login = (props)=>{
    const inputRef1=useRef(null)
    const inputRef2=useRef(null)
    const navigate = useNavigate()

    const clickHandler = ()=>{
        if(inputRef1.current.value==='foo' && inputRef2.current.value==='bar'){
            props.setIsAuth(true)
            navigate('/home')
        }else{
            alert('try using username : foo and password : bar')
        }
    }
    
    return(
        <div className="wrapper d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
            <div className="bg-light p-5" id="login">
                <form method="post">
                    <div className="h1 text-center mb-5">Log-in</div>
                    <input type="text" className="form-control m-2" placeholder="Username" ref={inputRef1}/>
                    <input type="password" className="form-control m-2" placeholder="Password" ref={inputRef2}/>
                    <div className=" d-flex justify-content-center">
                        <input type="button" className="btn btn-primary m-3" value="Log-in" onClick={clickHandler}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login