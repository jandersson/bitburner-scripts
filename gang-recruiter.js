
/** @param {import(".").NS } ns */
function doRecruit(ns){
    if (ns.gang.canRecruitMember()){
        let memId = 0;
        let memName = "ganger";
        while (!ns.gang.recruitMember("ganger" + memId)){
            ++memId;
        }
        ns.tprint("Recruiting good old " + memName + memId);
    }
}

/** @param {import(".").NS } ns */
export async function main(ns) {
    while(true){
        doRecruit(ns);
        await ns.sleep(60_000);
    }
}