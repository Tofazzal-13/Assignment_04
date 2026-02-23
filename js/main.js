let interviewTotal = [];
let rejectedTotal = [];

// get apllication tracker by id
let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let availableJobs = document.getElementById("Available_jobs")

// get btn by id 
const allCardBtn = document.getElementById("all_card_show")
const interviewCardShow = document.getElementById("interview_card_show")
const rejectedCardShow = document.getElementById("rejected_card_show")

const allCards = document.getElementById("allCards");
const mainContainer = document.querySelector("main");


// total count function
function totalCount(){
    const allCardsCount = allCards.children.length;
    total.innerText = allCardsCount;
    availableJobs.innerText = allCardsCount

    const interviewCount = interviewTotal.length;
    interview.innerText = interviewCount;

    const rejectedCount = rejectedTotal.length;
    rejected.innerText = rejectedCount;
}

totalCount()


// button toggle function
function toggleStyle(id){
    // remove
    allCardBtn.classList.remove("bg-[#3B82F6]","text-white");
    interviewCardShow.classList.remove("bg-[#3B82F6]","text-white");
    rejectedCardShow.classList.remove("bg-[#3B82F6]","text-white");
    // add
    allCardBtn.classList.add("bg-gray-200","text-[#64748B]");
    interviewCardShow.classList.add("bg-gray-200","text-[#64748B]");
    rejectedCardShow.classList.add("bg-gray-200","text-[#64748B]");
    // current btn active 
    const selected = document.getElementById(id);
    selected.classList.remove("bg-gray-200","text-[#64748B]")
    selected.classList.add("bg-[#3B82F6]","text-white")
   
}
