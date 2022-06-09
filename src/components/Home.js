import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ListItem from "./ListItem"

const Home = (props)=>{
    const [data,setData] = useState([])
    const [lock,setlock] = useState(false)

    const navigate = useNavigate()
    const logoutHandler = ()=>{
        navigate('/')
        props.setIsAuth(false)
    }
    const getData = (n,time)=>{
        setTimeout(async ()=>{
            const tempRes = await fetch(`https://randomuser.me/api/?results=${n}`)
            const result = await tempRes.json()
            setData(prevData=>[...prevData,...result.results])
        },time)
    }


    useEffect(()=>{
        if(!props.isAuth){
            alert('you need to log-in first')
            navigate('/')
        }
        fetch(`https://randomuser.me/api/?results=50`)
        .then(res=>res.json())
        .then(data=>setData(data.results))
    },[])


    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            getData(10,1000)
        }
    };

    return (
        <div className="m-3">
            <div className="d-flex justify-content-end">
                <input type="button" className="btn btn-primary" value='log-out' onClick={logoutHandler}/>
            </div>
            <div className="" id="list">
                {data.map((item,i)=>{
                    return <ListItem key={Math.random()} name={data[i].name.first +" "+ data[i].name.last} pic={data[i].picture.medium}/>
                })}
            </div>
            <div className="text-center my-2">Loading Feedback...</div>
        </div>
    )
}

export default Home