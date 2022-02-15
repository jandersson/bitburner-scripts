
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/** @param {import(".").NS } ns */
function getRandomTask(ns){
    let all_tasks = ns.gang.getTaskNames();
    return all_tasks[getRandomInt(0, all_tasks.length)];
}

/** @param {import(".").NS } ns */
export async function main(ns) {
    let money_task = "Human Trafficking";
    let easy_task = "Mug People";
    let war_task = "Territory Warfare";

    while (true){
        let members = ns.gang.getMemberNames();
        let gangSize = members.length;
        for (let i in members){
            let gangfo = ns.gang.getGangInformation();
            let member = members[i];
            if (gangfo["wantedLevel"] > 1){
                ns.gang.setMemberTask(member, "Vigilante Justice");
            }
            else {
                let randTask = getRandomTask(ns);
                while(randTask == 'Unassigned'){
                    randTask = getRandomTask(ns);
                }
                ns.gang.setMemberTask(member, randTask);
            }
            await ns.sleep(10_000);
        }
    }
}