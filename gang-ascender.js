/** @param {import(".").NS } ns */
export async function main(ns) {
    while (true){
        var members = ns.gang.getMemberNames();
        for (let i in members){
            var member = members[i];
            var result = ns.gang.getAscensionResult(member);
            for (let j in result){
                if (j == "respect"){
                    continue;
                }
                if (result[j] >= 2){
                    ns.gang.ascendMember(member);
                    ns.tprint("Ascended member: ", member);
                    break;
                }
            }
        }
        await ns.sleep(60_000);
    }
}