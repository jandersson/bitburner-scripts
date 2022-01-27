/** @param {import(".").NS} ns */
export async function main(ns){
    while (true){
        var factions = ns.checkFactionInvitations();
        for (var i = 0; i < factions.length; ++i){
            var joined = ns.joinFaction(factions[i]);
            if (joined){
                ns.tprint("Joined ", factions[i], "!");
            }
        }
        await ns.sleep(60_000);
    }

}