document.addEventListener("DOMContentLoaded",()=> {
    const share=document.getElementById("share-icon");

    share.addEventListener('click',()=>{
        const footers=document.querySelectorAll(".sub-left");
        const parent=document.querySelector('footer');
        console.log(parent);
        footers.forEach(footer => {
            if(footer.classList.contains('active')){
                footer.classList.remove('active');
                parent.classList.remove('background_change');
            }
            else{
                footer.classList.add('active');
                parent.classList.add('background_change');
            }
            
        });
    })
});