function SinglePhoto(props) {
    
    let id = props.params.id
    const path = '/assets/img/'
    const style = props.modal ? {width: '100%'} : { width: '350px', height: '250px' };
    return (   

        <img className='singlePhoto' src={path + id} alt={id} style={style} /> 
     
    )
}

export default SinglePhoto