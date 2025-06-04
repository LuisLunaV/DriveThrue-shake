
const scrollOrderUp = () =>{
    const ulElments = document.querySelector('.ulList-orders');
    const liElements = ulElments.querySelectorAll('li');
    
    if( liElements.length > 7){
        const scrollTop = ulElments.scrollHeight - ulElments.clientHeight;
        
        ulElments.scrollTo({
            top: scrollTop,
            behavior: 'smooth',
            duration: 3000
        })
    }

};

const scrollOrderUpConfirm =()=>{
const ulElementsConfirm = document.querySelector('.ulList-orders-correct');
const liElementsConfirm = ulElementsConfirm.querySelectorAll('li');

if( liElementsConfirm.length > 12){
    const scrollTop = ulElementsConfirm.scrollHeight - ulElementsConfirm.clientHeight;

    ulElementsConfirm.scrollTo({
        top:scrollTop,
        behavior: 'smooth',
        duration:3000
    })

}
}

export{
    scrollOrderUp,
    scrollOrderUpConfirm
}