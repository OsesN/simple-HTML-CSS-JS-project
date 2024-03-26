(function(){
    const titleQuestions=[...document.querySelectorAll(".questions__title")];

    titleQuestions.forEach(question=>{
        question.addEventListener("click",()=>{
            let height=0;   
            let answer=question.nextElementSibling;

            if(answer.clientHeight===0){
                answer.style.height=`${answer.scrollHeight}px`;

            }
            else{
                answer.style.height=`${0}px`;
            }
            question.firstElementChild.classList.toggle("questions__arrow--rotate");
            question.parentElement.parentElement.classList.toggle("questions__padding--add");
        });
    });
})();