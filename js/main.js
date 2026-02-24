let interviewTotal = [];
let rejectedTotal = [];
let currentStatus = "all"

// get apllication tracker by id
let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let availableJobs = document.getElementById("Available_jobs")


const filteredSection = document.getElementById("filteredSection")


const allCards = document.getElementById("allCards");



// total count function
function totalCount() {
    const allCardsCount = allCards.children.length;
    total.innerText = allCardsCount;
    availableJobs.innerText = allCardsCount

    const interviewCount = interviewTotal.length;
    interview.innerText = interviewCount;

    const rejectedCount = rejectedTotal.length;
    rejected.innerText = rejectedCount;
}

// delete card 
allCards.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete_btn")) {
    const card = e.target.closest(".job_card");
    card.remove();
    totalCount();
  }
})

totalCount()



// get btn by id 
const allCardBtn = document.getElementById("all_card_show")
const interviewCardShow = document.getElementById("interview_card_show")
const rejectedCardShow = document.getElementById("rejected_card_show")

// button toggle function
function toggleStyle(id) {
    // remove
    allCardBtn.classList.remove("bg-[#3B82F6]", "text-white");
    interviewCardShow.classList.remove("bg-[#3B82F6]", "text-white");
    rejectedCardShow.classList.remove("bg-[#3B82F6]", "text-white");
    // add
    allCardBtn.classList.add("bg-gray-200", "text-[#64748B]");
    interviewCardShow.classList.add("bg-gray-200", "text-[#64748B]");
    rejectedCardShow.classList.add("bg-gray-200", "text-[#64748B]");
    // current btn active 
    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove("bg-gray-200", "text-[#64748B]")
    selected.classList.add("bg-[#3B82F6]", "text-white")

    if (id === "interview_card_show") {
        allCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderInterview()
    }
    else if (id === "all_card_show") {
        allCards.classList.remove("hidden");
        filteredSection.classList.add("hidden")
    }
    else if (id === "rejected_card_show") {
        allCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        renderRejected();
    }


}


const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
   
    if (event.target.classList.contains("interview_btn")) {
        const parentNode = event.target.parentNode.parentNode;

        const jobTitle = parentNode.querySelector(".job_title").innerText;
        const jobCircular = parentNode.querySelector(".job_circular").innerText;
        const jobInformation = parentNode.querySelector(".job_information").innerText;
        const btnSatus = parentNode.querySelector(".btn_apply").innerText;
        const jobDes = parentNode.querySelector(".job_des").innerText;

        parentNode.querySelector(".btn_apply").classList.add("btn-outline", "btn-success")
        parentNode.querySelector(".btn_apply").classList.remove("btn-error")
        parentNode.querySelector(".btn_apply").innerText = "INTERVIEW"


        const cardInfo = {
            jobTitle,
            jobCircular,
            jobInformation,
            jobDes,
            btnSatus: 'INTERVIEW'
        }

        const jobTitleExit = interviewTotal.find(item => item.jobTitle == cardInfo.jobTitle)
        if (!jobTitleExit) {
            interviewTotal.push(cardInfo)
        }

        parentNode.querySelector(".btn_apply").classList.add("btn-outline", "btn-success")
        parentNode.querySelector(".btn_apply").classList.remove("btn-error")

        rejectedTotal = rejectedTotal.filter(item => item.jobTitle !== cardInfo.jobTitle)

        if(currentStatus == "interview_card_show" ){
            renderInterview()
        }
        else if(currentStatus == "rejected_card_show" ){
             renderRejected()
        }

        totalCount()

    }

    else if (event.target.classList.contains("rejected_btn")) {
        const parentNode = event.target.parentNode.parentNode;

        const jobTitle = parentNode.querySelector(".job_title").innerText;
        const jobCircular = parentNode.querySelector(".job_circular").innerText;
        const jobInformation = parentNode.querySelector(".job_information").innerText;
        const btnSatus = parentNode.querySelector(".btn_apply").innerText;
        const jobDes = parentNode.querySelector(".job_des").innerText;

        parentNode.querySelector(".btn_apply").classList.add("btn-outline", "btn-error")
        parentNode.querySelector(".btn_apply").classList.remove("btn-success")

        parentNode.querySelector(".btn_apply").innerText = "REJECTED"


        const cardInfo = {
            jobTitle,
            jobCircular,
            jobInformation,
            jobDes,
            btnSatus: 'REJECTED'
        }

        const jobTitleExit = rejectedTotal.find(item => item.jobTitle == cardInfo.jobTitle)
        if (!jobTitleExit) {
            rejectedTotal.push(cardInfo)
        }
        
        interviewTotal = interviewTotal.filter(item => item.jobTitle !== cardInfo.jobTitle)
        console.log(currentStatus);
        
        if(currentStatus == "interview_card_show" ){
            renderInterview()
        }
        else if(currentStatus == "rejected_card_show" ){
             renderRejected()
        }


        totalCount()
       
    }


})

// render interview section
// const filterSection = document.getElementById("filteredSection")

function renderInterview() {
    filteredSection.innerHTML = " ";
    
  
    for (let interview of interviewTotal) {
        console.log(interview);

        let div = document.createElement("div")
        div.classList = "bg-white p-5 space-y-6"
        div.innerHTML = `
            <div class="flex justify-between">
                <div class="space-y-2">
                    <h3 class="text-[#002C5C] text-xl font-bold job_title">${interview.jobTitle}</h3>
                    <p class="text-[#64748B] job_circular">${interview.jobCircular}</p>
                </div>
                <div class="btn rounded-full w-8 h-8 ">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
            <p class="text-[#64748B] text-sm job_information">${interview.jobInformation}</p>
            <div class="space-y-2">
                <div class="btn btn_apply btn-outline btn-success">${interview.btnSatus}</div>
                <p class="text-[#323B49] job_des">${interview.jobDes}</p>
            </div>
            <div>
                <div class="btn btn-outline btn-success interview_btn">INTERVIEW</div>
                <div class="btn btn-outline btn-error rejected_btn">REJECTED</div>
            </div>       
        
        
        `
        filteredSection.appendChild(div)
    }
}
function renderRejected(data) {
    
    filteredSection.innerHTML = ""
 
    for (let rejected of rejectedTotal) {
        
        
        let div = document.createElement("div")
        div.classList = "bg-white p-5 space-y-6"
        div.innerHTML = `
            <div class="flex justify-between">
                <div class="space-y-2">
                    <h3 class="text-[#002C5C] text-xl font-bold job_title">${rejected.jobTitle}</h3>
                    <p class="text-[#64748B] job_circular">${rejected.jobCircular}</p>
                </div>
                <div class="btn rounded-full w-8 h-8 ">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
            <p class="text-[#64748B] text-sm job_information">${rejected.jobInformation}</p>
            <div class="space-y-2">
                <div class="btn btn_apply btn-outline btn-error">${rejected.btnSatus}</div>
                <p class="text-[#323B49] job_des">${rejected.jobDes}</p>
            </div>
            <div>
                <div class="btn btn-outline btn-success interview_btn">INTERVIEW</div>
                <div class="btn btn-outline btn-error rejected_btn">REJECTED</div>
            </div>       
        
        
        `
        filteredSection.appendChild(div)
    }
}
