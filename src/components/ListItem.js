const ListItem = (props)=>{
    console.log()
    return (
        <div className="wrapper d-flex justify-content-center">
            <div className="d-flex justify-content-between bg-light m-1 p-3" style={{minWidth:'300px'}}>
                <div className="">
                    <img src={props?.pic} alt="Not available" />
                </div>
                <div className="">{props?.name}</div>
            </div>
        </div>
        
    )
}

export default ListItem