let faqItems = document.getElementsByClassName("faq-item");
let currentItem;

for (let i=0;i<faqItems.length;i++) { 
    faqItems[i].addEventListener("click", function(){
        this.classList.toggle('start-anim');
    }); // "тест", "пройден"
}

function toggleAccordion(element)
{
    element.classList.toggle('start-anim');
}