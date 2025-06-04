const validateSessionToken =()=>{
    const token = sessionStorage.getItem('token');

    if( !token ){
        window.location.replace('/html/login.html');
    }
};

const validateRolBitacora=()=>{
    const {User_Status} =JSON.parse( sessionStorage.getItem('user'));
    (User_Status!=2)&&window.location.replace('/html/login.html');
}

export{
validateSessionToken,
validateRolBitacora
}