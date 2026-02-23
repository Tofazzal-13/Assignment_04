let interviewTotal = [];
let rejectedTotal = [];

// get apllication tracker by id
let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let availableJobs = document.getElementById("Available_jobs")

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
    selected.classList.remove("bg-gray-200", "text-[#64748B]")
    selected.classList.add("bg-[#3B82F6]", "text-white")

}


const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", function (event) {
    console.log(event.target.classList.contains("interview_btn"));
    
    if (event.target.classList.contains("interview_btn")) {
        const parentNode = event.target.parentNode.parentNode;

        const jobTitle = parentNode.querySelector(".job_title").innerText;
        const jobCircular = parentNode.querySelector(".job_circular").innerText;
        const jobInformation = parentNode.querySelector(".job_information").innerText;
        const btnSatus = parentNode.querySelector(".btn_apply").innerText;
        const jobDes = parentNode.querySelector(".job_des").innerText;
    
        
        const cardInfo = {
            jobTitle,
            jobCircular,
            jobInformation,
            jobDes,
            btnSatus
        }

        const jobTitleExit = interviewTotal.find(item => item.jobTitle == cardInfo.jobTitle)
        parentNode.querySelector(".btn_apply").innerText = "INTERVIEW"
        parentNode.querySelector(".btn_apply").classList.add("btn-outline","btn-success")
        if (!jobTitleExit) {
            interviewTotal.push(cardInfo)
        }
        renderInterview()
    }

})

// render interview section
const filterSection = document.getElementById("filtered_section")

function renderInterview() {
    filterSection.innerHTML = '';
    for (let interview of interviewTotal) {
        console.log(interview);

        let div = document.createElement("div")
        div.classList = "bg-white p-5 space-y-6"
        div.innerHTML = `
            <div class="flex justify-between">
                <div class="space-y-2">
                    <h3 class="text-[#002C5C] text-xl font-bold job_title">Mobile First Corp</h3>
                    <p class="text-[#64748B] job_circular">React Native Developer</p>
                </div>
                <div class="btn rounded-full w-8 h-8 ">
                    <i class="fa-solid fa-trash-can"></i>
                </div>
            </div>
            <p class="text-[#64748B] text-sm job_information">Remote • Full-time • $130,000 - $175,000</p>
            <div class="space-y-2">
                <div class="btn btn_apply">NOT APPLIED</div>
                <p class="text-[#323B49] job_des">Build cross-platform mobile applications using React Native. Work on products used by
                    millions of users worldwide.</p>
            </div>
            <div>
                <div class="btn btn-outline btn-success">INTERVIEW</div>
                <div class="btn btn-outline btn-error">REJECTED</div>
            </div>       
        
        
        `
        filterSection.appendChild(div)
    }
}