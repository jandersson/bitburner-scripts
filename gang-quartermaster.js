
/** @param {import(".").NS } ns */
function quarterMaster(ns){
    var items = ns.gang.getEquipmentNames();
    var members = ns.gang.getMemberNames();
    for (let i in members){
        for (let j in items){
            ns.gang.purchaseEquipment(members[i], items[j]);
        }
    }
}

/** @param {import(".").NS } ns */
export async function main(ns) {
    while(true){
        quarterMaster(ns);
        await ns.sleep(60_000);
    }

}